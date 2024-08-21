import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import "../index.css";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnnameReact, setbtnnameReact] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  const { loggedinUser } = useContext(UserContext);
  
  // Selector - > A react hook
  // We are subscribing to the store using selector. 
  // We have now subscribed to the cart. 
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg p sm:bg-yel741low-200 lg:bg-green-400">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} /> 
      </div>
      <div className="flex items-center">
        
        <ul className="flex p-5 m-4  ">
          <li className="px-4"> Status : { OnlineStatus ? "Online" : "Offline"}</li>
          <li className="px-4">
            <Link to ="/">Home</Link>
          </li >
          <li className="px-4">
           <Link to="/about">About Us </Link> 
          </li>
          <li className="px-4">
           <Link to="contact">Contact Us</Link>  
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery </Link> 
          </li>
          <li className="px-4 font-bold text-xl">
           <Link to="/cart"> 🛒({cartItems.length})</Link> 
          </li>
          <button className="login-button px-4" onClick={() => {
            // We are using the ternary operator for the Login and Logout Toggle. 
            btnnameReact === "Login" ? setbtnnameReact("Logout"): setbtnnameReact("Login");
          }}>{btnnameReact}</button>
          <li>{ loggedinUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;