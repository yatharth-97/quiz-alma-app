import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const CardComp = ({ title, image, path }) => {
  return (
    <div className='cardComp card-flex'>
      <NavLink to={path} className='cardHead '>
        <h1>{title}</h1>
      </NavLink>

      <div className='card-img'>
        <img src={image} alt='background-images' />
      </div>
    </div>
  );
};

export default CardComp;
