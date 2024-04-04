import { HeatmapProps } from "./Heatmap.props";
import HeatmapChart from "../../components/HeatmapChart";
import { mapData } from "../../utils";

export const HighchartsWidget = ({tableData, tableHeaders}: HeatmapProps) => {
  const columns = tableHeaders.slice(1)
  const rows = tableData.map(data => data[0] as string)
  const data = mapData(columns, rows, tableData)

  return (
      <HeatmapChart columns={columns} rows={rows} data={data} />
  );
};
