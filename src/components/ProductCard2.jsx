import { Link } from 'react-router-dom';
import '../styles/ProductCard2.css';




const ProductCard2 = ({ product }) => {

    let img = product.images[0];

    console.log(img)
    if (product.images.len <= 0){
        img = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
    }
  return (
    
        <div class="col-lg-3 col-md-4 mb-5 p-2 rounded border shadow-sm">
          <div class="product-wrapper mb-3 text-center">
            <div class="product-img">
              <Link to={`/product-details/${product.id}`}>
                <img src={`${img}`}  alt="Product Image" />
              </Link>
              <span class="text-center d-flex align-items-center">              
                 $ {product.price.toFixed(2)}
                 <i class="material-symbols-outlined position-absolute top-50 start-100 bottom-100 translate-middle text-dark">sell</i>
              </span>
              
             
            </div>
            <div class="product-action">
                <div class="product-action-style d-flex">                    
                <p className='text-secondary' style={{fontSize: 12}}>{product.description}</p>
                  {/* <button className='btn btn-sm d-flex align-items-center m-auto'>
                    <i class="material-symbols-outlined text-primary">shopping_cart</i>
                  </button>
                  <button className='btn btn-sm d-flex align-items-center m-auto'>
                    <i class="material-symbols-outlined text-danger">favorite</i>                    
                  </button> */}
                </div>
              </div>
          </div>
          <h5>{product.title}</h5>
          <button className='btn btn-sm btn-primary d-flex align-items-center'>Add to Cart<i class="material-symbols-outlined px-2">shopping_cart</i> </button>
          
        </div>
    
  );
};

export default ProductCard2;
