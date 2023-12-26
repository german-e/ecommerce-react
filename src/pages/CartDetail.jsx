import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartDetail = () => {


    const {myCart} = useContext(CartContext);



    console.log('CartDetail -> Es valor de myCar es: ', myCart)


    function totalAmount() {
        let count = 0;
        myCart.forEach( item => {
            count += item.quantity * item.product.price;
        })

        return count;
    }

    let qtyProduct = 12 // myCart.map(item => item.quantity).reduce( (a, b) => a+b ) ;
    
    return ( 
        <>
            <h2>Tu Carrito</h2>
            <p>¿No has terminado? <span><Link to="/products">Continua Comprando</Link></span> </p>

            

            <div className="row">

            {/* Items */}
                <div className="col-8 border p-2">
                    Mis productos

                    {myCart.map( item => {
                        return <CartItem cartItem={item} />
                    })}



                    

                    
                </div>



                {/* Resumen y totales */}
                <div className="col-4 border p-2">
                    Resume de compra
                    <p>Cantidad de Productoss <strong>{qtyProduct}</strong></p>

                    <h2>Total {totalAmount()}</h2>

                </div>


            </div>
            







            
        </>
     );
}
 
export default CartDetail;