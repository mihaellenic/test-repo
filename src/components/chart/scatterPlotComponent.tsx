import Plotly, { PlotlyHTMLElement } from "plotly.js-basic-dist-min";
import { useEffect, useState } from "react";
import { format } from "d3-format";
import { SelectedPointInfoComponent } from "./selectedPointInfo/selectedPointInfo.component";

interface Props {
  data: { x: string[], y: number[] };
  color?: string;
}

/**
 * @description Adaptable scatter plot component. Reacts to data and color passed in props.
 */
export function ScatterPlotComponent(props: Props) {
  const [selectedPointInfo, setSelectedPointInfo] = useState<string>("");

  useEffect(() => {
    const gd = document.getElementById("gd") as PlotlyHTMLElement;

    const trace: any = {
      type: "scattergl",
      mode: "markers",
      x: props.data.x,
      y: props.data.y,
      marker: {
        color: props.color
      },
      transforms: [{
        type: "aggregate",
        groups: props.data.x,
        aggregations: [
          {
            target: "y",
            func: "avg",
            enabled: true
          }
        ]
      }]
    };

    // calling Plotly.newPlot() on every data change is not the most performant way to update the chart
    // Plotly.newPlot() should be called on the first render and Plotly.update() on subsequent updates
    // Reference: https://plotly.com/javascript/plotlyjs-function-reference/#plotlyupdate
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
          rangemode: "tozero",
          hoverformat: ".2s"
        }
      },
      { displayModeBar: false }
    );

    gd?.on("plotly_click", (eventData: any) => {

      const selectedPoint = eventData.points[0];

      if (selectedPoint) {
        const value = format("0.2s")(selectedPoint.y);
        const text = `${selectedPoint.x}: ${value}`;
        setSelectedPointInfo(text);
      }

    });


  }, [props.data, props.color]);


  return <div id="gd">
    <SelectedPointInfoComponent info={selectedPointInfo} />
  </div>;
}
