import  { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Module from '../../src/components/Module.jsx';

describe('something truthy and falsy', () => {
    it('true to be true', () => {
        expect(true).toBe(true)
    })
    it('false to be false', () => {
        expect(false).toBe(false)
    })
})
describe('Module elements render properly', () => {
    it('renders correct heading', () => {
        render(<Module />)
        expect(screen.getByRole('heading').textContent).toMatch(/Overview/i)
    })
    it('renders page-content div', () => {
        render(<Module type={'weather'} />)
        console.log(screen.getAllByRole('container'))
        console.table(screen.getAllByRole('container'))
        expect(screen.getAllByRole('container').classList).toContain('module weather')
    })
})