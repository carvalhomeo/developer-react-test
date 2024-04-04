import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hottable from './Hottable'
import * as dataSource from '../dataSources/cars.json'

describe("Hottable", () => {
    it('should render heatmap chart', () => {
        const { tableData, tableHeaders } = dataSource

        const data = [tableHeaders, ...tableData]
        // render(<Hottable data={data} />, {wrapper: MemoryRouter})

        // screen.logTestingPlaygroundURL()
    })
})