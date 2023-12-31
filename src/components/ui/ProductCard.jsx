const ProductCard = ({product}) => {
    const [favorite, setFavorite] = useState(true);


    let { title, id, description, price, images, category } = product;

    function handleClick(){
        setFavorite(!favorite);
    }

    return (

        <div className="product-card">

            <div className='product-card-img'>
                <button onClick={handleClick}>
                    {favorite 
                        ? <i className="far fa-heart"></i> 
                        : <i className="fas fa-heart"></i> 
                    }                    
                </button>
                {/*<img src="/img/smarhphone1.png" />*/}
                <img src={image} />
                
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