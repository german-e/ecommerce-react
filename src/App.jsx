import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EditProduct from "./pages/EditProduct";

import ProductsList from "./pages/ProductsList";
import ProductImages from "./components/ProductImages";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetail from "./pages/ProductDetail";
import CartDetail from "./pages/CartDetail";
import ProductCreate from "./pages/ProductCreate";
import { CartContext } from "./context/CartContext";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

let user = "german";

function App() {
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    let myCartStored = localStorage.getItem("myCart");

    console.log("My Cart Store", myCartStored);
    if (myCartStored) {
      setMyCart(JSON.parse(myCartStored));
    }


  }, []);

  function deleteItemCart(){

  }

  function addProductToCart(cartItem) {
    console.log("Cart Items en handleAddProductToCart", cartItem);


    myCart.forEach( item => {
      if (item.produc.id === cartItem.produc.id){
        item.quantity = cartItem.quantity;        
      }
    })

    
    

    

    if (searchItem) {
      searchItem.quantity = cartItem.quantity;
      setMyCart([...myCart, searchItem]);
    }

    setMyCart([...myCart, cartItem]);

    localStorage.setItem("myCart", JSON.stringify(myCart));
  }

  const cartValue = {
    myCart,
    addProductToCart,
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartContext.Provider value={cartValue}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="auth/register" element={<Register />} />
              <Route path="auth/login" element={<Login />} />
              <Route path="categories" element={<Login />} />

              <Route path="products" element={<ProductsList />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="cart-detail" element={<CartDetail />} />

              <Route
                path="products/create"
                element={
                  <AdminRequired>
                    <ProductCreate />
                  </AdminRequired>
                }
              />

              <Route
                path="products/edit/:id"
                element={
                  <AdminRequired>
                    <EditProduct />
                  </AdminRequired>
                }
              />
            </Route>
          </Routes>
        </CartContext.Provider>
      </QueryClientProvider>
    </>
  );
}

/**
 *
 */
const AdminRequired = ({ children }) => {
  const currentLocation = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: currentLocation }} replace />;
  }

  return children;
};

export default App;
