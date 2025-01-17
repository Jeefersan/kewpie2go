import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMenuHidden,
  selectLoginHidden,
  selectUserDropdownHidden,
} from '../../redux/header/header.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  setMenuHidden,
  toggleLoginHidden,
  toggleUserDropdownHidden,
} from '../../redux/header/header.actions';
import { logoutStartAsync } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { ReactComponent as DropdownIcon } from '../../assets/icons/ic_dropdown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import Hamburger from './hamburger/hamburger.component';
import LoginDropdown from '../login-dropdown/login-dropdown.component';
import UserDropdown from '../user-dropdown/user-dropdown.component';

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  StyledLink,
  CurrentUserContainer,
  LoginContainer,
  UserOption,
  CurrentUserGreetingContainer,
  CurrentUserOptionsContainer,
} from './header.styles';

const Header = () => {
  const dispatch = useDispatch();
  const cartHidden = useSelector(selectCartHidden);
  const isMenuHidden = useSelector(selectMenuHidden);
  const isLoginHidden = useSelector(selectLoginHidden);
  const isUserDropdownHidden = useSelector(selectUserDropdownHidden);
  const currentUser = useSelector(selectCurrentUser);

  const toggleLogin = () => {
    dispatch(toggleLoginHidden());
    dispatch(setMenuHidden());
  };

  return (
    <HeaderContainer>
      <Hamburger />
      <LinksContainer isMenuHidden={isMenuHidden}>
        {!isMenuHidden ? (
          <StyledLink to='/'>HOME</StyledLink>
        ) : (
          <LogoContainer>
            <Link to='/'>
              <Logo />
            </Link>
          </LogoContainer>
        )}

        <StyledLink to='/shop'>SHOP</StyledLink>
        <StyledLink to='/about'>ABOUT</StyledLink>
        <StyledLink to='/reservation'>RESERVATION</StyledLink>

        {currentUser ? (
          <CurrentUserContainer
            onClick={() => dispatch(toggleUserDropdownHidden())}
          >
            <div style={{ display: 'flex' }}>
              <CurrentUserGreetingContainer>
                {' '}
                <span>Welcome back,</span>
                <span>
                  {currentUser.firstName} {currentUser.lastName}
                </span>
              </CurrentUserGreetingContainer>
              <DropdownIcon />
            </div>
            {isUserDropdownHidden ? null : (
              <CurrentUserOptionsContainer>
                <UserOption>
                  <Link to='/settings'>Settings</Link>
                </UserOption>
                <UserOption onClick={() => dispatch(logoutStartAsync())}>
                  Logout
                </UserOption>
              </CurrentUserOptionsContainer>
            )}
          </CurrentUserContainer>
        ) : (
          <LoginContainer onClick={toggleLogin} to='/about'>
            LOGIN
          </LoginContainer>
        )}
      </LinksContainer>
      <CartIcon />
      {cartHidden ? null : <CartDropdown />}
      {isLoginHidden || currentUser ? null : <LoginDropdown />}
      {isUserDropdownHidden ? null : <UserDropdown />}
    </HeaderContainer>
  );
};

export default Header;
