import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
//Interfaces
import { TextData } from "../../Interfaces/TextData";

const SimpleCharts: React.FC<{ chartData: TextData[] }> = ({ chartData }) => {
  let dataSeries =
    chartData.length > 0
      ? chartData?.map((e) => {
          return { data: [e.number], color: e.color, label: e.label };
        })
      : chartData;
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: ["Cities"],
          scaleType: "band",
        },
      ]}
      series={dataSeries}
      width={500}
      height={250}
    />
  );
};

export default SimpleCharts;
