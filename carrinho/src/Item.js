import React from "react";
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({item,children}) =>{
  return(
<div className="Item">

<div className="Item-left">
  <div className="Item-image"></div>
  <div className="Item-title">
    {item.name}
  </div>
  <div className="Item-description">
    {item.description}
  </div>
</div>

<div className="Item-right">
    <div className="Item-Price">
      ${item.price}
    </div>
    {children}
</div>
</div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;