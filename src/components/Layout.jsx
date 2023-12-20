import { Outlet } from "react-router-dom";
import NavBar from "./ui/header/NavBar";

const Layout = () => {
    return ( 
        <>
        <header class="p-2">
            <NavBar />
        </header>

        <main className="container">

            <Outlet />
        </main>
        </>
     );
}
 
export default Layout;