import { Link, useActionData } from "react-router-dom";
import myImage from './images/BookProfile.webp'

import { useState } from "react";


const DefaultShop = (props) => {
    console.log(props.jewelery)
    const targetTitle=props.name;
    const dataArray =props.jewelery;
    const foundObject= dataArray.find(obj=>obj.title === targetTitle)
    
    const [inputvalue, setInputvalue]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        const addObject={...foundObject, cart : inputvalue}
        props.handleCart(addObject)
    }
    return (
        <>
            
            
            <div className="DefaultShop__item">
                <img src={foundObject.image} alt="" className="DefaultShop__image"/>
                <div className="DefaultShop__title">{foundObject.title}</div>
                <div className="DefaultShop__price">{foundObject.price}</div>
                <form onSubmit={handleSubmit} className="DefaultShop__form">
                    <div className="DefaultShop__input">
                        <div>-</div>
                        <input type="number" value={inputvalue} onChange={e=>setInputvalue(e.target.value)}/>
                        <div>+</div>
                    </div>
                    <button type="submit">ADD TO CART</button>
                    
                </form>
            </div>
            
        </>
    );
    

  };
  
  export default DefaultShop;