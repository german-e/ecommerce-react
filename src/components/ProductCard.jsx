import { useState } from "react";
import useFetchData from '../hooks/useFetchDate';
import '../styles/products.css'

const ProductCard = ({product}) => {
    
    


    const [favorite, setFavorite] = useState(true);


    

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
                {/*<img src="/img/smarhphone1.png" />*/}

                {product.images.map( img => {
                    return (
                        <ImageProduct image={img} />
                    )

                })}
                
                <img src="{images[0]}" />
                
                
                
            </div>

            <div className='product-card-detail'>

            {/* <div className='off'><p>10%</p><p>OFF</p></div> */}

                <p className='name'>{title}</p>
                <p className='sku'>{id}</p>
                <p className='price'>$ {price}</p>
                <p className='description'>{description}</p>
                <p className='quantity'>Category: </p>

            </div>
       
            
            <button className='btn-cart'>ADD TO CART</button>

        </div>
    )
}
 
export default Products;