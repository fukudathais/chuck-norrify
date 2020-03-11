import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('says hello world', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/hello world/i);
  expect(h1Element).toBeInTheDocument();
});
