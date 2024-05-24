import React from 'react'
import desert from '../Desert'
import Foods from '../Foods/Foods'
import './Desert-Component.css'

const  DesertComponent = () => {

  return (
    <>
      <div className='desert'>
        {desert.map((object, i) => (
        <Foods  key={i} index={i} id={object.id} name={object.name} image={object.image} price={object.price} quantie ={1}/>
        ))}
      </div>
    </>
  )
}

export default DesertComponent
