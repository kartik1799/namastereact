import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

    const [login,setLogin]=useState(false);
    const context=useContext(UserContext);
    const selector=useSelector((store)=>store.cart.items);

    const isLogin=()=>{
        setLogin(!login)
    }

    return (
        <div className="flex justify-between sticky z-50 top-0 w-[100%] items-center border border-border-light bg-gradient-to-r from-bg-from to-bg-to">
            <div className="logo-container">
                <img className="w-24 rounded-full" src={LOGO_URL} alt="header" />
            </div>
            <div className="mr-7 flex gap-8 items-center">
                <ul className="flex gap-8 font-bold text-lg">
                    <li className="cursor-pointer font-franklin "><Link to="/">Home</Link></li>
                    <li className="cursor-pointer font-franklin"><Link to="/about">About Us</Link></li>
                    <li className="cursor-pointer font-franklin"><Link to="/contact">Contact Us</Link></li>
                    <li className="cursor-pointer font-franklin"><Link to="/grocery">Grocery</Link></li>
                    <li className="cursor-pointer font-franklin"><Link to="/cart">Cart ({selector.length})</Link></li>
                    <li className="cursor-pointer font-franklin">{context.loggedInUser}</li>
                </ul>
                <button onClick={isLogin} className="border-0 bg-blue-200 text-white rounded-2xl px-4 py-2 cursor-pointer">{!login?"Login":"Logout"}</button>
            </div>
        </div>
    )
}

export default Header;