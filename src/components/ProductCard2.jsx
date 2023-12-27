import { Link } from 'react-router-dom';
import '../styles/ProductCard2.css';




const ProductCard2 = ({ product }) => {

    let img = product.images[0];

    console.log(img)
    if (product.images.len <= 0){
        img = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
    }
  return (
    <>
          <div className="product-wrapper mb-3 text-center">
            <div className="product-img">
              <Link to={`/product/${product.id}`}>
                <img src={`${img}`}  alt="Product Image" />
              </Link>
              

              <span className="text-center d-flex">              
                 $ {product.price.toFixed(2)}
                 <i className="material-symbols-outlined position-absolute top-50 start-100 bottom-100 translate-middle text-dark">sell</i>               
                 
              </span>

              <button className=" btn btn-sm text-bg-dark shadow-sm position-absolute top-0 end-0 m-3">{product.category.name}</button>              
              
              </div>
             
            
            <div className="product-action">
                <div className="product-action-style d-flex">                    
                <p className='text-secondary' style={{fontSize: 12}}>{product.description}</p>
                  {/* <button className='btn btn-sm d-flex align-items-center m-auto'>
                    <i className="material-symbols-outlined text-primary">shopping_cart</i>
                  </button>
                  <button className='btn btn-sm d-flex align-items-center m-auto'>
                    <i className="material-symbols-outlined text-danger">favorite</i>                    
                  </button> */}
                </div>
              </div>
          </div>
          <h5>{product.title}</h5>
          
          <button className='btn btn-sm align-self-end btn-primary d-flex align-items-center'>Add to Cart<i className="material-symbols-outlined px-2">shopping_cart</i> </button>
          
        </>
    
  );
};

export default ProductCard2;
