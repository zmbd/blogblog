import React from 'react';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound';

const renderNotFound = (options = {}) => {
  return render(
    <MemoryRouter initialEntries={['/not-found']}>
      <Routes>
        <Route path="/not-found" element={<NotFound {...options} />} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </MemoryRouter>,
  );
};

describe('NotFound', () => {
  test('renders NotFound with countdown', () => {
    renderNotFound({ testMode: true });

    expect(screen.getByText(/Oops.../i)).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are looking for is with our Lord now.../i),
    ).toBeInTheDocument();
    expect(screen.getByText(/You will be redirected to/i)).toBeInTheDocument();
  });

  test('navigates to home after countdown reaches 0', async () => {
    jest.setTimeout(10000);
    renderNotFound({ testMode: true });

    await waitFor(() =>
      screen.queryByText(/You will be redirected to Home page in/i),
    );

    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });
});
