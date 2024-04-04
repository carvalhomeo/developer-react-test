import * as dataSource from "../dataSources/regions.json";
import Widgets from "../components/Widgets";

export default function Regions() {
    const { tableHeaders, tableData } = dataSource;

    return <Widgets tableHeaders={tableHeaders} tableData={tableData} />
}