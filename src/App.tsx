import { Card, CssVarsProvider } from "@mui/joy";
import { ChartComponent } from "./components/chart/chart.component";
import { useFetch } from "./hooks/useFetch.hook";

function App() {

  const { data } = useFetch("/public/Modelon_SkillTest_DataVisualization.csv");

  return (
    <CssVarsProvider>
      <Card variant="outlined">
        <ChartComponent data={data} />
      </Card>
    </CssVarsProvider>
  );
}

export default App;
