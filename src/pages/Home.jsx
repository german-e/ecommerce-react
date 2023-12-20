import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <>
            <p>Home</p>
            <Link to="/products">Ver todos los productos</Link>
        </>
     );
}
 
export default Home;