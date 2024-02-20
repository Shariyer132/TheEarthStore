import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            
            <Navbar/>
           
            <Outlet/>
            {/* footer coming soon */}
        </div>
    );
};

export default Main;