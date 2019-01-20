import React, { Component } from 'react';
import Title from '../Title/Title';
import CartColumns from './CartColumns/CartColumns';
import EmptyCart from './EmptyCart/EmptyCart';
import { ProductConsumer } from '../../context/context';
import CartList from './CartList/CartList';
import CartTotals from './CartTotals/CartTotals';

class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <EmptyCart />
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
