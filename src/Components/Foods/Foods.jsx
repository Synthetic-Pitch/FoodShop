import './Food.css';
import { Mycontext } from '../../Context/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Foods = (props) => {

  const navigate = useNavigate()
  const { cart, setCart } = useContext(Mycontext);
  
  let order = {
    price:props.price,
    name:props.name,
    image:props.image,
    id:props.id,
    fixPrice:props.price,
    quantie:props.quantie
  }
  
  const orderExists = cart.some(item => 
    item.price === order.price && 
    item.name === order.name && 
    item.image === order.image
  );
  
  const print = () => {
    if(orderExists){
      alert('already been in a cart!')
      
      navigate('/cart')
    }else{
      setCart(prevCart => [...prevCart, order]);
      navigate('/cart')
    }
  };
  
  return (  
    <div className='foods'>
      <div className='price'> &#8369; {props.price}</div>
      <div className='product-image'>
        <img src={props.image} alt='sd' />
      </div>
      <h2>{props.name}</h2>
      <button onClick={print}>order now</button>
    </div>
  );
};

export default Foods;