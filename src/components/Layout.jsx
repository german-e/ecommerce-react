import { Outlet } from "react-router-dom";
import NavBar from "./ui/header/NavBar";
import Footer from "./ui/footer/Footer";

const Layout = () => {
    return ( 
        <>
        <header class="p-2">
            <NavBar />
        </header>

        <main className="container">

            <Outlet />
        </main>

        <Footer />
        </>
     );
}
 
export default Layout;