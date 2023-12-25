import { useQuery } from "@tanstack/react-query";
import ProductImages from "../components/ProductImages";
import { useParams } from "react-router-dom";
import { getData } from "../data/getData";
import { useState } from "react";
import "../styles/detailsProduct.css";

const ProductDetail = () => {
  const { id } = useParams();
  const URL = `https://api.escuelajs.co/api/v1/products/${id}`;
  const query = useQuery({
    queryKey: ["productByCategory"],
    queryFn: () => getData(URL),
  });

  const [count, setCount] = useState(1);

  const [size, setSize] = useState("M");

  const [fav, setFav] = useState(false);

  console.log("Talle es: ", size);

  return (
    <>
      <div className="container product-details my-5">
        <ProductImages images={query.data?.images} />

        <div className="border p-3 d-flex flex-column justify-content-between">
          <div>
            {/* title */}
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="text-center text-secondary">
                {query.data?.title}{" "}
              </h4>
              <span onClick={() => setFav(!fav)}>
                {fav ? (
                  <i class="far fa-heart fs-4 text-danger"></i>
                ) : (
                  <i class="fas fa-heart fs-4 text-danger"></i>
                )}
              </span>
            </div>

            {/* price */}
            <h3 className="">$ {query.data?.price.toFixed(2)}</h3>

            <p>
              <i class="far fa-credit-card me-2"></i>Hasta 3 cuotas{" "}
              <strong>sin interés</strong>
            </p>

            <p>
              <i class="fas fa-truck text-success me-2"></i>Envío gratis a todo
              el país
            </p>
          </div>

          <div>
            {/* talles */}

            <div className="py-2 mb-3">
              <p>Talles:</p>

              <input
                type="radio"
                className="btn-check"
                name="options-base"
                id="sizeXS"
                autocomplete="off"
                value="XS"
                onClick={(ev) => setSize(ev.target.value)}
              />
              {
                <label className="btn me-2" htmlFor="sizeXS">
                  XS
                </label>
              }

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="sizeS"
                autocomplete="off"
                value="S"
                onClick={(ev) => setSize(ev.target.value)}
              />
              <label class="btn mx-2" htmlFor="sizeS">
                S
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="sizeM"
                autocomplete="off"
                value="M"
                onClick={(ev) => setSize(ev.target.value)}
              />
              <label class="btn mx-2" for="sizeM">
                M
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="sizeL"
                autocomplete="off"
                value="L"
                onClick={(ev) => setSize(ev.target.value)}
              />
              <label class="btn mx-2" for="sizeL">
                L
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options-base"
                id="sizeXL"
                autocomplete="off"
                value="XL"
                onClick={(ev) => setSize(ev.target.value)}
              />
              <label class="btn mx-2" for="sizeXL">
                XL
              </label>
            </div>

            <p style={{fontSize:'0.9em'}}>Cantidad</p>

            <div className="d-flex flex-wrap justify-content-between">
              

              <div className="d-flex align-items-center border-end me-2 ">
                <button
                  className="btn btn-sm"
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <p className="fw-bold rounded mx-3 mb-0">{count}</p>
                <button
                  className="btn btn-sm"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            <button className="btn btn-primary">
              Agregar Carrito<i class="fas fa-shopping-cart mx-1"></i>
            </button>
            </div>

            {/* <button className="btn btn-outline-primary mt-2">Comprar Ahora <i class="fas fa-cash-register"></i></button> */}
          </div>
        </div>
      </div>

      <section className="border-top my-3 p-3">
        <h4>Detalle del producto</h4>
        <p>{query.data?.description}</p>
      </section>
    </>
  );
};

export default ProductDetail;
