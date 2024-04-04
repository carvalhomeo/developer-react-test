import { Box, Container, Grid, Typography } from "@mui/material";
import { HandsontableWidget, HighchartsWidget } from "../widgets";

interface WidgetsProps {
    tableHeaders: Array<string>;
    tableData: Array<Array<string | number>>;
}
  

export default function Widgets({tableHeaders, tableData}: WidgetsProps) {
    return (
        <Box className="App">
            <Container sx={{ paddingTop: 3 }} maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item lg={12}>
                        <Typography variant="h5" sx={{ marginBottom: 1 }}>
                            Highcharts Heatmap
                        </Typography>
                        <HighchartsWidget
                          tableHeaders={tableHeaders}
                          tableData={tableData}
                        />
                    </Grid>
                    <Grid item lg={12}>
                      <Typography variant="h5" sx={{ marginBottom: 1 }}>
                        Handsontable Heatmap
                      </Typography>
                      <HandsontableWidget
                        tableHeaders={tableHeaders}
                        tableData={tableData}
                      />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}