import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App render', () => {
  it('render App works', () => {
    const { container } = render(<App />);

    expect(container.querySelector('header')).toBeInTheDocument();
  });
});
