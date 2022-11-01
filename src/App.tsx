import { ChartComponent } from "src/components/chart/chart.component";
import { Button, CssVarsProvider } from "@mui/joy";

function App() {
  return (
    <CssVarsProvider>
      <Button variant="soft">Hello World</Button>
      <ChartComponent data={{}} axes={{}} />
    </CssVarsProvider>
  );
}

export default App;
