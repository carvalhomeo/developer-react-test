import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { findHighestLowest } from "../utils";

interface CellProps {
  value: number,
  highest: number,
  lowest: number
}

function Cell({ value, highest, lowest }: CellProps){
  const normalizedValue = (value - lowest) / (highest - lowest);
  const backgroundColor = `rgba(255, 0, 0, ${0.2 + normalizedValue})`;
  
  return (
    <TableCell scope="row" sx={{backgroundColor: backgroundColor}}>
      {value}
    </TableCell>
  )
}

interface HeatmapTableProps {
  columns: string[],
  data: (string | number)[][]
}

export default function HeatmapTable({ columns, data }: HeatmapTableProps) {
  const cells: number[][] = data.map(cell => cell.slice(1)) as number[][]
  const { highest, lowest } = findHighestLowest(cells)
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => <TableCell key={column}>{column}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.map((value, index) => (
                index > 0 ? 
                  <Cell key={index} value={value as number} highest={highest} lowest={lowest} /> : 
                  <TableCell component="th" key={index}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}