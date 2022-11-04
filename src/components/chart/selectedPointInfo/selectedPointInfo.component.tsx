import { Box, Typography } from "@mui/joy";
import { styles } from "./styles";

interface Props {
  info: string;
}

export function SelectedPointInfoComponent(props: Props) {

  return (
    <Box sx={styles}>
      <Typography>{props.info}</Typography>
    </Box>
  );
}