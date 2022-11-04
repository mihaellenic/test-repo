import { radioClasses } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

export const styles: Record<string, SxProps | undefined> = {
  radioSheet: {
    padding: 1
  },
  radio: {
    [`&.${radioClasses.checked}`]: {
      color: "text.primary"
    },
    [`& .${radioClasses.checked}`]: {
      [`& .${radioClasses.action}`]: {
        border: "2px solid",
        borderColor: "primary.500"
      }
    }

  }
};