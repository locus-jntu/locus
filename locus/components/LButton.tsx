import lightTheme from "../styles/theme/lightTheme";
import { Button } from "@mui/material";

interface ButtonProps {
  name: string
  width?: number | string
  onClick?: any
  height?: number | string
  style?: any
  color?: "inherit" | "secondary" | "primary" | "success" | "error" | "info" | "warning"
  disabled?: boolean
}

const LButton = (props: ButtonProps) => (
    <Button
        className="rounded bg-secondary text-white"
        sx={{
        width: props.width ?? 40,
        height: props.height ?? 40,
        boxShadow: "none",
        border: `1px solid ${lightTheme.palette.secondary.main}`,
        color: lightTheme.palette.secondary.main,
        padding: "4px 2px"
        }}
        style={props.style}
        size="small"
        color={props.color ?? "secondary" } 
        variant="contained"
        onClick={props.onClick}
        disabled={props.disabled}
    >
      {props.name}
    </Button>
);

export default LButton;
