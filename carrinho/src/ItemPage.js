import React from 'react';
import Proptypes from 'prop-types';
import './ItemPage.css'
import Item from './Item';

function ItemPage({items,onAddToCart}){
return(
  <ul className='ItemPage-items'>
    {items.map(item=>
  <li key={item.id} className='ItemPage-item'>
    <Item item={item} onAddToCart={()=>onAddToCart(item)}/>
  </li>
)}
  </ul>
);
}

ItemPage.proptype = {
  items:Proptypes.array.isRequired
};

export default ItemPage;