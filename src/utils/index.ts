export function mapData(columns: string[], rows: string[], tableData: (string | number)[][]) {
    let finalData = []

    for(let i = 0; i < rows.length; i++) {
      for(let z = 0; z < columns.length; z++) {
        const value = tableData[i][z+1] as number
        finalData.push([z, i, value])
      }
    }

    return finalData
}

export function mapCellInfo(cells: number[][]) {
  let cellInfo = []

  for(let i = 0; i < cells.length; i++) {
    for(let z = 0; z < cells[0].length; z++) {
      cellInfo.push({row: i+1, col: z+1, readOnly: true, renderer: 'customRenderer'})
    }
  }

  return cellInfo
}

export function findHighestLowest(rows: number[][]) {
  let highest = Number.NEGATIVE_INFINITY;
  let lowest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
          const num = rows[i][j];
          
          if (num > highest) {
              highest = num;
          }
          if (num < lowest) {
              lowest = num;
          }
      }
  }

  return { highest, lowest };
}