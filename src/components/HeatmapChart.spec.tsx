import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HeatmapChart from './HeatmapChart'
import * as dataSource from '../dataSources/cars.json'
import { mapData } from '../utils'

describe("HeatmapChart", () => {
    it('should render heatmap chart', () => {
        const { tableData, tableHeaders } = dataSource
        const columns = tableHeaders.slice(1)
        const rows = tableData.map(data => data[0] as string)
        const data = mapData(columns, rows, tableData)

        const { container } = render(<HeatmapChart rows={rows} columns={columns} data={data} />, {wrapper: MemoryRouter})

        expect(screen.getByText(/highcharts heatmap/i)).toBeInTheDocument()

        // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
        const chart = container.querySelector('.highcharts-container')
        expect(chart).toBeInTheDocument()

        columns.forEach(column => expect(screen.getByText(column)).toBeInTheDocument())
        tableData.forEach(dta => dta.forEach((value) => {
            expect(screen.getAllByText(value)[0]).toBeInTheDocument()
        }))
    })
})