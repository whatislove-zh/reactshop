import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Order from "./order";

const showOrder = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete} />
      ))}
      <p className="summa">
        Всьго товарів на суму: {Math.floor(summa * 100) / 100} $
      </p>
    </div>
  );
};

const showContact = () => {
  return (
    <div className="contacts">
      <p>
        Контактний номер:{" "}
        <a href="tel: +380996863705" target="_self">
          +380996863705
        </a>
      </p>
      <p>
        Email: <span>vladislavfrontdev@gmail.com</span>
      </p>
      <p>
        <a href="https://github.com/whatislove-zh/reactshop">
          Наш репозиторій у github
        </a>
      </p>
      <p>
        <a href="https://t.me/vladFrontEndDev">
          Натисніть щоб написати нам через Telegram
        </a>
      </p>
    </div>
  );
};

const showNothing = () => {
  return <div className="empty">Кошик пустий =(</div>;
};
const showLogin = () => {
  return (
    <div className="timeLimitInfo">
      <p>Нажаль поки що кабінет недоступний.</p>
    </div>
  );
};
const showAbout = () => {
  return (
    <div className="timeLimitInfo about">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false);
  let [contactOpen, setContactOpen] = useState(false);
  let [loginOpen, setLoginOpen] = useState(false);
  let [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header>
      <span className="logo">Green Shop</span>
      <ul className="nav">
        
        <li onClick={() => {
          setAboutOpen((aboutOpen = !aboutOpen))
          setContactOpen((contactOpen = false))
          setLoginOpen((loginOpen = false))
          setCardOpen((cardOpen = false))
        }}>Про нас</li>

        <li onClick={() => {setAboutOpen((aboutOpen = false))
          setContactOpen((contactOpen = !contactOpen))
          setLoginOpen((loginOpen = false))
          setCardOpen((cardOpen = false))
          }}>Контакти </li>

        <li onClick={() => {setAboutOpen((aboutOpen = false))
          setContactOpen((contactOpen = false))
          setLoginOpen((loginOpen = !loginOpen))
          setCardOpen((cardOpen = false))}}>Кабінет</li>

      </ul>
      
      <FiShoppingCart
        onClick={() => {
          setAboutOpen((aboutOpen = false))
          setContactOpen((contactOpen = false))
          setLoginOpen((loginOpen = false))
          setCardOpen((cardOpen = !cardOpen))
        }}
        className={`shop-card-button ${cardOpen && "active"}`}
      />

      {contactOpen && showContact()}
      {loginOpen && showLogin()}
      {aboutOpen && showAbout()}

      {cardOpen && (
        <div className="shop-card">
          {props.orders.length > 0 ? showOrder(props) : showNothing()}
        </div>
      )}

      <div className="presentation"></div>
    </header>
  );
}
