import { FormLabel, Grid, Radio, RadioGroup, Sheet } from "@mui/joy";
import { styles } from "./styles";

export function ChartControlsComponent() {

  return (
    <Grid container direction="column" spacing={3}>
      <Grid>
        <FormLabel>
          Countries:
        </FormLabel>
        <RadioGroup
          aria-labelledby="countries-filter-label"
          defaultValue="All"
        >
          {["All", "A-F", "G-L", "M-P", "Q-Z"].map((value) => (
            <Sheet key={value} sx={styles.radioSheet}>
              <Radio
                label={value}
                value={value}
                sx={styles.radio}
              />
            </Sheet>
          ))}
        </RadioGroup>
      </Grid>
      <Grid>
        <FormLabel>
          Data:
        </FormLabel>
        <RadioGroup
          aria-labelledby="data-type-select"
          defaultValue="Annual salary"
        >
          {["Annual salary", "Credit card debt"].map((value) => (
            <Sheet key={value} sx={styles.radioSheet}>
              <Radio
                label={value}
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