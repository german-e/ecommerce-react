import { useState } from "react";
import Product
const ProductsList = () => {
    const [searchText, setSearchText] = useState('');


    let productFiltered = products
        .filter( p => p.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1 
              || p.description.toLowerCase().indexOf(searchText.toLocaleLowerCase()) != -1);
   
    return (
        <>
            <div className="search-bar">
                <div className="search">
                    {/*<form onSubmit={handleSubmit}>
                        <input value={search} onChange={(ev) => setSearch(ev.target.value)} type="text" className="search-input" placeholder='Busca un producto...'/>
                        <button className='search-btn' type="submit"><i class="fas fa-search"></i></button>
                    </form> */}
                    <Search 
                        filterText={searchText} 
                        onFilterChanged={setSearchText}/>
                </div>
            </div>
            {productFiltered.map(product => {
                return(
                    <Product product={product} />
                )
            })}
        </>
    )
}
 
export default ProductsList;