import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from '../components/Login';

// Mock Firebase functions
jest.mock('../firebase/firebase', () => {
  return {
    auth: {},
    db: {},
  };
});

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

describe('Login', () => {
  const defaultProps = {
    updateUserState: jest.fn(),
  };

  const renderLogin = (props = defaultProps) => {
    return render(<Login {...props} />);
  };

  test('renders email input and label', () => {
    const { getByText, getByPlaceholderText } = renderLogin();
    expect(getByText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('email')).toBeInTheDocument();
  });

  test('renders password input and label', () => {
    const { getByText, getByPlaceholderText } = renderLogin();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('password')).toBeInTheDocument();
  });

  test('renders forgot password link', () => {
    const { getByText } = renderLogin();
    expect(getByText('Forgot password?')).toBeInTheDocument();
  });

  test('renders login button', () => {
    const { getByText } = renderLogin();
    expect(getByText('login')).toBeInTheDocument();
  });

  test('email input updates value and shows error', async () => {
    const { getByPlaceholderText } = renderLogin();
    const emailInput = getByPlaceholderText('email');

    fireEvent.change(emailInput, { target: { value: 'invalid.email' } });
    expect(emailInput).toHaveValue('invalid.email');

    await waitFor(() => {
      expect(emailInput).toHaveClass('input-error');
    });
  });

  test('password input updates value and shows error', async () => {
    const { getByPlaceholderText } = renderLogin();
    const passwordInput = getByPlaceholderText('password');

    fireEvent.change(passwordInput, { target: { value: 'short' } });
    expect(passwordInput).toHaveValue('short');

    await waitFor(() => {
      expect(passwordInput).toHaveClass('input-error');
    });
  });
});
