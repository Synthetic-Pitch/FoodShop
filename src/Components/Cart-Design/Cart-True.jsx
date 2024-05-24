import React, { useEffect, useState, useContext } from 'react';
import './Cart.css';
import { Mycontext } from '../../Context/Context';

const CartTrue = ({ name, price, image, id, fixPrice, quantie }) => {
  const { cart, setCart } = useContext(Mycontext);
  const [quantity, setQuantity] = useState(quantie);
  const [itemPrice, setItemPrice] = useState(fixPrice);

  const updateCartItem = () => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantie: quantity, fixPrice: itemPrice } : item
      )
    );
  };

  useEffect(() => {
    updateCartItem();
    // Only trigger update when quantity or itemPrice changes
  }, [quantity, itemPrice]);

  const deleteItem = () => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const handleAddition = () => {
    if (quantity < 20) {
      setQuantity(prevQuantity => prevQuantity + 1);
      setItemPrice(prevItemPrice => prevItemPrice + price);
    }
  };

  const handleSubtraction = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      setItemPrice(prevItemPrice => prevItemPrice - price);
    }
  };
  
  return (
    <div className='order-container'>
      <div className='quantity'>
        <button onClick={handleAddition}>+</button>
        <span>{quantity}</span>
        <button onClick={handleSubtraction}>−</button>
      </div>
      <div className="image">
        <img src={image} alt="food" />
      </div>
      <div className="info">
        <div onClick={deleteItem}><button>X</button></div>
        <h3><p>{name}</p></h3>
        <span>&#8369;{itemPrice}</span>
      </div>
    </div>
  );
};

export default CartTrue;
