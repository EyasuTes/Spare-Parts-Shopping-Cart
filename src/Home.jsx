import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './index.css'
import MyImages from './Images/Cart2.PNG'

const Home = () => {
  return (
    <div>
        <div className="Home__Header">
            <h1 className="Home__h1">Book Store</h1>
            <div className="Home__Pages">
                <Link to='/' className="Home__HomeLink">Home</Link>
                <Link to='Shop' className="Home__ShopLink">Shop</Link>
                <Link to='Cart' className="Home__CartLink"><img src={MyImages} className="Home__CartImage" alt="Cart" /></Link>
            </div>
        </div>
        <Outlet />
    </div>
  );
};

export default Home;