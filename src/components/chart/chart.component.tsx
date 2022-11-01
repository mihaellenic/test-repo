import Plotly from "plotly.js-basic-dist-min";
import { useEffect } from "react";

interface Props {
  data: any;
  axes: any;
}

/**
 * @param props
 * @description Adaptable chart component. Reacts to data and axes passed in props.
 */
export function ChartComponent(props: Props) {
  useEffect(() => {
    Plotly.newPlot(
      "chart",
      [{ y: [1, 2, 3] }],
      {
        width: 800,
        height: 500,
      },
      { displayModeBar: false }
    );
  });

  return <div id="chart"></div>;
}
