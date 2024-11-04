import { ScoresRepresentativos } from "./Componentes/Card";
import { MethodProps, methods } from "./db/methods";
import { requirements } from "./db/requirements";
import { technics } from "./db/tecnicas";

export const getReferenceValueByRequirementId = (
  requirementId: string,
  methodId: string
) => {
  const method = getMethodOrTechniqueById(methodId);
  const requirement = requirements.find((req) => req.id === requirementId);

  if (!method || !requirement) {
    return [];
  }

  if (requirement.type === "AND") {
    return (
      method.needANDReference?.find((ref) => ref.requirement === requirementId)
        ?.values || []
    );
  } else {
    return (
      method.needORReference?.find((ref) => ref.requirement === requirementId)
        ?.values || []
    );
  }
};

export const getMethodOrTechniqueById = (id: string): MethodProps => {
  const method = methods.find((method) => method.id === id);
  const technique = technics.find((technique) => technique.id === id);
  return (method || technique) as MethodProps;
};

export const getScoreByKey = (
  scoresRepresentativos: ScoresRepresentativos,
  key: string
) => {
  return scoresRepresentativos[key]?.score ?? 0;
};

export const getColorByScore = (scoreGeral: number) => {
  if (scoreGeral >= 75) {
    return "#056700";
  } else if (scoreGeral <= 15) {
    return "#BE0000";
  }
  return "#D3BF28";
};
