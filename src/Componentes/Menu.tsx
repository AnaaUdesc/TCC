import { Box, SvgIcon, Checkbox } from "@mui/material";
import ItemMenu from "./ItemMenu";

import { GoGoal } from "react-icons/go";

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
      <ItemMenu
        icon={
          <SvgIcon>
            <GoGoal />
          </SvgIcon>
        }
        name="Objetivo da avaliação"
      >
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <ItemMenu
        icon={
          <SvgIcon>
            <GoGoal />
          </SvgIcon>
        }
        name="Objetivo da avaliação"
      >
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <ItemMenu
        icon={
          <SvgIcon>
            <GoGoal />
          </SvgIcon>
        }
        name="Objetivo da avaliação"
      >
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <ItemMenu
        icon={
          <SvgIcon>
            <GoGoal />
          </SvgIcon>
        }
        name="Objetivo da avaliação"
      >
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <ItemMenu
        icon={
          <SvgIcon>
            <GoGoal />
          </SvgIcon>
        }
        name="Objetivo da avaliação"
      >
        <Checkbox />
        <Checkbox />
      </ItemMenu>
      <ItemMenu
        icon={
          <SvgIcon>
            <GoGoal />
          </SvgIcon>
        }
        name="Objetivo da avaliação"
      >
        <Checkbox />
        <Checkbox />
      </ItemMenu>
    </Box>
  );
}
