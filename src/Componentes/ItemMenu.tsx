import {
  Badge,
  Box,
  Collapse,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import HelpIcon from "@mui/icons-material/Help";

interface ItemMenuProps {
  name: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  tooltipTile?: React.ReactNode;
  requirementsLength?: number;
}

export default function ItemMenu({
  name,
  icon,
  children,
  tooltipTile,
  requirementsLength,
}: ItemMenuProps) {
  const [open, setOpen] = useState(false);

  function setCollapse() {
    setOpen(!open);
  }

  const hasRequirements =
    (requirementsLength && requirementsLength > 0) || false;

  return (
    <>
      <Box
        onClick={setCollapse}
        sx={{
          ":hover": {
            backgroundColor: "#E7EFF0",
          },
          cursor: "pointer",
          display: "flex",
          borderRadius: 2,
          alignItems: "center",
          justifyContent: "space-between",
          padding: 1,
          margin: 1,
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <SvgIcon color="secondary">{icon}</SvgIcon>

          <Typography>
            {name}
            {hasRequirements && (
              <Badge
                sx={{
                  ml: 1,
                  mb: 2,
                }}
                color="secondary"
                variant="dot"
                badgeContent={1}
              />
            )}
          </Typography>
        </Box>
        {open ? (
          <SvgIcon color="secondary" fontSize="small">
            <IoIosArrowUp />
          </SvgIcon>
        ) : (
          <SvgIcon color="secondary" fontSize="small">
            <IoIosArrowDown />
          </SvgIcon>
        )}
      </Box>

      <Collapse sx={{ paddingX: 4 }} in={open}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {tooltipTile && (
            <Tooltip title={tooltipTile} arrow placement="left">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "#cfcfcf",
                }}
              >
                <HelpIcon sx={{ margin: 1, marginBottom: 1 }} />
                <Typography>Saiba mais</Typography>
              </Box>
            </Tooltip>
          )}
          <Box>{children}</Box>
        </Box>
      </Collapse>
    </>
  );
}
