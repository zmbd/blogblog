import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavigationButton from '../components/NavigationButton';

describe('NavigationButton', () => {
  const defaultProps = {
    children: '1',
    currentPage: 1,
    breakpoint: 1,
    handlePageChange: jest.fn(),
  };

  const renderNavigationButton = (props = defaultProps) => {
    return render(<NavigationButton {...props} />);
  };

  test('renders navigation button with children', () => {
    const { getByText } = renderNavigationButton();
    expect(getByText('1')).toBeInTheDocument();
  });

  test('renders navigation button with active style', () => {
    const { getByText } = renderNavigationButton({
      ...defaultProps,
      currentPage: 1,
      breakpoint: 1,
    });
    const button = getByText('1');

    expect(button).toHaveClass('bg-primary-whitegray');
    expect(button).toHaveClass('select-none');
  });

  test('renders navigation button with active style', () => {
    const { getByText } = renderNavigationButton();
    const button = getByText('1');

    expect(button).toHaveClass('bg-primary-whitegray');
    expect(button).toHaveClass('select-none');
  });

  test('handlePageChange is called when button is clicked', () => {
    const handlePageChange = jest.fn();
    const { getByText } = renderNavigationButton({
      ...defaultProps,
      handlePageChange,
    });
    const button = getByText('1');

    fireEvent.click(button);
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });
});
