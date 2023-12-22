import ProductImages from "../components/ProductImages";
import { useParams } from "react-router-dom";
const ProductDetail = () => {

    const {id} = useParams();

    


    return ( 
        <>
            <div className='container'>
                <ProductImages images={product.images} />
            </div>
        </>
     );
}
 
export default ProductDetail;