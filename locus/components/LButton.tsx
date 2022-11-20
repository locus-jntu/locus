import lightTheme from "../styles/theme/lightTheme";
import { Button } from "@mui/material";

interface ButtonProps {
  name: string
  width?: number
  height?: number
}

const LButton = (props: ButtonProps) => (
    <Button
        className="rounded hover:text-white"
        sx={{
        width: props.width ?? 40,
        height: props.height ?? 40,
        boxShadow: "none",
        border: `1px solid ${lightTheme.palette.secondary.main}`,
        color: lightTheme.palette.secondary.main,
        padding: "4px 2px"
        }}
        size="small"
        color="secondary"
        variant="contained"
    >
      {props.name}
    </Button>
);

export default LButton;
