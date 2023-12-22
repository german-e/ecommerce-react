

import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Products from './components/ProductCard';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';

import {user} from './data/user';
import ProductsList from './pages/ProductsList';
import ProductImages from './components/ProductImages';


function App() {
  
  
  return (
    <>
    
    <Routes>
      
      <Route path='/' element={<Layout />}>
         <Route index element={<Home />} />     
        
        <Route path='auth/register' element={<Register />} />
        <Route path='auth/login' element={<Login />} />
        <Route path='products' element={<ProductsList />} />
        <Route path='categories' element={<Login />} />
        <Route path='products/:id' element={<ProductImages />} />
        

        <Route path='products/create' element={
            <AdminRequired>
              <CreateProduct />
            </AdminRequired>} />

        <Route path='products/edit/:id' element={
          <AdminRequired>
            <EditProduct />
          </AdminRequired>
        } />
        
        
      </Route>
      
    </Routes>
   
      
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
