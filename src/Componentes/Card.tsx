import {
  AttachMoney,
  CalendarMonth,
  Group,
  MoreHoriz,
} from "@mui/icons-material";
import { GoGoal } from "react-icons/go";
import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  Link,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MethodProps } from "../db/methods";
import MethodDialog from "./MethodDialog";
import { useGlobalContext } from "../GlobalProvider";
import {
  getReferenceValueByRequirementId,
  getScoreByKey,
  getMethodOrTechniqueById,
} from "../utils";
import RequirementProgressView, {
  RequirementProgressViewProps,
} from "./RequirementProgressView";

// Importando a imagem

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#0D6070",
    ...theme.applyStyles("dark", {
      backgroundColor: "#0D6070",
    }),
  },
}));

// eslint-disable-next-line react-refresh/only-export-components
export const getColorByScore = (scoreGeral: number) => {
  if (scoreGeral >= 75) {
    return "#056700";
  } else if (scoreGeral <= 15) {
    return "#BE0000";
  }
  return "#D3BF28";
};

export interface ScoresRepresentativos {
  [key: string]: {
    score: number;
    scoreRepresentativo: number;
  };
}

interface CardProps extends MethodProps {
  scoreGeral: number;
  scoresRepresentativos: ScoresRepresentativos;
}

export default function Card({
  description,
  image,
  title,
  classificationIcons,
  attentionPoints,
  fullDescription,
  goodPractices,
  more,
  exemples,
  relatedMethods,
  scoreGeral,
  scoresRepresentativos,
  id,
}: CardProps) {
  const [open, setOpen] = useState(false);
  const [selectedMethodOrTechnique, setSelectedMethodOrTechnique] =
    useState<MethodProps | null>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const { getSelectedValuesByRequirementId } = useGlobalContext();

  const requirementsProps: RequirementProgressViewProps[] = [
    {
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId("orcamento_relativo", id)?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("orcamento_relativo")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <AttachMoney />,
      progress: getScoreByKey(scoresRepresentativos, "orcamento_relativo"),
    },
    {
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId("tempo", id)?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("tempo")?.map((ref) => (
            <Typography key={ref}>{ref}</Typography>
          ))}
        </Box>
      ),
      icon: <CalendarMonth />,
      progress: getScoreByKey(scoresRepresentativos, "tempo"),
    },
    {
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId("quantidade_de_usuarios", id)?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("quantidade_de_usuarios")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <Group />,
      progress: getScoreByKey(scoresRepresentativos, "quantidade_de_usuarios"),
    },
    {
      children: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography>Valor de referência do método:</Typography>
          {getReferenceValueByRequirementId("objetivos_da_avaliacao", id)?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
          <Typography>
            <br />
            Valor de input:
          </Typography>
          {getSelectedValuesByRequirementId("objetivos_da_avaliacao")?.map(
            (ref) => (
              <Typography key={ref}>{ref}</Typography>
            )
          )}
        </Box>
      ),
      icon: <GoGoal />,
      progress: getScoreByKey(scoresRepresentativos, "objetivos_da_avaliacao"),
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffff",
          borderRadius: 2,
          display: "flex",
          padding: 2,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            width: 161,
            height: 275,
            minWidth: 161,
            minHeight: 261,
            borderRadius: 2,
            backgroundSize: "cover", // Para cobrir o Box com a imagem
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            paddingX: 2,
            paddingRight: 5,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, marginBottom: -3 }}>
            <Typography variant="h5" noWrap fontWeight={600}>
              {title}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {classificationIcons.map((icon, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 50,
                    backgroundColor: "#86ADB5",
                    width: 24,
                    height: 24,
                    p: 2,
                  }}
                  key={index}
                >
                  {icon}
                </Box>
              ))}
            </Box>
          </Box>
          <Typography
            sx={{ color: "#7A7A7A", fontStyle: "italic", fontWeight: 300 }}
          >
            {description}
          </Typography>
          <Link
            onClick={() => setOpen(true)}
            color="secondary"
            sx={{ cursor: "pointer" }}
          >
            Ver detalhes
          </Link>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Tooltip
            title="Compatibilidade geral do método"
            arrow
            placement="left"
          >
            <Box sx={{ padding: 3, paddingBottom: 1 }}>
              <Box
                sx={{
                  position: "relative",
                  display: "inline-flex",
                }}
              >
                <CircularProgress
                  variant="determinate"
                  sx={{
                    color: "#d9d9d9",
                  }}
                  size={100}
                  thickness={5}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  sx={{
                    color: getColorByScore(scoreGeral),
                    position: "absolute",
                    left: 0,
                  }}
                  size={100}
                  thickness={5}
                  value={scoreGeral}
                />

                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 600 }}
                  >
                    {scoreGeral}%
                  </Typography>
                </Box>
              </Box>

              {/* <Typography variant="h6" fontWeight={600}>
              {Math.round(Number(result.scoreGeral))}%
            </Typography> */}
            </Box>
          </Tooltip>
          <Box sx={{ paddingX: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // gap: 2,
                // mt: 1,
                minWidth: 150,
              }}
            >
              {requirementsProps.map((requirement) => (
                <RequirementProgressView
                  key={requirement.title}
                  progress={requirement.progress ?? 0}
                  title={requirement.title}
                  icon={requirement.icon}
                  BorderLinearProgressWidth="110px"
                >
                  {requirement.children}
                </RequirementProgressView>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 0,
              ml: 2,
            }}
          >
            <Tooltip title="Ver mais requisitos" placement="bottom" arrow>
              <IconButton onClick={() => setOpen(true)} color="secondary">
                <MoreHoriz />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <MethodDialog
        open={open}
        handleClose={handleClose}
        title={title}
        image={image}
        classificationIcons={classificationIcons}
        fullDescription={fullDescription}
        goodPractices={goodPractices}
        attentionPoints={attentionPoints}
        more={more}
        exemples={exemples}
        relatedMethods={relatedMethods}
        onMethodClick={(id) => {
          setSelectedMethodOrTechnique(getMethodOrTechniqueById(id));
        }}
        scoreGeral={scoreGeral}
        id={id}
        scoresRepresentativos={scoresRepresentativos}
      />
      {selectedMethodOrTechnique !== null && (
        <MethodDialog
          open={selectedMethodOrTechnique !== null}
          handleClose={() => setSelectedMethodOrTechnique(null)}
          {...selectedMethodOrTechnique}
        />
      )}
    </>
  );
}
