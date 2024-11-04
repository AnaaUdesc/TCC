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
import { useGlobalContext } from "../GlobalProvider";

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "20px 20px",
    boxShadow: "0px 0px 10px 4px rgba(0,0,0,0.1)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#fff",
  },
}));

export interface RequirementProgressViewProps {
  progress: number;
  title?: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  BorderLinearProgressWidth?: string;
  requirementId: string;
}

export default function RequirementProgressView({
  progress,
  title,
  children,
  icon,
  BorderLinearProgressWidth = "100%",
  requirementId,
}: RequirementProgressViewProps) {
  const { isRequirementSelected } = useGlobalContext();

  return (
    <LightTooltip arrow placement="left" title={children}>
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
            <Badge
              badgeContent={isRequirementSelected(requirementId) ? 1 : 0}
              color="secondary"
              variant="dot"
            >
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
