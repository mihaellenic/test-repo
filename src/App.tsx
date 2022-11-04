import { Card, CssVarsProvider, Grid } from "@mui/joy";
import { ChartComponent } from "./components/chart/chart.component";
import { ChartControlsComponent } from "./components/chartControls/chartControls.component";
import { useFetch } from "./hooks/useFetch.hook";

function App() {

  const { data } = useFetch("/Modelon_SkillTest_DataVisualization.csv");

  return (
    <CssVarsProvider>
      <Grid container direction="row" spacing={1}>
        <Grid>
          <Card variant="outlined">
            <ChartControlsComponent />
          </Card>
        </Grid>
        <Grid>
          <Card variant="outlined">
            <ChartComponent data={data} />
          </Card>
        </Grid>
      </Grid>
    </CssVarsProvider>
  );
}

export default App;
