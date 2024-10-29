import React, { createContext, useContext, useState, ReactNode } from "react";
import { methods } from "./db/methods";
import { requirements as requirementsDB } from "./db/requirements";
import { CONSTANTES } from "./constantes";

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
  handleCalculateScoreByMethod: (method: string) => {
    scoreGeral: number;
  };
}

// Provedor do contexto que engloba os componentes filhos
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [selectedRequirements, setSelectedRequirements] = useState<
    RequirementProps[] | null
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

  const handleCalculateQuantityOfParents = (parentIds: string[]) => {
    let quantity = parentIds.length;

    if (
      parentIds.includes("participacao_do_usuario") &&
      parentIds.includes(CONSTANTES.QUANTIDADE_DE_USUARIOS)
    ) {
      quantity--;
    }

    if (
      parentIds.includes("participacao_do_especialista") &&
      parentIds.includes("quantidade_de_especialistas")
    ) {
      quantity--;
    }

    return quantity;
  };

  const handleCalculateScoreByMethod = (methodId: string) => {
    const parentIds = handleGetParentRequirementIds(methodId);

    const method = methods.find((method) => method.id === methodId);

    const filteredSelectedRequirements = selectedRequirements?.filter((req) =>
      parentIds.includes(req.id)
    );

    const quantityOfParentIds = handleCalculateQuantityOfParents(parentIds);

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

      console.log(requirementByDb, requirement);

      const selectedValues = requirement.selectedValues;

      if (
        requirementByDb?.id === "participacao_do_usuario" ||
        requirementByDb?.id === "participacao_do_especialista"
      ) {
        const needANDReference = method?.needANDReference?.find(
          (req) => req.requirement === requirement.id
        );

        if (
          needANDReference?.values.includes("nao") &&
          selectedValues[0] === "nao"
        ) {
          scoreByMethod[requirement.id].score = 100;
          scoreByMethod[requirement.id].scoreRepresentativo =
            100 / quantityOfParentIds;
        } else if (
          needANDReference?.values.includes("sim") &&
          selectedValues[0] === "sim"
        ) {
          if (requirementByDb?.id === "participacao_do_usuario") {
            const needORReference = method?.needORReference?.find(
              (req) => req.requirement === CONSTANTES.QUANTIDADE_DE_USUARIOS
            );

            const unNeedORReference = method?.unNeedORReference?.find(
              (req) => req.requirement === CONSTANTES.QUANTIDADE_DE_USUARIOS
            );

            const possibleCorrectResponses = needORReference?.values.concat(
              unNeedORReference?.values || []
            );

            const newSelectedValues =
              selectedRequirements?.find(
                (req) => req.id === CONSTANTES.QUANTIDADE_DE_USUARIOS
              )?.selectedValues || [];

            if (possibleCorrectResponses?.includes(newSelectedValues[0])) {
              scoreByMethod[requirement.id].score = 100;

              scoreByMethod[requirement.id].scoreRepresentativo =
                100 / quantityOfParentIds;
            }

            scoreByMethod["participacao_do_usuario"].score = 0;
            scoreByMethod["participacao_do_usuario"].scoreRepresentativo = 0;
          } else if (requirementByDb?.id === "participacao_do_especialista") {
            console.log("participacao_do_especialista");
            const needORReference = method?.needORReference?.find(
              (req) => req.requirement === "quantidade_de_especialistas"
            );

            const unNeedORReference = method?.unNeedORReference?.find(
              (req) => req.requirement === "quantidade_de_especialistas"
            );

            const possibleCorrectResponses = needORReference?.values.concat(
              unNeedORReference?.values || []
            );

            const newSelectedValues =
              selectedRequirements?.find(
                (req) => req.id === "quantidade_de_especialistas"
              )?.selectedValues || [];

            if (possibleCorrectResponses?.includes(newSelectedValues[0])) {
              scoreByMethod[requirement.id].score = 100;

              scoreByMethod[requirement.id].scoreRepresentativo =
                100 / quantityOfParentIds;
            }

            scoreByMethod["participacao_do_especialista"].score = 0;
            scoreByMethod[
              "participacao_do_especialista"
            ].scoreRepresentativo = 0;
          }
        }
      } else {
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
      }
    });

    return {
      ...scoreByMethod,
      scoreGeral: Object.values(scoreByMethod).reduce(
        (acc, score) => acc + score.scoreRepresentativo,
        0
      ),
    };
  };

  return (
    <GlobalContext.Provider
      value={{
        handleCheckboxChange,
        getRequirementLength,
        handleRadioChange,
        handleClearRequirement,
        handleCalculateScoreByMethod,
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
