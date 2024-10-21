import { Box, Collapse, Typography } from "@mui/material";
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
          {icon}
          <Typography>{name}</Typography>
        </Box>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Box>
      <Collapse in={open}>{children}</Collapse>
    </>
  );
}
