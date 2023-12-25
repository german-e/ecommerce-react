import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { getData } from "../data/getData";
import ProductCard2 from "../components/ProductCard2";

const Home = () => {
  const queryCategory = useQuery({
    queryKey: ["categories"],
    queryFn: () => getData("https://api.escuelajs.co/api/v1/categories"),
  });

  const queryProduct = useQuery({
    queryKey: ["products"],
    queryFn: () => getData("https://api.escuelajs.co/api/v1/products"),
  });

  const lastArrive = queryProduct.data
    ?.sort((a, b) => a.creationAt > b.creationAt)
    .slice(0, 8);
  return (
    <>
      <div className="container">

    <div className="d-flex flex-column align-items-center">

      <h2 className="text-center mt-4" style={{fontSize:40}}>Our last arrive</h2>
      <button className="btn btn-outline-dark" >Shop All</button>
    </div>
        <section className="d-flex flex-wrap border-bottom p-3">
          {lastArrive?.map((prod) => {
            return (
              <>
        <div class="col-lg-6 col-md-6 mb-5 p-2 rounded border shadow-sm">


                <ProductCard2 product={prod} />
        </div>
              </>
            );
          })}
        </section>


        <h2 className="mx-3 p-3">¿Qué queres ver?</h2>
        <section className="d-flex flex-wrap justify-content-center mt-3">
          {queryCategory.data?.map((category) => {
            return (
              <div class="card col-md-2 me-2 mb-4 shadow-sm">
                <img
                  src={category.image}
                  className="card-img-top"
                  alt={`Imagen de categoría ${category.name}`}
                />

                <div class="position-absolute bottom-0 text-center w-100 m-auto mb-3 me-2">
                  <p class="card-text text-bg-light fs-5 py-2">
                    {category.name.toUpperCase()}
                  </p>
                </div>
              </div>
            );
          })}
        </section>


        <section className="brand d-flex align-items-center justify-content-around my-5">
          <img className="" width={100} src="https://logodownload.org/wp-content/uploads/2015/02/topper-logo-8.png" alt="Tooper logo" />
          <img className="" width={120} src="https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png" alt="Addidas logo" />
          <img className="" width={100} src="https://pngimg.com/uploads/gucci/gucci_PNG19.png" alt="Addidas logo" />
          <img className="" width={100} src="https://logos-world.net/wp-content/uploads/2020/09/Lacoste-Logo.png" alt="Addidas logo" />

        </section>

        
      </div>
    </>
  );
};

export default Home;
