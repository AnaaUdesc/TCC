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

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#86ADB5",
    color: "rgba(0, 0, 0, 0.87)",
    // boxShadow: theme.shadows[1],
    // fontSize: 11,
  },
}));

interface RequirementProgressViewProps {
  progress: number;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export default function RequirementProgressView({
  progress,
  title,
  children,
  icon,
}: RequirementProgressViewProps) {
  return (
    <LightTooltip arrow placement="left" title={<Box>{children}</Box>}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          width: "100%",
        }}
      >
        <SvgIcon color="secondary">{icon}</SvgIcon>

        <Box
          sx={{
            width: "100%",
          }}
        >
          <Badge badgeContent={progress} color="secondary" variant="dot">
            <Typography variant="body2" mb={0.5}>
              {title}
            </Typography>
          </Badge>
          <BorderLinearProgress
            variant="determinate"
            value={progress}
            sx={{ width: "100%", height: 7 }}
          />
        </Box>
      </Box>
    </LightTooltip>
  );
}
