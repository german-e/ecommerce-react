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
import { useContext, useEffect, useState } from "react";
import PageNotFound from "./pages/PageNotFound";
import { AuthContext } from "./context/AuthContext";

import { useAuth } from "./hooks/useAuth";

const queryClient = new QueryClient();

function App() {
  const [myCartItem, setMyCartItem] = useState([]);

  useEffect(() => {
    const itemStored = JSON.parse(localStorage.getItem("myCart"));

    if (!itemStored) {
      setMyCartItem(itemStored);
    }
  }, []);

  useEffect(() => {
    if (myCartItem) localStorage.setItem("myCart", JSON.stringify(myCartItem));
  }, [myCartItem]);

  function deleteItemCart(productId) {
    let newItems = myCartItem.filter((item) => item.product.id != productId);

    setMyCartItem(newItems);
  }

  function addProductToCart(cartItem) {
    console.log("Func AddProductToCart");

    let isItemStorage =
      myCartItem &&
      myCartItem.find((item) => item.product.id === cartItem.product.id);

    console.log("item Store find ", isItemStorage);

    if (isItemStorage) {
      isItemStorage.quantity += cartItem.quantity;

      let itemsInCart = myCartItem.filter(
        (item) => item.product.id != cartItem.product.id
      );
      console.log("new Data con filter ", itemsInCart);

      itemsInCart.push(isItemStorage);

      setMyCartItem(itemsInCart);
    } else {
      console.log("entro en el else");
      setMyCartItem([...myCartItem, cartItem]);
    }

    // localStorage.setItem("myCart", JSON.stringify(myCartItem));
  }

  const cartValue = {
    myCartItem,
    addProductToCart,
    deleteItemCart,
  };

  const { user, login, logout, addUser } = useAuth();

  return (
    <>
            
      <AuthContext.Provider value={{ user, addUser }}>
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
                <Route path="*" element={<PageNotFound />} />
              </Route>
          </Routes>
        </CartContext.Provider>
      </AuthContext.Provider>
            
    </>
  );
}

/**
 *
 */
const AdminRequired = ({ children }) => {
  const { user } = useContext(AuthContext);

  const currentLocation = useLocation();

  console.log("Estoy en AdminRequired ", user);

  if (!user) {
    return (
      <Navigate to="/auth/login" state={{ from: currentLocation }} replace />
    );
  }

  return children;
};

export default App;
