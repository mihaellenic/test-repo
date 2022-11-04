import { extendTheme } from "@mui/joy";

export function useCustomTheme() {
  return extendTheme({
    components: {
      JoyCard: {
        defaultProps: {
          variant: "outlined"
        }
      },
      JoyFormLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            marginBottom: theme.spacing(1),
            fontWeight: theme.fontWeight.xl,
            textTransform: "uppercase",
            fontSize: theme.fontSize.xs
          })
        }
      },
      JoyRadioGroup: {
        styleOverrides: {
          root: ({ theme }) => ({
            gap: theme.spacing(1)
          })
        }
      },
      JoyRadio: {
        defaultProps: {
          overlay: true,
          disableIcon: true
        },
        styleOverrides: {
          root: ({ theme }) => ({
            fontWeight: theme.fontWeight.lg,
            fontSize: theme.fontSize.md,
            color: theme.palette.text.secondary
          })
        }
      }
    }
  });
}