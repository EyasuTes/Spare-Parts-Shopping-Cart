import { Link } from "react-router-dom";
import MyImages from './Images/Cart2.PNG'
import './index.css'
const Cart = (props) => {
  console.log(props.objects)
  return (
    <>
      <div className="Home__Header">
            <h1 className="Home__h1">Book Store</h1>
            <div className="Home__Pages">
                <Link to='/' className="Home__HomeLink">Home</Link>
                <Link to='/Shop' className="Home__ShopLink" >Shop</Link>
                <Link to='/Cart' className="Home__CartLink"><img src={MyImages} className="Home__CartImage" alt="Cart" /></Link>
            </div>
        </div>

        <div className="Default__ItemsContainer">
                {props.objects.map(current => (
                <div className="Default__Items" >
                    <div>
                        <img src={current.image} alt="" />
                        <div className="Default__ItemsTitle">{current.title}</div>
                        <div className="Default__Cost">${current.price}</div>
                        <div>{current.cart}</div>
                        
                      
                       
                    </div>
                </div>
                ))}
            </div>
      
    </>
  );
};

export default Cart;