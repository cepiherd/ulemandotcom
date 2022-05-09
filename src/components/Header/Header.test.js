import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  render(<Header user="cepi" />);
  const linkElement = screen.getByText(/cepi/i);
  expect(linkElement).toBeInTheDocument();
});
