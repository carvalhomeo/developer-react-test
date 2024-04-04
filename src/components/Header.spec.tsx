import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe("Header", () => {
    it('should render header with buttons', () => {
        render(<Header />, {wrapper: MemoryRouter})

        expect(screen.getAllByRole('link', { name: /developer assessment/i })).toHaveLength(2)
        expect(screen.getByRole('button', { name: /versions/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /products/i })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /regions/i })).toBeInTheDocument()
    })
})