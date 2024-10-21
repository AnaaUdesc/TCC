import { Box, Collapse, SvgIcon, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface ItemMenuProps {
  name: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function ItemMenu({ name, icon, children }: ItemMenuProps) {
  const [open, setOpen] = useState(false);

  function setCollapse() {
    setOpen(!open);
  }

  return (
    <>
      <Box
        onClick={setCollapse}
        sx={{
          ":hover": {
            backgroundColor: "background.default",
          },
          cursor: "pointer",
          display: "flex",
          borderRadius: 2,
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <SvgIcon color="secondary">{icon}</SvgIcon>
          <Typography>{name}</Typography>
        </Box>
        {open ? (
          <SvgIcon color="secondary" fontSize="small">
            <IoIosArrowUp />{" "}
          </SvgIcon>
        ) : (
          <SvgIcon color="secondary" fontSize="small">
            <IoIosArrowDown />{" "}
          </SvgIcon>
        )}
      </Box>
      <Collapse in={open}>{children}</Collapse>
    </>
  );
}
