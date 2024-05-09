import React,{useState} from 'react';
import './App.css'
import Nav from "./Nav";
import ItemPage from './ItemPage.js';
import {items} from './static-data.js';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState({});
  const addToCart=(item) =>{
    setCart(prevCart => [...prevCart, item])
  };
  return(
    <div className="App">
      <Nav
      activeTab={activeTab}
      onTabChange={setActiveTab}
      />
      <main className='App-content'>
        <Content tab={activeTab} onAddToCart={addToCart}/>
      </main>
    </div>
  )
}
const Content = ({tab,onAddToCart}) => {
switch(tab){
  case 'items':
    return <ItemPage items={items} onAddToCart={onAddToCart}/>
    case 'cart':
      return <span>The Cart</span>
      default :
      break;
}

}

export default App;