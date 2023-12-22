import { useState } from "react";

import ProductImages from "./ProductImages";
import '../styles/ProductCard.css';

const ProductCard = ({product}) => {
    
    


    const [favorite, setFavorite] = useState(true);

    const {id, title, description, price, images, category} = product;


    

    function handleClick(){
        setFavorite(!favorite);
    }

    return (

        <div className="product-card">

            <div className='product-card-img'>
                <button onClick={handleClick}>
                    {favorite 
                        ? <i class="far fa-heart"></i> 
                        : <i class="fas fa-heart"></i> 
                    }                    
                </button>
                <img src={product.images[0]} />

                
                {/* <ProductImages images={images} /> */}
                    

                
                
                
                
                
            </div>

            <div className='product-card-detail'>

            {/* <div className='off'><p>10%</p><p>OFF</p></div> */}

                <p className='name'>{title}</p>
                <p className='sku'>{id}</p>
                <p className='price'>$ {price}</p>
                <p className='description'>{description}</p>
                <p className='quantity'>Category: {category.name}</p>

            </div>
       
            
            <button className='btn-cart'>ADD TO CART</button>

        </div>
    )
}
 
export default ProductCard;