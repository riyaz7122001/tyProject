import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="headerImage"
        />
      </NavLink>
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Enter Product Name..."
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <NavLink to={!user && "/Login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello,
              {!user ? "Guest" : user.email.slice(0, 18)}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign-Out" : "Sign-In"}
            </span>
          </div>
        </NavLink>
        <NavLink to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </NavLink>
        <div className="header_option">
          <span className="header_optionLineOne">Your </span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <NavLink to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {basket ? basket.length : 0}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
