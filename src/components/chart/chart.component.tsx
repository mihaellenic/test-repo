import Plotly, { PlotlyHTMLElement } from "plotly.js-basic-dist-min";
import { useEffect, useState } from "react";
import { DataItem } from "src/types";
import { SelectedPointInfoComponent } from "./selectedPointInfo.component";
import { format } from "d3-format";

interface Props {
  data: DataItem[];
}

/**
 * @param props
 * @description Adaptable chart component. Reacts to data passed in props.
 */
export function ChartComponent(props: Props) {
  const [selectedPointInfo, setSelectedPointInfo] = useState<string>("");

  useEffect(() => {
    if (props.data.length > 0) {

      const gd = document.getElementById("gd") as PlotlyHTMLElement;

      const x: any[] = [];
      const y: any[] = [];
      props.data.forEach((item: DataItem): any => {
        x.push(item.country);
        y.push(item.annual_salary);
      });

      const trace: any = {
        type: "scatter",
        mode: "markers",
        x,
        y
      };

      Plotly.newPlot(
        "gd",
        [trace],
        {
          width: 600,
          height: 400,
          margin: {
            t: 0,
            b: 70,
            l: 30,
            r: 0
          },
          yaxis: {
            rangemode: "tozero"
          }
        },
        { displayModeBar: false }
      );

      gd?.on("plotly_click", (eventData: any) => {

        const selectedPoint = eventData.points[0];

        if (selectedPoint) {
          const formatter = format("0.2s");
          const value = formatter(selectedPoint.y);
          const info = `${selectedPoint.x}: ${value}`;
          setSelectedPointInfo(info);
        }

      });

    }

  }, [props.data]);


  return <div id="gd">
    <SelectedPointInfoComponent info={selectedPointInfo} />
  </div>;
}
