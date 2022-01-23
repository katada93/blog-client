import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('render App works', () => {
  render(<App />);

  const text = screen.getByText('Новая запись');
  expect(text).toBeInTheDocument();
});
