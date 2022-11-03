import { Typography } from "@mui/joy";
import "./styles.css";

interface Props {
  info: string;
}

export function SelectedPointInfoComponent(props: Props) {

    return <div className="selected-point">
        <Typography>{props.info}</Typography>
    </div>;

}