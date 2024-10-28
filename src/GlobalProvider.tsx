import React, { createContext, useContext, useState, ReactNode } from "react";

// Interface para o valor do contexto

// Tipagem para as props do provider
interface GlobalProviderProps {
  children: ReactNode;
}

// Cria o contexto com a interface tipada
const GlobalContext = createContext<GlobalContextData | undefined>(undefined);

interface RequirementProps {
  id: string;
  selectedValues: string[];
}

interface GlobalContextData {
  requirements: RequirementProps[] | null;
  setRequirements: React.Dispatch<
    React.SetStateAction<RequirementProps[] | null>
  >;
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
}

// Provedor do contexto que engloba os componentes filhos
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [requirements, setRequirements] = useState<RequirementProps[] | null>(
    null
  );

  console.log("requirements", requirements);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    requirementId: string,
    newValue: string
  ) => {
    const isChecked = e.target.checked;

    setRequirements((prevRequirements) => {
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

    setRequirements((prevRequirements) => {
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
    const foundRequirement = requirements?.find(
      (req) => req.id === requirementId
    );

    return foundRequirement?.selectedValues.length ?? 0;
  };

  return (
    <GlobalContext.Provider
      value={{
        requirements,
        setRequirements,
        handleCheckboxChange,
        getRequirementLength,
        handleRadioChange,
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
