import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Signup from "./Signup";

test('renders signup form with email and password fields', () => {
  const { getByPlaceholderText } = render(<Signup />);
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('handles form submission', () => {
  const { getByPlaceholderText, getByText } = render(<Signup />);
  const emailInput = getByPlaceholderText('Email');
  const passwordInput = getByPlaceholderText('Password');
  const signupButton = getByText('Create Account');
  
  // Simulate user input
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  // Simulate form submission
  fireEvent.click(signupButton);
  
  // Add your expectations here based on your signup logic
});
