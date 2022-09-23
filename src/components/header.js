import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import Order from './order';

const showOrder = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className='summa'>Всьго товарів на суму: {Math.floor(summa*100)/100} $</p>
    </div>
  )
}

const showNothing = () => {
  return(<div className='empty'>Кошик пустий =(</div>)
}

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false)

  return (<header>
    <span className='logo'>Green Shop</span>
    <ul className='nav'>
        <li>Про нас</li>
        <li>Контакти</li>
        <li>Кабінет</li>
        
    </ul>
    <FiShoppingCart onClick={() => {setCardOpen(cardOpen = !cardOpen)}} className={`shop-card-button ${cardOpen && 'active'}`}/>
    
    {cardOpen && (<div className={`shop-card ${cardOpen && "animation"}`}>
      {props.orders.length > 0 ? showOrder(props) : showNothing()}
    </div>)}

    <div className='presentation'></div>
    </header>
  )
}
