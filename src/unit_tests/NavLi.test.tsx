import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavLi from '../components/NavLi';
import { NavigationContext } from '../context/NavigationContext';

const renderNavLi = (
  props: { isSmall: boolean },
  contextValue: { isMenuOpened?: boolean; setMenu?: jest.Mock<any, any> },
) => {
  return render(
    <NavigationContext.Provider value={contextValue}>
      <NavLi {...props}>
        <a href="#">Test</a>
      </NavLi>
    </NavigationContext.Provider>,
  );
};

describe('NavLi component', () => {
  const defaultProps = {
    isSmall: false,
  };

  const contextValue = {
    isMenuOpened: true,
    setMenu: jest.fn(),
  };

  test('renders NavLi with children', () => {
    const { getByText } = renderNavLi(defaultProps, contextValue);
    const linkElement = getByText('Test');
    expect(linkElement).toBeInTheDocument();
  });

  test('calls handleMenu when clicked', () => {
    const { getByText } = renderNavLi(defaultProps, contextValue);
    const navLiElement = getByText('Test');
    fireEvent.click(navLiElement);

    expect(contextValue.setMenu).toHaveBeenCalledWith(false);
  });
});
