import { useState } from "react";
import Logo from "../assets/img/Logo.png";
import {Link} from "react-router-dom";


const Title = () => (<a href="/">
    <img 
        className= "h-28 p-2"
        alt="logo"
        src={Logo} />
    </a>);

export default HeaderComponent = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (<div className="flex justify-between bg-green-100 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
        <Title />
        <div className='nav-items'>
            <ul className="flex py-10">
                <li className="px-2"><Link to="/">Home</Link></li> 
                <li className="px-2"><Link to="/about">About</Link></li>
                <li className="px-2"><Link to="/contact">Contact</Link></li>
                <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                <li className="px-2">Cart</li>
            </ul>
        </div>
        <div className="py-10">
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>: <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </div>
    </div>);
};