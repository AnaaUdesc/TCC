import styled from "@emotion/styled";
import { TooltipProps, Tooltip, tooltipClasses } from "@mui/material";

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "20px 20px",
    boxShadow: "0px 0px 10px 4px rgba(0,0,0,0.1)",
    width: "400px",
    minWidth: "400px",
    maxWidth: "400px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#fff",
  },
}));
