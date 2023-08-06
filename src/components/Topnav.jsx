import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Topnav = () => {
  const { cart }  = useSelector((state) => state.cart);
  return (
    <>
      <nav className="nav-container">
        <div className="nav-inner">
          <div className="flex-cnt">
            <Link to="/" className="link">
              <div className="logo">
                Ecom<span>Store</span>
              </div>
            </Link>
          </div>
          <ul className="menus">
            <Link to="/" className="link">
              <li>Products</li>
            </Link>
            <Link to="/cart" className="link">
              <li className="cart-icon">
                {cart.length ? (
                  <div className="cart-count">{cart.length}</div>
                ) : null}
                <AiOutlineShoppingCart />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Topnav;
