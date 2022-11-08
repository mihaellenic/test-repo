import { Card, Grid } from "@mui/joy";
import { ScatterPlotComponent } from "./components/chart/scatterPlotComponent";
import { ChartControlsComponent } from "./components/chartControls/chartControls.component";
import { useFetch } from "./hooks/useFetch.hook";
import { useSelector } from "react-redux";
import { AppState } from "./store/store";
import { useProcessData } from "./hooks/useProcessData";
import { DataType } from "./store/chartControls/types";

function App() {

  const { data } = useFetch("/Modelon_SkillTest_DataVisualization.csv");

  const countriesFilter = useSelector((state: AppState) => state.chartControls.countriesFilter);
  const dataType = useSelector((state: AppState) => state.chartControls.dataType);

  const { processedData } = useProcessData(data, {
    countriesFilter,
    dataType
  });

  return (
    <Grid container direction="row" spacing={1}>
      <Grid>
        <Card>
          <ChartControlsComponent />
        </Card>
      </Grid>
      <Grid>
        <Card>
          <ScatterPlotComponent
            data={processedData}
            color={dataType === DataType.SALARIES ? "green" : "darkred"}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
