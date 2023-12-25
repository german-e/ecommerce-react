import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchDate";
import '../styles/detailsProduct.css';
import { useState } from "react";
const ProductImages = ({ images }) => {

  

  const [image, setImage] = useState('');




  console.log(image);

  function handleClick(ev){
    setImage(ev.target.src)
  }

  return (
    <>
      <div class="images-grid">
        <div className=" d-flex flex-column gap-2">
        
        {images?.map((img) => {
          return (
            <>              

                                 <img
                      src={img}
                      class="d-block w-100"
                      alt="Imagen del Producto"
                      onClick={handleClick}
                      
                      />
                    
                 
                
              
            </>
          );
        })}

          </div>
                <div >
                      <img className="w-100" src={image} alt="" />
                  </div>

        
      </div>

      {/* <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default ProductImages;
