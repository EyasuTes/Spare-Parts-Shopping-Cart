import { Link } from "react-router-dom";
import myImage from './images/BookProfile.webp'




const DefaultShop = (props) => {
    
    return (
        <>
            
            
            <div className="Default__ItemsContainer">
                {props.jewelery.map(current => (
                <div className="Default__Items" >
                    <div>
                        <img src={current.image} alt="" />
                        <div className="Default__ItemsTitle">{current.title}</div>
                        <div className="Default__Cost">${current.price}</div>
                        
                      
                       
                    </div>
                </div>
                ))}
            </div>
            
        </>
    );
    

  };
  
  export default DefaultShop;