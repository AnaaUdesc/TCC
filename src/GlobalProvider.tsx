import React, { createContext, useContext, useState, ReactNode } from "react";
import { methods } from "./db/methods";
import { requirements as requirementsDB } from "./db/requirements";

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextData | undefined>(undefined);

interface RequirementProps {
  id: string;
  selectedValues: string[];
}

interface GlobalContextData {
  handleCheckboxChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    requirementId: string,
    newValue: string
  ) => void;
  getRequirementLength: (requirementId: string) => number;
  handleRadioChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    requirementId: string
  ) => void;
  handleClearRequirement: (requirementIds: string[]) => void;
  handleScoreByMethod: (method: string) => {
    scoreGeral: number;
    scoresRepresentativos: {
      [key: string]: { score: number; scoreRepresentativo: number };
    };
  };
  selectedRequirements: RequirementProps[] | null | undefined;
  handleResetSelectedRequirements: () => void;
  handleUnselectRequirement: (requirementId: string) => void;
  isRequirementSelectedByValue: (
    requirementId: string,
    value: string
  ) => boolean;
  getSelectedValuesByRequirementId: (requirementId: string) => string[];
  isRequirementSelected: (requirementId: string) => boolean;
}

// Provedor do contexto que engloba os componentes filhos
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [selectedRequirements, setSelectedRequirements] = useState<
    RequirementProps[] | null | undefined
  >(null);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    requirementId: string,
    newValue: string
  ) => {
    const isChecked = e.target.checked;

    setSelectedRequirements((prevRequirements) => {
      const currentRequirements = prevRequirements ?? [];

      const foundRequirement = currentRequirements.find(
        (req) => req.id === requirementId
      );

      if (isChecked) {
        if (foundRequirement) {
          return currentRequirements.map((req) =>
            req.id === requirementId
              ? {
                  ...req,
                  selectedValues: [
                    ...new Set([...req.selectedValues, newValue]),
                  ],
                }
              : req
          );
        } else {
          return [
            ...currentRequirements,
            { id: requirementId, selectedValues: [newValue] },
          ];
        }
      } else {
        if (foundRequirement) {
          return currentRequirements.map((req) =>
            req.id === requirementId
              ? {
                  ...req,
                  selectedValues: req.selectedValues.filter(
                    (value) => value !== newValue
                  ),
                }
              : req
          );
        }
      }
      return currentRequirements;
    });
  };

  const handleRadioChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    requirementId: string
  ) => {
    const newValue = e.target.value;

    setSelectedRequirements((prevRequirements) => {
      const currentRequirements = prevRequirements ?? [];

      const foundRequirement = currentRequirements.find(
        (req) => req.id === requirementId
      );

      if (foundRequirement) {
        return currentRequirements.map((req) =>
          req.id === requirementId
            ? {
                ...req,
                selectedValues: [newValue],
              }
            : req
        );
      } else {
        return [
          ...currentRequirements,
          { id: requirementId, selectedValues: [newValue] },
        ];
      }
    });
  };

  const getRequirementLength = (requirementId: string) => {
    const foundRequirement = selectedRequirements?.find(
      (req) => req.id === requirementId
    );

    return foundRequirement?.selectedValues.length ?? 0;
  };

  const handleClearRequirement = (requirementIds: string[]) => {
    setSelectedRequirements((prevRequirements) => {
      const currentRequirements = prevRequirements ?? [];

      return currentRequirements.filter(
        (req) => !requirementIds.includes(req.id)
      );
    });
  };

  const handleGetParentRequirementIds = (methodId: string) => {
    const method = methods.find((method) => method.id === methodId);

    if (!method) {
      return [];
    }

    const methodRequirementValues = [
      ...(method.needANDReference?.map((req) => req.requirement) || []),
      ...(method.needORReference?.map((req) => req.requirement) || []),
      ...(method.unNeedORReference?.map((req) => req.requirement) || []),
    ].filter((value, index, self) => self.indexOf(value) === index);

    return methodRequirementValues;
  };

  const handleScoreByMethod = (methodId: string) => {
    const parentIds = handleGetParentRequirementIds(methodId);

    const method = methods.find((method) => method.id === methodId);

    const filteredSelectedRequirements = selectedRequirements?.filter((req) =>
      parentIds.includes(req.id)
    );

    const canceledInSelectedRequirements =
      selectedRequirements?.filter((req) =>
        method?.canceledRequirements?.includes(req.id)
      ).length || 0;

    const quantityOfParentIds = parentIds.length;

    const scoreByMethod: {
      [key: string]: {
        score: number;
        scoreRepresentativo: number;
      };
    } = {
      ...parentIds.reduce(
        (
          acc: {
            [key: string]: { score: number; scoreRepresentativo: number };
          },
          id
        ) => {
          acc[id] = {
            score: 0,
            scoreRepresentativo: 0,
          };
          return acc;
        },
        {}
      ),
    };

    filteredSelectedRequirements?.forEach((requirement) => {
      const requirementByDb = requirementsDB.find(
        (req) => req.id === requirement.id
      );

      const selectedValues = requirement.selectedValues;

      if (requirementByDb?.type === "AND") {
        const needANDReference = method?.needANDReference?.find(
          (req) => req.requirement === requirement.id
        );

        const needANDReferenceLength = needANDReference?.values.length ?? 0;

        const bigger =
          selectedValues.length >= needANDReferenceLength
            ? selectedValues.length
            : needANDReferenceLength;

        const percentage = 100 / bigger;

        const matchedValues = needANDReference?.values.filter((value) =>
          requirement.selectedValues.includes(value)
        );

        if (matchedValues) {
          scoreByMethod[requirement.id].score =
            matchedValues.length * percentage;

          scoreByMethod[requirement.id].scoreRepresentativo =
            ((100 / quantityOfParentIds) *
              (matchedValues.length * percentage)) /
            100;
        }
      }
      if (requirementByDb?.type === "OR") {
        const needORReference = method?.needORReference?.find(
          (req) => req.requirement === requirement.id
        );
        const unNeedORReference = method?.unNeedORReference?.find(
          (req) => req.requirement === requirement.id
        );

        const possibleCorrectResponses = needORReference?.values.concat(
          unNeedORReference?.values || []
        );

        if (possibleCorrectResponses?.includes(selectedValues[0])) {
          scoreByMethod[requirement.id].score = 100;

          scoreByMethod[requirement.id].scoreRepresentativo =
            100 / quantityOfParentIds;
        }
      }
    });

    let scoreGeral = Object.values(scoreByMethod).reduce(
      (acc, score) => acc + score.scoreRepresentativo,
      0
    );

    const modifier =
      scoreGeral /
      ((selectedRequirements?.length ?? 1) - canceledInSelectedRequirements);

    scoreGeral = Math.round(
      modifier * (filteredSelectedRequirements?.length ?? 1)
    );

    return {
      scoresRepresentativos: scoreByMethod,
      scoreGeral,
    };
  };

  const handleResetSelectedRequirements = () => {
    setSelectedRequirements(null);
  };

  const handleUnselectRequirement = (requirementId: string) => {
    const foundedRequirement = selectedRequirements?.find(
      (req) => req.id === requirementId
    );

    if (foundedRequirement) {
      setSelectedRequirements((prevRequirements) => {
        const currentRequirements = prevRequirements ?? [];

        return currentRequirements.filter((req) => req.id !== requirementId);
      });
    } else {
      setSelectedRequirements((prevRequirements) => {
        return prevRequirements?.map((req) => {
          if (req.selectedValues.includes(requirementId)) {
            return {
              ...req,
              selectedValues: req.selectedValues.filter(
                (value) => value !== requirementId
              ),
            };
          }
          return req;
        });
      });
    }
  };

  const isRequirementSelected = (requirementId: string): boolean => {
    return (
      selectedRequirements?.find((req) => req.id === requirementId) !==
      undefined
    );
  };

  const isRequirementSelectedByValue = (
    requirementId: string,
    value: string
  ): boolean => {
    const foundRequirement = selectedRequirements?.find(
      (req) => req.id === requirementId
    );

    return foundRequirement?.selectedValues.includes(value) ?? false;
  };

  const getSelectedValuesByRequirementId = (requirementId: string) => {
    const foundRequirement = selectedRequirements?.find(
      (req) => req.id === requirementId
    );

    return foundRequirement?.selectedValues ?? [];
  };

  return (
    <GlobalContext.Provider
      value={{
        handleCheckboxChange,
        getRequirementLength,
        handleRadioChange,
        handleClearRequirement,
        handleScoreByMethod,
        selectedRequirements,
        handleResetSelectedRequirements,
        handleUnselectRequirement,
        isRequirementSelectedByValue,
        getSelectedValuesByRequirementId,
        isRequirementSelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = (): GlobalContextData => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
