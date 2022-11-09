import { FormLabel, Grid, Radio, RadioGroup, Sheet } from "@mui/joy";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { setCountriesFilter, setDataType } from "../../store/chartControls/chartControls.slice";
import { CountriesFilter, DataType } from "../../store/chartControls/types";

export function ChartControlsComponent() {

  const countriesFilter = useSelector((state: AppState) => state.chartControls.countriesFilter);
  const dataType = useSelector((state: AppState) => state.chartControls.dataType);
  const dispatch = useDispatch();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid>
        <FormLabel>
          Countries
        </FormLabel>
        <RadioGroup
          value={countriesFilter}
          onChange={(event) => {
            const newCountriesFilter = event.target.value as CountriesFilter;
            dispatch(setCountriesFilter(newCountriesFilter));
          }}
        >
          {Object.values(CountriesFilter).map((value) => (
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
          Data
        </FormLabel>
        <RadioGroup
          value={dataType}
          onChange={(event) => {
            const newDataType = event.target.value as DataType;
            dispatch(setDataType(newDataType));
          }}
        >
          {Object.values(DataType).map((value) => (
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