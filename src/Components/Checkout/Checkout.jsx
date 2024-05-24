import React, { useRef, useContext } from 'react';
import { Mycontext } from '../../Context/Context';
import './Checkout.css';

const Checkout = () => {
  const { paymentCheck } = useContext(Mycontext);

  const CheckRef = useRef();
  const IncompleteRef = useRef();

  const checkoutAuth = () => {
    if (paymentCheck) {
      CheckRef.current.showModal();
      setTimeout(() => {
        CheckRef.current.close();
      }, 1500); // Close the dialog after 5 seconds
    } else {
      IncompleteRef.current.showModal();
    }
  };
  
  const close = () => {
    IncompleteRef.current.close();
  };

  return (
    <>
      <div onClick={checkoutAuth} className='checkout'>
        <div>Checkout</div>
      </div>

      <dialog ref={CheckRef} className='succesfully'>
        Order successfully!
      </dialog>

      <dialog ref={IncompleteRef} className='incomplete'>
        Please choose payment method
        <button onClick={close}>Okay</button>
      </dialog>
    </>
  );
};

export default Checkout;
