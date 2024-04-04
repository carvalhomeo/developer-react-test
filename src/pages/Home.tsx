import { MaterialWidget } from "../widgets/heatmap/MaterialWidget";
import * as dataSourceVersions from "../dataSources/versions.json";
import * as dataSourceProducts from "../dataSources/products.json";
import * as dataSourceRegions from "../dataSources/regions.json";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Home() {
    const { tableHeaders: tableHeadersVersions, tableData: tableDataVersions } = dataSourceVersions;
    const { tableHeaders: tableHeadersProducts, tableData: tableDataProducts } = dataSourceProducts;
    const { tableHeaders: tableHeadersRegions, tableData: tableDataRegions } = dataSourceRegions;

    return (
        <Box className="App">
            <Container sx={{ paddingTop: 3 }} maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item lg={12}>
                        <Typography variant="h5" sx={{ marginBottom: 1 }}>
                        Material Table Versions Heatmap
                        </Typography>
                        <MaterialWidget tableHeaders={tableHeadersVersions} tableData={tableDataVersions} />
                    </Grid>
                    <Grid item lg={12}>
                        <Typography variant="h5" sx={{ marginBottom: 1 }}>
                            Material Table Products Heatmap
                        </Typography>
                        <MaterialWidget tableHeaders={tableHeadersProducts} tableData={tableDataProducts} />
                    </Grid>
                    <Grid item lg={12}>
                        <Typography variant="h5" sx={{ marginBottom: 1 }}>
                            Material Table Regions Heatmap
                        </Typography>
                        <MaterialWidget tableHeaders={tableHeadersRegions} tableData={tableDataRegions} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}