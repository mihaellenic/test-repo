import { ChartComponent } from "src/components/chart/chart.component";
import { Button, CssVarsProvider } from "@mui/joy";
import { ChangeEvent } from "react";
import * as Papa from "papaparse";

function App() {
  function onUploadChange(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;

    if (files && files.length > 0) {
      Papa.parse(files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results) {
          console.log(results);
        },
      });
    }
  }

  return (
    <CssVarsProvider>
      <Button variant="soft" component="label">
        Upload
        <input type="file" accept="text/csv" hidden onChange={onUploadChange} />
      </Button>
      <ChartComponent data={{}} axes={{}} />
    </CssVarsProvider>
  );
}

export default App;
