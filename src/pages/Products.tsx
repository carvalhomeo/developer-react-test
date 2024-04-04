import * as dataSource from "../dataSources/products.json";
import Widgets from "../components/Widgets";

export default function Products() {
    const { tableHeaders, tableData } = dataSource;

    return <Widgets tableHeaders={tableHeaders} tableData={tableData} />
}