import { render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HeatmapTable from './HeatmapTable'
import * as dataSource from '../dataSources/cars.json'

describe("HeatmapTable", () => {
    it('should render heatmap table', () => {
        const { tableHeaders, tableData } = dataSource
        render(<HeatmapTable columns={tableHeaders} data={tableData} />, {wrapper: MemoryRouter})

        tableHeaders.forEach(header => expect(screen.getByText(header)).toBeInTheDocument())

        tableData.forEach(data => {
            expect(screen.getByRole('row', { name: data.join(' ') })).toBeInTheDocument()
        })
    })
})