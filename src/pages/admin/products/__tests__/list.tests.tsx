import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsList from '../list';

it('renders products list', () => {
  render(<ProductsList />);
});
