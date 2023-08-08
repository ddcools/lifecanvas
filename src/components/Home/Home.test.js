import React from "react";
import { render } from "@testing-library/react";
import Home from './Home';

test('renders "Home Page" text', () => {
  const { getByText } = render(<Home/>);
  const homePageText = getByText('Home Page');
  expect(homePageText).toBeInTheDocument();
});
