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
import {
  getScoreByKey,
  getMethodOrTechniqueById,
  getColorByScore,
} from "../utils";
import RequirementProgressView, {
  RequirementProgressViewProps,
} from "./RequirementProgressView";
import RequirementTooltipOrCompatibility from "./RequirementTooltipOrCompatibility";
import RequirementTooltipAndCompatibility from "./RequirementTooltipAndCompatibility";

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

  const requirementsProps: RequirementProgressViewProps[] = [
    {
      children: (
        <RequirementTooltipOrCompatibility
          requirementId="orcamento_relativo"
          methodId={id}
        />
      ),
      icon: <AttachMoney />,
      progress: getScoreByKey(scoresRepresentativos, "orcamento_relativo"),
      requirementId: "orcamento_relativo",
    },
    {
      children: (
        <RequirementTooltipOrCompatibility
          requirementId="tempo"
          methodId={id}
        />
      ),
      icon: <CalendarMonth />,
      progress: getScoreByKey(scoresRepresentativos, "tempo"),
      requirementId: "tempo",
    },
    {
      children: (
        <RequirementTooltipOrCompatibility
          requirementId="quantidade_de_usuarios"
          methodId={id}
        />
      ),
      icon: <Group />,
      progress: getScoreByKey(scoresRepresentativos, "quantidade_de_usuarios"),
      requirementId: "quantidade_de_usuarios",
    },
    {
      children: (
        <RequirementTooltipAndCompatibility
          requirementId="objetivos_da_avaliacao"
          methodId={id}
          compatibility={getScoreByKey(
            scoresRepresentativos,
            "objetivos_da_avaliacao"
          )}
        />
      ),
      icon: <GoGoal />,
      progress: getScoreByKey(scoresRepresentativos, "objetivos_da_avaliacao"),
      requirementId: "objetivos_da_avaliacao",
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
            </Box>
          </Tooltip>
          <Box sx={{ paddingX: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                minWidth: 150,
              }}
            >
              {requirementsProps.map((requirement) => (
                <RequirementProgressView
                  key={requirement.title}
                  progress={requirement.progress ?? 0}
                  title={requirement.title}
                  icon={requirement.icon}
                  requirementId={requirement.requirementId}
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
