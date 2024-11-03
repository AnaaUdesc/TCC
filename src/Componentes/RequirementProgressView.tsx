import {
  Badge,
  Box,
  styled,
  SvgIcon,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import { BorderLinearProgress } from "./Card";

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(134, 173, 181, 0.90)",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "20px 20px",
    // boxShadow: theme.shadows[1],
    // fontSize: 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgba(134, 173, 181, 0.90)", // Define a cor da seta aqui
  },
}));

export interface RequirementProgressViewProps {
  progress: number;
  title?: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  BorderLinearProgressWidth?: string;
}

export default function RequirementProgressView({
  progress,
  title,
  children,
  icon,
  BorderLinearProgressWidth = "100%",
}: RequirementProgressViewProps) {
  return (
    <LightTooltip arrow placement="left" title={<Box>{children}</Box>}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          // width: "100%",
        }}
      >
        <SvgIcon color="secondary" sx={{ fontSize: 25 }}>
          {icon}
        </SvgIcon>

        <Box
          sx={{
            width: "100%",
          }}
        >
          {title && (
            <Badge badgeContent={progress} color="secondary" variant="dot">
              <Typography variant="body2" mb={0.5}>
                {title}
              </Typography>
            </Badge>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              marginTop: -0.5,
              width: "100%",
            }}
          >
            <BorderLinearProgress
              variant="determinate"
              value={progress}
              sx={{ width: BorderLinearProgressWidth, height: 7, flexGrow: 1 }}
            />
            <Typography
              variant="caption"
              sx={{ fontStyle: "italic", color: "#a0a0a0", minWidth: "28px" }}
            >
              {progress}%
            </Typography>
          </Box>
        </Box>
      </Box>
    </LightTooltip>
  );
}
