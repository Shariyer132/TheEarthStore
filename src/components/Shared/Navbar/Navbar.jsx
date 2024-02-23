import { Link, NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import Header from "./Header";
import Drawer from "./Drawer";
import { FaShoppingBag } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const Links = <>
        <li className="indicator"><Link to='/shop'  className="text-white"><FaShoppingBag /></Link></li>
        <li><Link to='/shopingCart' className="text-white"><FaShoppingCart /></Link></li>
    </>

    const links = <>
        <li><NavLink to='/orders'>ORDERS</NavLink></li>
        <li><NavLink to='/dashboard/adminHome'>DASHBOARD</NavLink></li>
        <li><NavLink className="flex items-center">Logout<IoIosLogOut /></NavLink></li>
    </>

    return (
        <div className="navbar justify-between bg-blue-400 px-16">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-white text-xl">HOME</Link>
            </div>
            {/* moblie view */}
            <main className="md:hidden">
                <Header setIsOpen={setIsOpen} />
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                    <ul onClick={()=>(setIsOpen(false))} className="menu">
                        {Links}
                        {links}
                    </ul>
                </Drawer>
            </main>

            {/* large device view */}
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                    <li>
                        <details>
                            <summary className="text-white">CATEGORIES</summary>
                            <ul className="dropdown-content w-44 z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                                {links}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Navbar;




