import { Card, CssVarsProvider, extendTheme, Grid } from "@mui/joy";
import { ChartComponent } from "./components/chart/chart.component";
import { ChartControlsComponent } from "./components/chartControls/chartControls.component";
import { useFetch } from "./hooks/useFetch.hook";
import { useCustomTheme } from "./hooks/useCustomTheme.hook";
import { Provider, useSelector } from "react-redux";
import { AppState, store } from "./store/store";
import { useProcessDataHook } from "./hooks/useProcessData.hook";

function App() {

  console.log("App render");

  const { data, error } = useFetch("/Modelon_SkillTest_DataVisualization.csv");

  const countriesFilter = useSelector((state: AppState) => state.chartControls.countriesFilter);
  const dataType = useSelector((state: AppState) => state.chartControls.dataType);

  // create custom hook that will process the data
  // processing includes aggregation and filtering
  const { processedData, processingError } = useProcessDataHook(data, {
    countriesFilter,
    dataType,
    aggregationType: "AVG"
  });

  console.log("processedData", processedData);

  // todo: display error msgs
  return (
    <Grid container direction="row" spacing={1}>
      <Grid>
        <Card>
          <ChartControlsComponent />
        </Card>
      </Grid>
      <Grid>
        <Card>
          <ChartComponent data={processedData} />
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
