import { Card, CssVarsProvider, extendTheme, Grid } from "@mui/joy";
import { ChartComponent } from "./components/chart/chart.component";
import { ChartControlsComponent } from "./components/chartControls/chartControls.component";
import { useFetch } from "./hooks/useFetch.hook";
import { useCustomTheme } from "./hooks/useCustomTheme.hook";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {

  const { data } = useFetch("/Modelon_SkillTest_DataVisualization.csv");

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
