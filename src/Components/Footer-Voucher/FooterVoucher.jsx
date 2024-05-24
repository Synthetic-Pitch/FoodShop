import React, { useContext, useRef, useEffect } from 'react';
import './FooterVoucher.css';
import { Mycontext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const Voucher = () => {
  const { voucherCheck,setVoucherCheck, VoucherAvail } = useContext(Mycontext);
  const modalRef = useRef();
  const modalNoVouch = useRef();
  const toVoucher =useNavigate()

  const handleRender = () => {
    if (VoucherAvail.length > 0) {
      modalRef.current.showModal(); // Render Modal Vouchers
    } else {
      modalNoVouch.current.showModal(); // Render Modal NoVoucher
    }
  };
  
  const DirectToVoucher=()=>{
    toVoucher('/voucher')
  }
  const closeModal = () => {
    modalRef.current.close();
    modalNoVouch.current.close();
  };
  const checkVoucher=()=>{
    setVoucherCheck(true)
    modalRef.current.close();
  }
  const handleBackdropClick = (event) => {
    if (event.target === modalRef.current) {
      modalRef.current.classList.remove('scale-animation'); // Remove class to reset animation
      void modalRef.current.offsetWidth; // Trigger reflow
      modalRef.current.classList.add('scale-animation'); // Add class to start animation
    } else if (event.target === modalNoVouch.current) {
      modalNoVouch.current.classList.remove('scale-animation'); // Remove class to reset animation
      void modalNoVouch.current.offsetWidth; // Trigger reflow
      modalNoVouch.current.classList.add('scale-animation'); // Add class to start animation
    }
  };

  useEffect(() => {
    const modalElementRef = modalRef.current;
    const modalElementNoVouch = modalNoVouch.current;
    
    modalElementRef.addEventListener('click', handleBackdropClick);
    modalElementNoVouch.addEventListener('click', handleBackdropClick);

    return () => {
      modalElementRef.removeEventListener('click', handleBackdropClick);
      modalElementNoVouch.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return (
    <div className='voucher'>
      <div className='use-voucher' onClick={handleRender}>
        USE VOUCHER | <code>{voucherCheck ? '✓' : ''}</code>
      </div>

      <dialog ref={modalRef} className='voucher-main-container'>
        <button className='voucher-main-container-ekis' onClick={closeModal}>x</button>
        <div className='voucher-main-container-items'>
          {
            VoucherAvail.map((item,index)=>(
              <div className='vouchers-item' key={index}>
                <img src={item.voucherImage} alt="s" />
                <button onClick={checkVoucher}>use</button>
              </div>
            ))
          }
        </div>
      </dialog>
      
      <dialog ref={modalNoVouch} className='no-voucher-text'>
        <button className='no-voucher-text-ekis' onClick={closeModal}>X</button>
        <div className='no-voucher-text-text'>You don't have a voucher!</div>
        <button onClick={DirectToVoucher} className='no-voucher-text-claim'>Claim now</button>
      </dialog>
    </div>
  );
};

export default Voucher;
