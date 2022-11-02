import { ChartComponent } from "src/components/chart/chart.component";
import { CssVarsProvider } from "@mui/joy";
import { useEffect, useState } from "react";
import * as Papa from "papaparse";
import { DataItem } from "./types";

function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {

        // load csv from file an parse
        Papa.parse("/public/Modelon_SkillTest_DataVisualization.csv", {
            download: true,
            dynamicTyping: true,
            header: true,
            transformHeader(header: string, index: number): string {
                return header
                    .replace(' ', '_')
                    .replace('-', '')
            },
            complete: function(results) {
                console.log(results);
                setIsLoading(false);
            },
            error(error: Error) {
                console.error("Error while fetching/parsing csv file.", error)
                setIsLoading(false);
            }
        });

    }, [])

  return (
    <CssVarsProvider>
      <ChartComponent data={{}} axes={{}} />
    </CssVarsProvider>
  );
}

export default App;
