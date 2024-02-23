import { NavLink, Outlet } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";
import Navbar from "../components/Shared/Navbar/Navbar";
import { FaBoxOpen, FaHome, FaUsers } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="flex gap-2">
                <div className="sm:w-64  min-h-full bg-slate-300 rounded-b-lg">
                   <ul className="hidden sm:block menu text-lg">
                       <li> <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink></li>
                       <li><NavLink to="/dashboard/createProduct"><TbCategoryPlus />Create product</NavLink></li>
                       <li><NavLink to="/dashboard/productDashboard"><FaBoxOpen />Products</NavLink></li>
                       <li><NavLink to="/dashboard/transactions"><AiOutlineTransaction />Transaction</NavLink></li>
                       <li><NavLink to="/dashboard/manageUsers"><FaUsers />Manage Users</NavLink></li>
                    </ul>
                    <ul className="sm:hidden menu">
                    <li><NavLink to="/dashboard/adminHome" className="text-2xl tooltip tooltip-right" data-tip="Create product" ><FaHome /></NavLink></li>
                    <li><NavLink to="/dashboard/createProduct" className="text-2xl tooltip tooltip-right" data-tip="Create product" ><TbCategoryPlus /></NavLink></li>
                    <li><NavLink to="/dashboard/productDashboard" className="text-2xl tooltip tooltip-right" data-tip="Products" ><FaBoxOpen /></NavLink></li>
                    <li><NavLink to="/dashboard/transactions" className="text-2xl tooltip tooltip-right" data-tip="Transaction" ><AiOutlineTransaction /></NavLink></li>
                    <li><NavLink to="/dashboard/manageUsers" className="text-2xl tooltip tooltip-right" data-tip="Transaction" ><FaUsers /></NavLink></li>
                    </ul>
                </div>
                <div className="lg:w-5/6 md:w-4/6 w-full"><Outlet /></div>
            </div>
        </div>
    );
};

export default Dashboard;