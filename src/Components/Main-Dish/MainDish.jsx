// MainDish.js

import './MainDish.css';
import mainDish from '../Data'; 
import Foods from '../Foods/Foods';

const MainDish = () => {
  
  
  return (
    <>
      <div className='main-dish'>
        {mainDish.map((object, i) => (
        <Foods  key={object.id} index={i} id={object.id} name={object.name} image={object.image} price={object.price} quantie ={1}/>
        ))}
      </div>
    </>
  );
};

export default MainDish;
