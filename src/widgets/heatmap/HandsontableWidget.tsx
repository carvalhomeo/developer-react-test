import { HeatmapProps } from "./Heatmap.props";
import Hottable from "../../components/Hottable";

export const HandsontableWidget = ({tableData, tableHeaders}: HeatmapProps) => {
  const data = [tableHeaders, ...tableData]
  
  return (
      <Hottable data={data}/>
  );
};
