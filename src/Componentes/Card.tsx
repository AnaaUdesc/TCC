import {
  AttachMoney,
  CalendarMonth,
  Close,
  Groups,
  Share,
} from "@mui/icons-material";
import { GoGoal } from "react-icons/go";
import {
  Box,
  CircularProgress,
  Dialog,
  Divider,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  Link,
  styled,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { MethodProps, methods } from "../db/methods";
import { useGlobalContext } from "../GlobalProvider";
import MethodDialog from "./MethodDialog";
import { technics } from "../db/tecnicas";

// Importando a imagem

interface CardProps extends MethodProps {
  scoreGeral: number;
}

export default function Card({
  description,
  image,
  title,
  classificationIcons,
  matchTotal,
  attentionPoints,
  fullDescription,
  goodPractices,
  id,
  more,
  exemples,
  relatedMethods,
  scoreGeral,
}: CardProps) {
  const [open, setOpen] = useState(false);
  const [selectedMethodOrTechnique, setSelectedMethodOrTechnique] =
    useState<any>(null);
  const [score, setScore] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const getColorByScore = () => {
    if (scoreGeral >= 75) {
      return "#056700";
    } else if (scoreGeral <= 15) {
      return "#BE0000";
    }
    return "#D3BF28";
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
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

  const getMethodOrTechniqueById = (id: string) => {
    const method = methods.find((method) => method.id === id);
    const technique = technics.find((technique) => technique.id === id);
    return method || technique;
  };

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
            height: 261,
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
          <Box sx={{ padding: 3 }}>
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
                  color: getColorByScore(),
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
          <Box sx={{ paddingX: 3 }}>
            <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
              <Tooltip
                title={"Orçamento Relativo"}
                arrow
                placement="left"
                onClick={() => setOpen(true)}
              >
                <AttachMoney color="secondary" sx={{ cursor: "pointer" }} />
              </Tooltip>
              <BorderLinearProgress
                variant="determinate"
                value={50}
                sx={{ width: 100 }}
              />
              {/* <Typography sx={{ fontStyle: "italic", color: "#bbbbbb" }}>
                50%
              </Typography> */}
            </Box>
            <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
              <Tooltip
                title={"Tempo"}
                arrow
                placement="left"
                onClick={() => setOpen(true)}
              >
                <CalendarMonth color="secondary" sx={{ cursor: "pointer" }} />
              </Tooltip>
              <BorderLinearProgress
                variant="determinate"
                value={50}
                sx={{ width: 100 }}
              />
              {/* <Typography sx={{ fontStyle: "italic", color: "#bbbbbb" }}>
                50%
              </Typography> */}
            </Box>{" "}
            <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
              <Tooltip
                title={"Participação de Usuário"}
                arrow
                placement="left"
                onClick={() => setOpen(true)}
              >
                <Groups color="secondary" sx={{ cursor: "pointer" }} />
              </Tooltip>
              <BorderLinearProgress
                variant="determinate"
                value={50}
                sx={{ width: 100 }}
              />
              {/* <Typography sx={{ fontStyle: "italic", color: "#bbbbbb" }}>
                50%
              </Typography> */}
            </Box>{" "}
            <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
              <Tooltip
                title={"Objetivo da avaliação"}
                arrow
                placement="left"
                onClick={() => setOpen(true)}
              >
                <SvgIcon
                  color="secondary"
                  component={GoGoal}
                  sx={{ cursor: "pointer" }}
                />
              </Tooltip>
              <BorderLinearProgress
                variant="determinate"
                value={50}
                sx={{ width: 100 }}
              />
              {/* <Typography sx={{ fontStyle: "italic", color: "#bbbbbb" }}>
                50%
              </Typography> */}
            </Box>
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
