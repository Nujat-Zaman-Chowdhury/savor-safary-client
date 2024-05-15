import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../Utils/ScrollToTop";

const Main = () => {
    return (
        <div className="bg-[#121212] m-0 p-0">
            <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <div  className='min-h-[calc(100vh-306px)]'>
            <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;