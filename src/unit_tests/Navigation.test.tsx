import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  const defaultProps = {
    isSmall: false,
  };

  const renderNavigation = (props = defaultProps) => {
    return render(
      <MemoryRouter>
        <Navigation {...props} />
      </MemoryRouter>,
    );
  };

  test('renders navigation list', () => {
    const { container } = renderNavigation();
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  test('renders Home NavLink', () => {
    const { getByText } = renderNavigation();
    expect(getByText('Home')).toBeInTheDocument();
  });

  test('renders Articles NavLink', () => {
    const { getByText } = renderNavigation();
    expect(getByText('Articles')).toBeInTheDocument();
  });

  test('renders About NavLink', () => {
    const { getByText } = renderNavigation();
    expect(getByText('About')).toBeInTheDocument();
  });

  test('renders Contacts NavLink', () => {
    const { getByText } = renderNavigation();
    expect(getByText('Contacts')).toBeInTheDocument();
  });

  test('renders nav links with small screen style', () => {
    const { container } = renderNavigation({ isSmall: true });
    const navList = container.querySelector('ul');

    expect(navList).toHaveClass('flex-col');
    expect(navList).toHaveClass('justify-start');
    expect(navList).toHaveClass('items-start');
  });

  test('renders nav links with large screen style', () => {
    const { container } = renderNavigation({ isSmall: false });
    const navList = container.querySelector('ul');

    expect(navList).toHaveClass('flex-row');
    expect(navList).toHaveClass('justify-between');
    expect(navList).toHaveClass('items-center');
  });
});
