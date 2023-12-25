import React, { useState } from "react";
import { Link } from "react-router-dom";


const CartIcon = ({ cartItem }) => {
  //const [cart, setCart] = useState([cartItem]);

  return (
    <Link to="/cart-detail" class="btn position-relative text-primary">
      <i class="fas fa-shopping-cart"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger mt-2">
        {cartItem}
        <span class="visually-hidden">Cart items</span>
      </span>
    </Link>
  );
};

export default CartIcon;
