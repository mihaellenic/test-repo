import { Card, CssVarsProvider, extendTheme, Grid } from "@mui/joy";
import { ChartComponent } from "./components/chart/chart.component";
import { ChartControlsComponent } from "./components/chartControls/chartControls.component";
import { useFetch } from "./hooks/useFetch.hook";
import { useCustomTheme } from "./hooks/useCustomTheme.hook";

function App() {

  const { data } = useFetch("/Modelon_SkillTest_DataVisualization.csv");

  return (
    <CssVarsProvider theme={useCustomTheme()}>
      <Grid container direction="row" spacing={1}>
        <Grid>
          <Card>
            <ChartControlsComponent />
          </Card>
        </Grid>
        <Grid>
          <Card>
            <ChartComponent data={data} />
          </Card>
        </Grid>
      </Grid>
    </CssVarsProvider>
  );
}

export default App;
