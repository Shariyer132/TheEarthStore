import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const links = <>
        <li><Link to='/dashboard/adminHome' className="">DASHBOARD</Link></li>
        <li><Link className=" btn-sm flex items-center">Logout<IoIosLogOut /></Link></li>
    </>

    return (
        <div className="navbar justify-between bg-blue-400 px-16">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-white text-xl">HOME</Link>
            </div>
            <div className="navbar-end flex flex-col items-end">
                <button tabIndex={0} onClick={toggleNavbar} className="btn no-animation btn-ghost hover:bg-transparent w-14 md:hidden">
                    {
                        isOpen ?
                            <RxCross1 className="text-xl" />
                            : <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    }
                </button>
                {isOpen && (
                    <div className="absolute top-12 w-36 rounded-md md:hidden">
                        <ul className="flex flex-col basis-full w-44 z-[1] menu p-2 shadow bg-base-100 rounded-box">
                            {links}
                        </ul>
                    </div>
                )}
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1">
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