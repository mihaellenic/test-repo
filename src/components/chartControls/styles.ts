import { radioClasses } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

export const styles: Record<string, SxProps | undefined> = {
  label: {
    mb: 1,
    fontWeight: "xl",
    textTransform: "uppercase",
    fontSize: "xs"
  },
  radioGroup: {
    gap: 0.5
  },
  radioSheet: {
    padding: 1
  },
  radio: {
    fontWeight: "lg",
    fontSize: "md",
    color: "text.secondary",
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