import { useState } from "react";
import ProductCard from '../components/ProductCard';
import ProductCard2 from "../components/ProductCard2";
import useFetchData from "../hooks/useFetchDate";


const ProductsList = () => {

    const [searchText, setSearchText] = useState('');

    const {data, isLoading, error} = useFetchData('https://api.escuelajs.co/api/v1/products');

    let productFiltered = data
        .filter( p => p.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1 
              || p.description.toLowerCase().indexOf(searchText.toLocaleLowerCase()) != -1);


    function handleSubmit(ev){
        ev.preventDefault();

    }
    
   
    return (
        <>
            {/* <div className="search-bar">
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input value={searchText} onChange={(ev) => setSearchTe(ev.target.value)} type="text" className="search-input" placeholder='Busca un producto...'/>
                        <button className='search-btn' type="submit"><i class="fas fa-search"></i></button>
                    </form>
                    <Search 
                        filterText={searchText} 
                        onFilterChanged={setSearchText}/>
                </div>
            </div> */}
            <h2>Productos</h2>
            <div className="d-flex flex-wrap">
                {productFiltered.map(product => {
                    return(
                        <ProductCard2 product={product} />
                        )
                    })}
            </div>
        </>
    )
}
 
export default ProductsList;