import Plotly from "plotly.js-basic-dist-min";
import { useEffect } from "react";
import { DataItem } from "src/types";

interface Props {
  data: DataItem[];
}

/**
 * @param props
 * @description Adaptable chart component. Reacts to data passed in props.
 */
export function ChartComponent(props: Props) {
  useEffect(() => {

    if (props.data.length > 0) {

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
          width: 800,
          height: 500,
          yaxis: {
            rangemode: "tozero"
          },
          clickmode: "select"
        },
        { displayModeBar: false }
      );
    }

  }, [props.data]);

  return <div id="gd"></div>;
}
