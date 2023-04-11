import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardContainerContent from '../components/CardContainerContent';

const mockPost = {
  name: 'Sample Post',
  writtenBy: 'Sample Author',
  writtenOn: new Date('2023-04-10T10:20:30Z'),
  authorLabel: 'Contributor',
  post: 'Sample Post Content',
  imgUrl: 'https://example.com/sample-image.jpg',
};

const defaultProps = {
  post: mockPost,
  order_key: 0,
  contentsLoaded: true,
  dimensions: { width: 1024, height: 768 },
  specialLayout: false,
  isLowerMediumBreak: false,
};

describe('CardContainerContent', () => {
  test('renders CardContainerContent correctly', () => {
    render(<CardContainerContent {...defaultProps} />);

    expect(screen.getByText('Sample Post')).toBeInTheDocument();
    expect(screen.getByText('Sample Author')).toBeInTheDocument();
    expect(screen.getByText('Contributor')).toBeInTheDocument();
  });

  test('renders CardContainerContent with specialLayout and isLowerMediumBreak', () => {
    render(
      <CardContainerContent
        {...defaultProps}
        specialLayout={true}
        isLowerMediumBreak={true}
      />,
    );

    expect(screen.getByText('Sample Post')).toBeInTheDocument();
    expect(screen.getByText('Sample Author')).toBeInTheDocument();
    expect(screen.getByText('Contributor')).toBeInTheDocument();
  });

  test('renders CardContainerContent with specialLayout and isEven order_key', () => {
    render(
      <CardContainerContent
        {...defaultProps}
        specialLayout={true}
        order_key={2}
      />,
    );

    expect(screen.getByText('Sample Post')).toBeInTheDocument();
    expect(screen.getByText('Sample Author')).toBeInTheDocument();
    expect(screen.getByText('Contributor')).toBeInTheDocument();
  });
});
