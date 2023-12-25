import { useEffect, useState } from "react";

const CartItem = ({ cartItem }) => {
  const [count, setCount] = useState(cartItem.quantity);
  const [subTotal, setSubTotal] = useState(cartItem.price * count);


  

  useEffect( () => {
    setSubTotal(cartItem.price * count);
  }, [count])

  return (
    <>
      <div className="d-flex justify-content-between border-bottom py-3">
        {/* Image and Description */}
        <div className="d-flex">
          <img
            src={cartItem.image}
            alt="Image del product"
            width={100}
            className="border rounded"
          />

          <div className="mx-2">
            <h6 className="text-secondary">{cartItem.productName}</h6>
            <h5 className="fw-bold">$ {cartItem.price.toFixed(2)}</h5>

            <div className="d-flex align-items-center">
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                  calcSubTotal();
                }}
              >
                -
              </button>
              <p className="fw-bold rounded mx-3 mb-0">{count}</p>              
              
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => { 
                    setCount(count + 1);
                    calcSubTotal();
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Quantity */}

        {/* Delete Option */}

        <div className="pe-3 d-flex flex-column justify-content-between align-items-end">
          
          <h7 className="fst-italic fw-medium text-secondary">$ {subTotal.toFixed(2)}</h7>
          <i class="fas fa-trash text-danger"></i>
        </div>
      </div>
    </>
  );
};

export default CartItem;
