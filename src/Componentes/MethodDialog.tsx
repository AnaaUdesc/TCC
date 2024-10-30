import { Close, Share } from "@mui/icons-material";
import { Dialog, Box, IconButton, Typography, Link } from "@mui/material";
import { methods } from "../db/methods";
import { technics } from "../db/tecnicas";

interface MethodDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  classificationIcons?: React.ReactNode[];
  fullDescription: React.ReactNode;
  goodPractices?: string[];
  attentionPoints?: string[];
  more?: string[];
  exemples?: string[];
  image: string;
  relatedMethods?: string[];
  onMethodClick?: (id: string) => void;
}

export default function MethodDialog({
  open,
  handleClose,
  title,
  classificationIcons,
  fullDescription,
  goodPractices,
  attentionPoints,
  more,
  exemples,
  image,
  relatedMethods,
  onMethodClick,
}: MethodDialogProps) {
  const getMethodOrTechniqueById = (id: string) => {
    const method = methods.find((method) => method.id === id);
    const technique = technics.find((technique) => technique.id === id);
    return method || technique;
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xl"
      PaperProps={{
        sx: {
          borderRadius: 2,
          paddingBottom: 20,
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
                {classificationIcons?.map((icon, index) => (
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
              <Share fontSize="large" style={{ color: "gray" }} />
            </IconButton>
          </Box>
          <Typography
            sx={{
              marginTop: 1,
              marginBottom: 7,
            }}
          >
            {fullDescription}
          </Typography>

          {exemples && exemples.length > 0 && (
            <>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ marginTop: 2, marginBottom: 2 }}
              >
                Exemplo de Utilização
              </Typography>
              <Box sx={{ marginBottom: 7 }}>
                {exemples?.map((exemple, index) => (
                  <Typography sx={{ marginBottom: 1 }} key={index}>
                    {exemple}
                  </Typography>
                ))}
              </Box>
            </>
          )}
          {goodPractices && goodPractices.length > 0 && (
            <>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ marginTop: 2, marginBottom: 2 }}
              >
                Boas Práticas e Dicas
              </Typography>
              <Box sx={{ marginBottom: 7 }}>
                {goodPractices?.map((practice, index) => (
                  <Typography sx={{ marginBottom: 1 }} key={index}>
                    {practice}
                  </Typography>
                ))}
              </Box>
            </>
          )}
          {attentionPoints && attentionPoints.length > 0 && (
            <>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ marginTop: 2, marginBottom: 2 }}
              >
                Pontos de Atenção ou Desvantagens
              </Typography>
              <Box sx={{ marginBottom: 7 }}>
                {attentionPoints?.map((point, index) => (
                  <Typography key={index} sx={{ marginBottom: 2 }}>
                    {point}
                  </Typography>
                ))}
              </Box>
            </>
          )}
          {more && more.length > 0 && (
            <>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ marginTop: 2, marginBottom: 2 }}
              >
                Leia Mais
              </Typography>
              <Box sx={{ marginBottom: 7 }}>
                {more?.map((link, index) => (
                  <Typography key={index} sx={{ marginBottom: 2 }}>
                    <Link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                    >
                      {link.length > 60 ? `${link.slice(0, 60)}...` : link}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </>
          )}
          {relatedMethods && relatedMethods.length > 0 && (
            <>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ marginTop: 2, marginBottom: 2 }}
              >
                Métodos e Técnicas Para Uso Combinado
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  flexWrap: "wrap",
                }}
              >
                {relatedMethods?.map((relatedMethodOrTechnic) => {
                  const related = getMethodOrTechniqueById(
                    relatedMethodOrTechnic
                  );

                  return (
                    <Box
                      key={related?.id}
                      sx={{
                        backgroundColor: "#E7EFF0",
                        width: 350,
                        height: 450,
                        borderRadius: 2,
                        paddingTop: 0,
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      onClick={() => onMethodClick?.(related?.id || "")}
                    >
                      <Box
                        sx={{
                          backgroundImage: `url(${related?.image})`,
                          width: "100%",
                          minWidth: "100px",
                          minHeight: "200px",
                          height: "auto",
                          borderRadius: 2,
                          backgroundPosition: "center", // Para centralizar a imagem
                          backgroundSize: "cover", // Para cobrir o Box com a imagem
                        }}
                      />
                      <Box
                        sx={{
                          padding: 2,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "100%",
                          flex: 1,
                        }}
                      >
                        <Box>
                          <Typography variant="h6" fontWeight={600}>
                            {related?.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#3E3E3E",
                              fontStyle: "italic",
                              marginTop: 3,
                            }}
                          >
                            {related?.description}
                          </Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: 1 }}>
                          {related?.classificationIcons.map((icon, index) => (
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
                    </Box>
                  );
                })}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
