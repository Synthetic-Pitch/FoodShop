import React, {  useRef, useState } from 'react'
import './Payment.css'
import gcash from '../../ICONS/gcash.png'
import paypal from '../../ICONS/paypal.png'
import cod from '../../ICONS/cod.png'
import visa from '../../ICONS/visa.png'
import mastercard from '../../ICONS/mastercard.png'
import amazon from '../../ICONS/amazon.png'
import { Mycontext } from '../../Context/Context'
import { useContext } from 'react'

const Payment = () => {
  const { paymentCheck,setPaymentCheck } = useContext(Mycontext);
  const [mode,setMode] =useState()
  const PaymentRef = useRef()

  const handleRendender=()=>{
    PaymentRef.current.showModal()
  }
  
  const handlePaymentclick=(e)=>{
   let modes = e
   setMode(modes)
   setPaymentCheck(true)
   PaymentRef.current.close()
  }
  
  return (
    <>
     
      <dialog ref={PaymentRef} className= 'payment-icons'>
          <ul>
            <li onClick={()=>{handlePaymentclick('gcash')}}><img src={gcash} alt="gcash" /></li>
            <li onClick={()=>{handlePaymentclick('paypal')}}><img src={paypal} alt="paypal" /></li>
            <li onClick={()=>{handlePaymentclick('cash on delivery')}}><img src={cod} alt="cod" /></li>
            <li onClick={()=>{handlePaymentclick('visa')}} ><img src={visa} alt="visa" /></li>
            <li onClick={()=>{handlePaymentclick('mastercard')}}><img src={mastercard} alt="mastercard" /></li>
            <li onClick={()=>{handlePaymentclick('amazon')}}><img src={amazon} alt="amazon" /></li>
          </ul>
      </dialog>
      
      <div onClick={handleRendender} className='payment'>
        <div>ADD PAYMENT METHOD | <code>{paymentCheck ? '✓':''}</code></div>
      </div>
      
      {mode && <div className='payment-text'>{}</div> }
      
    </>
  )
}

export default Payment
