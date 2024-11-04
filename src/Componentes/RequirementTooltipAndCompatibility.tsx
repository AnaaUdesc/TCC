import { Box, Divider, Typography } from "@mui/material";
import { requirements } from "../db/requirements";
import { useGlobalContext } from "../GlobalProvider";
import { getReferenceValueByRequirementId } from "../utils";
import { Check } from "@mui/icons-material";

interface RequirementTooltipAndCompatibilityProps {
  requirementId: string;
  methodId: string;
  compatibility: number;
}

export default function RequirementTooltipAndCompatibility({
  requirementId,
  methodId,
  compatibility,
}: RequirementTooltipAndCompatibilityProps) {
  const { getSelectedValuesByRequirementId } = useGlobalContext();

  const referenceValues = getReferenceValueByRequirementId(
    requirementId,
    methodId
  );

  const requirementValues = requirements.find(
    (requirement) => requirement.id === requirementId
  )?.values;

  const selectedValues = getSelectedValuesByRequirementId(requirementId);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "540px",
          }}
        />

        <Typography
          sx={{
            width: "440px",
            textAlign: "center",
            mr: 2,
          }}
        >
          Objetivos do método
        </Typography>

        <Typography
          sx={{
            width: "440px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Objetivos selecionados por você
        </Typography>
      </Box>
      <Divider
        sx={{
          my: 1,
          mb: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {requirementValues?.map((requirementValue, index) => {
          const isSelected = selectedValues.includes(requirementValue.value);
          const isReference = referenceValues.includes(requirementValue.value);

          return (
            <>
              <Box
                key={requirementValue.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    width: "540px",
                    textAlign: "center",
                  }}
                >
                  {requirementValue.value}
                </Typography>

                <Box
                  sx={{
                    width: "440px",
                    textAlign: "center",
                    mr: 2,
                  }}
                >
                  {isReference && <Check color="success" />}
                </Box>
                <Box
                  sx={{
                    width: "440px",
                    textAlign: "center",
                  }}
                >
                  {isSelected && <Check color="success" />}
                </Box>
              </Box>
              {index === requirementValues.length - 1 ? (
                <Divider
                  sx={{
                    height: 1,
                    mt: 1,
                    bgcolor: "gray",
                  }}
                />
              ) : (
                <Divider />
              )}
            </>
          );
        })}
        <Typography
          sx={{
            textAlign: "center",
            color: "gray",
          }}
        >
          {Math.round(Number(compatibility))}% de compatibilidade
        </Typography>
      </Box>
    </Box>
  );
}
