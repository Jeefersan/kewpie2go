import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  CartContainer,
  CheckoutButton,
  ClearCartButton,
  CartFooter,
} from './cart-dropdown.styles';

import CartHeader from './cart-header/cart-header.component';
import CartItem from './cart-item/cart-item.component';

const CartDropdown = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const history = useHistory();

  const totalPrice = () =>
    cartItems.reduce(
      (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
      0
    );

  const handleClick = () => history.push('/checkout');

  return (
    <CartContainer>
      <CartHeader totalPrice={totalPrice()} />
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <CartFooter>
        {cartItems.length === 0 ? (
          'Your cart is empty.'
        ) : (
          <CheckoutButton onClick={() => handleClick}>checkout</CheckoutButton>
        )}
      </CartFooter>
    </CartContainer>
  );
};

export default CartDropdown;
