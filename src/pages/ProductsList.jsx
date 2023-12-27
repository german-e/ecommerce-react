import { useState } from "react";
import ProductCard from '../components/ProductCard';
import ProductCard2 from "../components/ProductCard2";
import useFetchData from "../hooks/useFetchDate";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../data/getData";

const ProductsList = () => {

    const [searchText, setSearchText] = useState('');

   // const {data, isLoading, error} = useFetchData('https://api.escuelajs.co/api/v1/products');

   const query = useQuery({
    queryKey: ['products'],
    queryFn: () =>  getData('https://api.escuelajs.co/api/v1/products')
   })

    let productFiltered = query.data?.filter( p => p.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1 
              || p.description.toLowerCase().indexOf(searchText.toLocaleLowerCase()) != -1);


    function handleSubmit(ev){
        ev.preventDefault();

    }
    

    if (query.isLoading){
        return (
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Cargando...</span>
            </button>
        )
    }
   
    return (
        <>
            {/* <div className="search-bar">
                <div className="search">
                    <form onSubmit={handleSubmit}>
                        <input value={searchText} onChange={(ev) => setSearchTe(ev.target.value)} type="text" className="search-input" placeholder='Busca un producto...'/>
                        <button className='search-btn' type="submit"><i className="fas fa-search"></i></button>
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
                        <div className="col-lg-3 col-md-4 mb-5 p-2 rounded shadow-sm">
                        <ProductCard2 product={product} />
                        </div>
                        )
                    })}
            </div>
        </>
    )
}
 
export default ProductsList;