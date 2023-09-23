import { Link } from "react-router-dom";
import MyImages from './Images/Cart2.PNG'
import { Outlet, useParams } from "react-router-dom";
import DefaultShop from "./DefaultShop";
import { useState } from "react";
const Shop = (props) => {
    const {name: initalName}=useParams();
    const[name, setName]= useState(initalName);
    
    console.log(props.jewelery)
    function handleClick(event){
        const clickedDiv = event.currentTarget;
        const itemsTitle = clickedDiv.querySelector(".Shop__ItemsTitle");
        //const itemsCost = clickedDiv.querySelector(".Shop__Cost");
        setName(itemsTitle.textContent)
        
    }
    function handleState(){
        setName('')
    }
    function handleCart(item){
        props.cartObjects(item)
    }
  return (
    <div>
        <div className="Home__Header">
            <h1 className="Home__h1">Book Store</h1>
            <div className="Home__Pages">
                <Link to='/' className="Home__HomeLink">Home</Link>
                <Link to='/Shop' className="Home__ShopLink" onClick={handleState}>Shop</Link>
                <Link to='/Cart' className="Home__CartLink"><img src={MyImages} className="Home__CartImage" alt="Cart" /></Link>
            </div>
        </div> 

        
            {name ? <DefaultShop handleCart={handleCart} name={name} jewelery={props.jewelery}/> : 
                <div className="Shop__ItemsContainer">
                    {props.jewelery.map(current => (
                    <div className="Shop__Items" key={current.id}>
                        <div onClick={handleClick}>
                            <img src={current.image} alt="Image" />
                            <div className="Shop__ItemsTitle">{current.title}</div>
                            <div className="Shop__Cost">${current.price}</div>
                            
                        
                        
                        </div>
                    </div>
                    ))}
                </div>
            }
    </div>
  );
};

export default Shop;