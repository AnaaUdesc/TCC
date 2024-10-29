import { Close, Share } from "@mui/icons-material";
import {
  Box,
  Dialog,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { MethodProps } from "../db/methods";
import { useGlobalContext } from "../GlobalProvider";

// Importando a imagem

interface CardProps extends MethodProps {}

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
}: CardProps) {
  const [open, setOpen] = useState(false);

  const { handleCalculateScoreByMethod, requirements } = useGlobalContext();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleCalculateScoreByMethod(id);
  }, [handleCalculateScoreByMethod, id, requirements]);

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
        <Box>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              0%
            </Typography>
          </Box>
          <Box>
            <Box>User</Box>
            <Box>Objetivos</Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              position: "absolute",
              right: 10,
              top: 10,

              backgroundColor: "#000",
              opacity: 0.65,
              transition: "all 0.2s",

              ":hover": {
                backgroundColor: "#000",
                opacity: 0.8,
              },
            }}
          >
            <Close
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
          <Box
            sx={{
              backgroundImage: `url(${image})`,
              width: "100%",
              minWidth: "100px",
              minHeight: "600px",
              height: "auto",
              borderRadius: 2,
              backgroundPosition: "center", // Para centralizar a imagem
              backgroundSize: "cover", // Para cobrir o Box com a imagem
            }}
          />
          <Box sx={{ padding: 6 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography
                  variant="h4"
                  noWrap
                  fontWeight={600}
                  sx={{ marginBottom: 4 }}
                >
                  {title}
                </Typography>

                <Box sx={{ display: "flex", gap: 1, margin: 1 }}>
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
              <IconButton>
                <Share fontSize="large" style={{ color: "gray", margin: 6 }} />
              </IconButton>
            </Box>
            <Typography sx={{ marginTop: 1, marginBottom: 6 }}>
              {fullDescription}
            </Typography>
            <Typography variant="h6" fontWeight={600} sx={{ marginTop: 2 }}>
              Boas Práticas e Dicas
            </Typography>
            <Box>
              {goodPractices.map((practice, index) => (
                <Typography key={index}>{practice}</Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
