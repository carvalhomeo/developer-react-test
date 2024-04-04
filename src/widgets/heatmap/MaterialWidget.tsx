import { HeatmapProps } from "./Heatmap.props";
import HeatmapTable from "../../components/HeatmapTable";

export const MaterialWidget = ({tableData, tableHeaders}: HeatmapProps) => {
  return (
      <HeatmapTable columns={tableHeaders} data={tableData} />
  );
};
