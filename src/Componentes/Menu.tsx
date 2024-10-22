import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  SvgIcon,
  Typography,
} from "@mui/material";
import ItemMenu from "./ItemMenu";
import { CgRead } from "react-icons/cg";
import { SlMustache } from "react-icons/sl";
import { GoGoal } from "react-icons/go";
import {
  AttachMoney,
  CalendarMonth,
  Groups,
  MenuBook,
  PanToolAlt,
  PersonalVideo,
  VideoChat,
} from "@mui/icons-material";

export default function Menu() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 2,
        flexGrow: 1,
        width: 320,
        padding: 1,
      }}
    >
      <ItemMenu icon={<GoGoal />} name="Objetivo da avaliação">
        <FormGroup sx={{ marginBottom: 4 }}>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                color="secondary"
                sx={{ color: "secondary.main" }}
              />
            }
            label={
              <Typography sx={{ fontWeight: 300 }}>Usabilidade</Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                color="secondary"
                sx={{ color: "secondary.main" }}
              />
            }
            label={
              <Typography sx={{ fontWeight: 300 }}>Acessibilidade</Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                color="secondary"
                sx={{ color: "secondary.main" }}
              />
            }
            label={<Typography sx={{ fontWeight: 300 }}>Ergonomia</Typography>}
          />
        </FormGroup>
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<AttachMoney />} name="Custo Relativo">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<CalendarMonth />} name="Tempo">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<PanToolAlt />} name="Quanto vs Quali">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<CgRead />} name="Disponibilidade de especialista">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<PersonalVideo />} name="Nível de Fidelidade do Sistema">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<Groups />} name="Participação do Usuário">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<VideoChat />} name="Modalidade">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <Divider sx={{ borderColor: "#E3E3E3", marginX: 2 }} />
      <ItemMenu icon={<MenuBook />} name="Materiais de Apoio">
        <Checkbox />
        <Checkbox />
      </ItemMenu>
    </Box>
  );
}
