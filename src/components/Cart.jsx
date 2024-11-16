import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './css/Cart.css';

function Cart() {
  const { cartItem, setCartItems } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handelIncrement = (item) => {
    setCartItems(prev =>
      prev.map(cartItem =>
        cartItem.id === item.id && cartItem.count < 10
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      )
    );
  };

  const handelDecrement = (item) => {
    setCartItems(prev =>
      prev.map(cartItem =>
        cartItem.id === item.id && cartItem.count > 1
          ? { ...cartItem, count: cartItem.count - 1 }
          : cartItem
      )
    );
  };

  const removeItem = (item) => {
    setCartItems((prev) => prev.filter(element => element.id !== item.id));
  };

  return (
    <>
      <section className='cart'>
        {cartItem.length === 0 && <h1 className='empty'>Cart is Empty</h1>}
        {cartItem.map(item => (
          <div className='item' key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <h5>{item.title}</h5>
            <div>
              <button onClick={() => handelIncrement(item)}>+</button>
              <b>{item.count}</b>
              <button onClick={() => handelDecrement(item)}>-</button>
            </div>
            <h3 className='child'>{item.price * item.count}$</h3>
            <button className='remove-btn' onClick={() => removeItem(item)}>remove</button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Cart;
