import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const CartIcon = ({ cartItem }) => {
  //const [cart, setCart] = useState([cartItem]);

  const {myCartItem} = useContext(CartContext);

  return (
    <Link to="/cart-detail" className="btn position-relative text-primary">
      <i className="fas fa-shopping-cart"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger mt-2 text-center">
        <small>{myCartItem.length}</small>
        <span className="visually-hidden">Cart items</span>
      </span>
    </Link>
  );
};

export default CartIcon;
