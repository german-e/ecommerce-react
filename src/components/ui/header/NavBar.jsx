import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import CartIcon from "../../CartIcon";

const NavBar = () => {

    const authContext = useContext(AuthContext);
    

    function handleShow(){
        console.log('entro en handleShow')
        authContext.setShowModalLogin(true);
    }


    return ( 
    
        <div className="container-fluid border-bottom pb-2">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 navbar-brand me-5 fw-bolder">
                ECommerce
                </a>

                <ul class="nav col-12 col-lg-auto  mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link text-dark px-2 active">Home</a></li>
                <li><a href="#" class="nav-link text-dark px-2">Shop</a></li>
                <li><a href="#" class="nav-link text-dark px-2">Men</a></li>
                <li><a href="#" class="nav-link text-dark px-2">Woman</a></li>
                <li><a href="#" class="nav-link text-dark px-2">Others</a></li>
                <li><a href="#" class="nav-link text-dark px-2">About</a></li>
                </ul>

                <form class="col-12 col-lg-4 mb-3 mb-lg-0 me-lg-3 mx-3 justify-content-start" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                </form>

                <div>
                    <CartIcon cartItem={3} />
                    
                    <Link  onClick={handleShow} to="/auth/login" className="btn btn-link text-decoration-none me-2">Login</Link>
                    <button type="button" class="btn btn-link">Sign up</button>
                </div>
            </div>
        </div>
    
     );
}
 
export default NavBar;