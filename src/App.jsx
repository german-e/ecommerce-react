

import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import EditProduct from './pages/EditProduct';

import ProductsList from './pages/ProductsList';
import ProductImages from './components/ProductImages';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetail from './pages/ProductDetail';
import CartDetail from './pages/CartDetail';
import ProductCreate from './pages/ProductCreate';


const queryClient = new QueryClient();

let user = "german";

function App() {
  
  
  return (
    <>
    

    <QueryClientProvider client={queryClient}>

    <Routes>
      
      <Route path='/' element={<Layout />}>
         <Route index element={<Home />} />     
        
        <Route path='auth/register' element={<Register />} />
        <Route path='auth/login' element={<Login />} />
        <Route path='products' element={<ProductsList />} />
        <Route path='categories' element={<Login />} />
        <Route path='product/:id' element={<ProductDetail />} />
        <Route path='cart-detail' element={<CartDetail />} />
        

        <Route path='products/create' element={
            <AdminRequired>
              <ProductCreate />
            </AdminRequired>} />

        <Route path='products/edit/:id' element={
          <AdminRequired>
            <EditProduct />
          </AdminRequired>
        } />
        
        
      </Route>
      
    </Routes>
   
    </QueryClientProvider>
      
    </>
  )
}

/**
 * 
 */
const AdminRequired = ({children}) => {
  const currentLocation = useLocation();
  if (!user) {
    return <Navigate to="/login" state={ {from: currentLocation }} replace />
  }

  return children;
  
}

export default App
