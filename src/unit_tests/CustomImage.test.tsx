import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomImage from '../components/CustomImage';

const defaultProps = {
  roundValue: 'rounded-full',
  width: 'w-20',
  height: 'h-20',
  ml: 'ml-3',
  objectFit: 'object-cover',
  imgUrl:
    'https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
};

describe('CustomImage', () => {
  test('renders CustomImage with default props', () => {
    render(<CustomImage {...defaultProps} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', defaultProps.imgUrl);
  });

  test('renders CustomImage with custom props', () => {
    const customProps = {
      roundValue: 'rounded-none',
      width: 'w-40',
      height: 'h-40',
      ml: 'ml-6',
      objectFit: 'object-contain',
      imgUrl: 'https://example.com/custom-image.jpg',
    };
    render(<CustomImage {...customProps} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', customProps.imgUrl);
  });
});
