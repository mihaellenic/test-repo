import { FormLabel, Grid, Radio, RadioGroup, Sheet } from "@mui/joy";
import { styles } from "./styles";

export function ChartControlsComponent() {

  return (
    <Grid container direction="column" spacing={3}>
      <Grid>
        <FormLabel
          id="country-filter"
          className="label"
          sx={styles.label}
        >
          Countries:
        </FormLabel>
        <RadioGroup
          aria-labelledby="countries-filter-label"
          defaultValue="All"
          sx={styles.radioGroup}
        >
          {["All", "A-F", "G-L", "M-P", "Q-Z"].map((value) => (
            <Sheet key={value} sx={styles.radioSheet}>
              <Radio
                label={value}
                overlay
                disableIcon
                value={value}
                sx={styles.radio}
              />
            </Sheet>
          ))}
        </RadioGroup>
      </Grid>
      <Grid>
        <FormLabel
          id="data-type-select"
          sx={styles.label}>
          Data:
        </FormLabel>
        <RadioGroup
          aria-labelledby="data-type-select"
          defaultValue="Annual salary"
          size="lg"
          sx={styles.radioGroup}
        >
          {["Annual salary", "Credit card debt"].map((value) => (
            <Sheet key={value} sx={styles.radioSheet}>
              <Radio
                label={value}
                overlay
                disableIcon
                value={value}
                sx={styles.radio}
              />
            </Sheet>
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  );

}