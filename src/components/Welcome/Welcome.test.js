import React from 'react';
import { render } from '@testing-library/react';
import Welcome from './Welcome';

test('renders welcome component', () => {
  const { getByText } = render(<Welcome />);
  const welcomeElement = getByText('Welcome');
  expect(welcomeElement).toBeInTheDocument();
});
