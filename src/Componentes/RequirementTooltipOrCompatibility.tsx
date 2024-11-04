import { Box, Typography } from "@mui/material";
import { methods } from "../db/methods";
import { requirements } from "../db/requirements";
import { useGlobalContext } from "../GlobalProvider";
import { getReferenceValueByRequirementId } from "../utils";
import { Circle, RadioButtonUnchecked } from "@mui/icons-material";

interface RequirementTooltipOrCompatibilityProps {
  requirementId: string;
  methodId: string;
}

export default function RequirementTooltipOrCompatibility({
  requirementId,
  methodId,
}: RequirementTooltipOrCompatibilityProps) {
  const { getSelectedValuesByRequirementId } = useGlobalContext();

  const referenceValues = getReferenceValueByRequirementId(
    requirementId,
    methodId
  );

  const requirementValues = requirements.find(
    (requirement) => requirement.id === requirementId
  )?.values;

  const methodUnNeedORReference = methods.find(
    (method) => method.id === methodId
  )?.unNeedORReference;

  const unNeedValues = methodUnNeedORReference?.find(
    (value) => value.requirement === requirementId
  )?.values;

  const possibleValues = referenceValues.concat(unNeedValues || []);
  const selectedValues = getSelectedValuesByRequirementId(requirementId);
  const selectedValue = selectedValues[0];

  const requirement = requirements.find(
    (requirement) => requirement.id === requirementId
  );

  const getColor = (value: string) => {
    if (referenceValues?.includes(value)) {
      return { bg: "secondary.main", title: "#fff" };
    }

    return {
      bg: "#fff",
      title: "#000",
    };
  };

  const getBorder = (value: string) => {
    if (value === selectedValue) {
      if (possibleValues?.includes(selectedValue)) return "6px solid #a3e635";
      return "6px solid #ff0000";
    }

    return "none";
  };

  const getPercentage = (value: string) => {
    if (value === selectedValue) {
      if (possibleValues?.includes(selectedValue))
        return {
          value: "100%",
          color: "#a3e635",
        };
      return {
        value: "0%",
        color: "#ff0000",
      };
    }

    return {
      value: "",
      color: "#000",
    };
  };

  const getFormattedText = (text: string) => {
    let formattedText = text;
    if (text === "medio") {
      formattedText = "médio";
    }

    return formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
  };

  return (
    <Box
      sx={{
        pb: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mb: 2,
        }}
      >
        {requirement?.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          ...(!selectedValue && {
            mb: 4,
          }),
        }}
      >
        <Circle color="secondary" />
        <Typography>Valor esperado</Typography>
      </Box>
      {selectedValue && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 4,
          }}
        >
          <RadioButtonUnchecked
            sx={{ color: getPercentage(selectedValue).color }}
          />
          <Typography>Valor selecionado por você</Typography>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "400px",
          height: "300px",
        }}
      >
        {requirementValues?.map((requirementValue, index) => {
          const size = requirementValues.length * 65 - index * 60; // Valores menores para limitar o tamanho

          return (
            <Box
              key={requirementValue.id}
              sx={{
                mr: 6,
                width: size,
                height: size,
                borderRadius: "50%",
                backgroundColor: getColor(requirementValue.value)?.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                boxShadow: "0px 0px 10px 4px rgba(0, 0, 0, 0.1)",
                border: getBorder(requirementValue.value),
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  ...(index !== requirementValues.length - 1 && {
                    top: 6,
                  }),

                  textAlign: "center",
                  color: getColor(requirementValue.value)?.title,
                }}
              >
                {getFormattedText(requirementValue.value)}
              </Typography>
              <Typography
                sx={{
                  color: getPercentage(requirementValue.value).color,
                  position: "absolute",
                  bottom: -30,
                  zIndex: 999,
                }}
              >
                {getPercentage(requirementValue.value).value}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
