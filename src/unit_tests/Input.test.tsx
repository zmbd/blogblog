import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../components/Input';

describe('Input', () => {
  const defaultProps = {
    label: 'Test Label',
    placeholder: 'Test Placeholder',
    stateSetter: jest.fn(),
    state: '',
  };

  const renderInput = (props = defaultProps) => {
    return render(<Input {...props} />);
  };

  test('renders label with correct text', () => {
    const { getByText } = renderInput();
    expect(getByText('Test Label:')).toBeInTheDocument();
  });

  test('renders input with correct placeholder', () => {
    const { getByPlaceholderText } = renderInput();
    expect(getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  test('calls stateSetter with new value on input change', () => {
    const { getByPlaceholderText } = renderInput();
    const input = getByPlaceholderText('Test Placeholder');

    fireEvent.change(input, { target: { value: 'New value' } });

    expect(defaultProps.stateSetter).toHaveBeenCalledTimes(1);
    expect(defaultProps.stateSetter).toHaveBeenCalledWith('New value');
  });
});
