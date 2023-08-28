import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './index.css'
import myImage from './images/BookProfile.webp'


const Home = (props) => {
  return (
    <div>
        
        <Outlet />
        <img src={myImage} alt="books image" className="Default__ImageProfile"/>
            <h1 className="Default__h1">Featured Items</h1>
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
    </div>
  );
};

export default Home;