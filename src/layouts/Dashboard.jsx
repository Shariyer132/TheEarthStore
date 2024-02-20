import { Link, Outlet } from "react-router-dom";
import { TbCategoryPlus } from "react-icons/tb";
import Navbar from "../components/Shared/Navbar/Navbar";
import { FaBoxOpen } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex gap-2">
                <div className="w-1/5 pt-3">
                    <h4 className="bg-gray-300 md:pl-7 pl-2 text-base py-2 w-full font-medium">Admin Links</h4>
                    <div className="hidden sm:block">
                        <Link className="flex hover:bg-[#D0CBC8] py-2 md:pl-7 sm:pl-2 pl-5 font-semibold items-center gap-1" ><TbCategoryPlus />Admin Links</Link>
                        <Link to="/dashboard/productDashboard" className="flex hover:bg-[#D0CBC8] py-2 md:pl-7 sm:pl-2 pl-5 font-semibold items-center gap-1 " ><FaBoxOpen />Products</Link>
                        <Link to="/dashboard/transactions" className="flex hover:bg-[#D0CBC8] py-2 md:pl-7 sm:pl-2 pl-5 font-semibold items-center gap-1 " ><AiOutlineTransaction />Transaction</Link>
                    </div>
                 <div className="sm:hidden">
                 <Link className="flex hover:bg-[#D0CBC8] py-2 pl-7 font-semibold items-center gap-1 tooltip tooltip-right" data-tip="Admin Links" ><TbCategoryPlus /></Link>
                 <Link className="flex hover:bg-[#D0CBC8] py-2 pl-7 font-semibold items-center gap-1 tooltip tooltip-right" data-tip="Admin Links" ><TbCategoryPlus /></Link>
                 <Link className="flex hover:bg-[#D0CBC8] py-2 pl-7 font-semibold items-center gap-1 tooltip tooltip-right" data-tip="Admin Links" ><TbCategoryPlus /></Link>
                 </div>
                </div>
                <div className="w-4/5"><Outlet /></div>
            </div>
        </div>
    );
};

export default Dashboard;