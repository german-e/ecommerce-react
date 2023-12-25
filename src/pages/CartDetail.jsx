import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartDetail = () => {

    const cartItem = [{
        image: 'https://i.imgur.com/QkIa5tT.jpeg',
        productName: 'Zapatillas deportivas Air-jordan',
        price: 158.25,
        quantity: 3
    },
    {
        image: 'https://i.imgur.com/kg1ZhhH.jpeg',
        productName: 'Gorgeous Steel Computer',
        price: 10558.25,
        quantity: 2
    },
    {
        image: 'https://i.imgur.com/ZKGofuB.jpeg',
        productName: 'Buzo deportivo Negro Hombre',
        price: 10052,
        quantity: 1
    },
    {
        image: 'https://i.imgur.com/QkIa5tT.jpeg',
        productName: 'Zapatillas deportivas Air-jordan',
        price: 15800.75,
        quantity: 2
    },
]

    function totalAmount() {
        let count = 0;
        cartItem.forEach( item => {
            count += item.quantity * item.price;
        })

        return count;
    }

    let qtyProduct = cartItem.map(item => item.quantity).reduce( (a, b) => a+b ) ;
    
    return ( 
        <>
            <h2>Tu Carrito</h2>
            <p>¿No has terminado? <span><Link to="/products">Continua Comprando</Link></span> </p>

            

            <div className="row">

            {/* Items */}
                <div className="col-8 border p-2">
                    Mis productos

                    {cartItem.map( item => {
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