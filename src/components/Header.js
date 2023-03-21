import { useState, useContext } from "react";
import Logo from "../assets/img/Logo.png";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";
import NewContext from "../utils/NewContext";
import {useSelector} from "react-redux";
import store from "../utils/store";


const Title = () => (<a href="/">
    <img 
        className= "h-28 p-2"
        alt="logo"
        src={Logo} />
    </a>);

export default HeaderComponent = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    const {name} = useContext(NewContext);
    
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    return (<div className="flex justify-between bg-green-100 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
        <Title />
        <div className='nav-items'>
            <ul className="flex py-10">
                <li className="px-2"><Link to="/">Home</Link></li> 
                <li className="px-2"><Link to="/about">About</Link></li>
                <li className="px-2"><Link to="/contact">Contact</Link></li>
                <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                <li className="px-2"><Link to="/cart">Cart - {cartItems.length} Items</Link></li>
            </ul>
        </div>
        <span className="p-10 font-bold text-red-900">{user.name}</span>
        <span>{name}</span>
        <div className="py-10">
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>: <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    </div>);
};