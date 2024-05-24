import React, { useState, useContext, useRef } from 'react';
import './Voucher.css';
import { Mycontext } from '../../Context/Context';

const Voucher = () => {
  const { VouchersClaimed, setVouchersClaimed, setVoucherAvail } = useContext(Mycontext);


  const handleClaim = (index) => {
    const updatedVouchersClaimed = [...VouchersClaimed];
    const removedVoucher = updatedVouchersClaimed.splice(index, 1)[0];
    setVouchersClaimed(updatedVouchersClaimed);
    setVoucherAvail((prevVoucherAvail) => [...prevVoucherAvail, removedVoucher]);
   
  };
  
 

 
  return (
    <div>
      <div className='text'>Vouchers to claim</div>
      
      <div>
        {VouchersClaimed.map((item, index) => (
          <div className='vouchers' key={item.id}>
            <img src={item.voucherImage} alt="img" />
            <button onClick={() => handleClaim(index)}>claim</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Voucher;
