import React, { useEffect, useState } from 'react';
import './CartFooter.css';
import { Mycontext } from '../../Context/Context';
import { useContext } from 'react';
import Payment from '../Payment-method/Payment';
import Voucher from '../Footer-Voucher/FooterVoucher';
import Checkout from '../Checkout/Checkout';
const CartFooter = () => {
  
  const { cart,totalAmount, setTotalAmount } = useContext(Mycontext);
  // changed TotalAmount to camelCase
  
  useEffect(() => {
    let totalFixPrice = cart.reduce((sum, item) => sum + item.fixPrice, 0);
    setTotalAmount(totalFixPrice);
  },[cart]);
  
  // dependency array with totalAmount
  
  return (
    <div className='cart-footer'>
      <div className='total-amount'>
        <span>Subtotal&nbsp;&nbsp;</span>
        <abbr>{totalAmount}</abbr>
      </div>
      <hr />
      <Payment/>
      <Voucher/>
      <Checkout/>
    </div>
  );
};

export default CartFooter;
