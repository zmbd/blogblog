import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CardContainer from '../components/CardContainer';
import {
  MediumBreakpointContext,
  ScreenContext,
} from '../context/screenContext';
import useWindowDimensions from '../hooks/useWindowDimensions';

jest.mock('../hooks/useWindowDimensions', () => jest.fn());

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
  forKey: 0,
  specialLayout: false,
};

describe('CardContainer', () => {
  beforeEach(() => {
    (useWindowDimensions as jest.Mock).mockReturnValue({
      width: 1024,
      height: 768,
    });
  });

  test('renders the CardContainer with default layout', () => {
    render(
      <Router>
        <ScreenContext.Provider value={{}}>
          <MediumBreakpointContext.Provider
            value={{ isLowerMediumBreak: false }}
          >
            <CardContainer {...defaultProps} />
          </MediumBreakpointContext.Provider>
        </ScreenContext.Provider>
      </Router>,
    );

    expect(screen.getByText('Sample Post')).toBeInTheDocument();
    expect(screen.getByText('Sample Author')).toBeInTheDocument();
  });

  test('renders the CardContainer with specialLayout', () => {
    render(
      <Router>
        <ScreenContext.Provider value={{}}>
          <MediumBreakpointContext.Provider
            value={{ isLowerMediumBreak: false }}
          >
            <CardContainer {...defaultProps} specialLayout={true} />
          </MediumBreakpointContext.Provider>
        </ScreenContext.Provider>
      </Router>,
    );

    expect(screen.getByText('Sample Post')).toBeInTheDocument();
    expect(screen.getByText('Sample Author')).toBeInTheDocument();
  });

  test('renders the CardContainer with isLowerMediumBreak', () => {
    render(
      <Router>
        <ScreenContext.Provider value={{}}>
          <MediumBreakpointContext.Provider
            value={{ isLowerMediumBreak: true }}
          >
            <CardContainer {...defaultProps} />
          </MediumBreakpointContext.Provider>
        </ScreenContext.Provider>
      </Router>,
    );

    expect(screen.getByText('Sample Post')).toBeInTheDocument();
    expect(screen.getByText('Sample Author')).toBeInTheDocument();
  });
});
