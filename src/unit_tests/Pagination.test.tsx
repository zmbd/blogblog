// Pagination.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../components/Pagination';

const mockHandlePageChange = jest.fn();

const defaultProps = {
  posts: 50,
  currentPage: 1,
  handlePageChange: mockHandlePageChange,
};

describe('Pagination', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with provided currentPage', () => {
    render(<Pagination {...defaultProps} />);
    const currentPageElement = screen.getByText('1');
    expect(currentPageElement).toHaveClass('bg-primary-100');
    expect(currentPageElement).toHaveClass('text-white');
  });

  test('calls handlePageChange on clicking a different page number', () => {
    render(<Pagination {...defaultProps} />);
    const pageNumberElement = screen.getByText('2');
    fireEvent.click(pageNumberElement);
    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(2);
  });

  test('does not call handlePageChange when clicking the current page number', () => {
    render(<Pagination {...defaultProps} />);
    const currentPageElement = screen.getByText('1');
    fireEvent.click(currentPageElement);
    expect(mockHandlePageChange).toHaveBeenCalledTimes(0);
  });

  test('calls handlePageChange when clicking next navigation button', () => {
    render(<Pagination {...defaultProps} />);
    const nextButtonElement = screen.getByText('»');
    fireEvent.click(nextButtonElement);
    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
  });

  test('calls handlePageChange when clicking previous navigation button', () => {
    render(<Pagination {...{ ...defaultProps, currentPage: 2 }} />);
    const prevButtonElement = screen.getByText('«');
    fireEvent.click(prevButtonElement);
    expect(mockHandlePageChange).toHaveBeenCalledTimes(1);
    expect(mockHandlePageChange).toHaveBeenCalledWith(1);
  });
});
