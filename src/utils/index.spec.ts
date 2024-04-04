import { findHighestLowest, mapCellInfo, mapData } from "."
import * as dataSource from '../dataSources/cars.json'

describe('Utils', () => {
    const { tableData } = dataSource
    
    it('should test mapData', () => {
        const result = mapData(
            ["Persons","Alexander", "Marie"], 
            ["Monday", "Tuesday", "Wednesday"], 
            [["Monday", 10, 92, 35,], ["Tuesday", 19, 58, 15], ["Wednesday", 8, 78, 123]])
        
        expect(result).toEqual([
            [ 0, 0, 10 ], [ 1, 0, 92 ], [ 2, 0, 35 ],
            [ 0, 1, 19 ], [ 1, 1, 58 ], [ 2, 1, 15 ],
            [ 0, 2, 8 ], [ 1, 2, 78 ], [ 2, 2, 123 ]
        ])
    })

    it('should test mapCellInfo', () => {
        const cells: number[][] = tableData.slice(1).map(cell => cell.slice(1)) as number[][]
        const result = mapCellInfo(cells)

        expect(result).toEqual([
            { row: 1, col: 1, readOnly: true, renderer: 'customRenderer' },
            { row: 1, col: 2, readOnly: true, renderer: 'customRenderer' },
            { row: 1, col: 3, readOnly: true, renderer: 'customRenderer' },
            { row: 1, col: 4, readOnly: true, renderer: 'customRenderer' },
            { row: 2, col: 1, readOnly: true, renderer: 'customRenderer' },
            { row: 2, col: 2, readOnly: true, renderer: 'customRenderer' },
            { row: 2, col: 3, readOnly: true, renderer: 'customRenderer' },
            { row: 2, col: 4, readOnly: true, renderer: 'customRenderer' }
          ])
    })

    it('should test findHighestLowest', () => {
        const cells: number[][] = tableData.map(cell => cell.slice(1)) as number[][]
        const { highest, lowest } = findHighestLowest(cells)
       
        expect(highest).toEqual(30)
        expect(lowest).toEqual(10)
    })
})