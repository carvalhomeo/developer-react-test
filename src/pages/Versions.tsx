import * as dataSource from "../dataSources/versions.json";
import Widgets from "../components/Widgets";

export default function Versions() {
    const { tableHeaders, tableData } = dataSource;
    
    return <Widgets tableHeaders={tableHeaders} tableData={tableData} />
}