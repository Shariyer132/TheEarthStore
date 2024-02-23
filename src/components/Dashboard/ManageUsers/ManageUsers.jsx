import { MdRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h4 className="font-bold text-center bg-gray-300 mt-3 py-2 pl-2 mr-2">List of All Users</h4>
            <div className="flex items-center flex-col md:flex-row">
                <label className="input input-bordered flex  m-6 max-w-md w-full items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                <h3 className="text-2xl font-semibold">Total Users: <span>2</span></h3>
            </div>

            {/* large device showing table */}
            <div className="hidden md:block shadow-lg mt-1 px-6 mr-2 py-5 rounded-lg">
                <div className="overflow-x-auto rounded">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300">
                            <tr className="text-black ">
                                <th className="tracking-wide text-left">Serial No.</th>
                                <th className="tracking-wide text-left">Name</th>
                                <th className="tracking-wide text-left">Email</th>
                                <th className="tracking-wide text-left">Phone</th>
                                <th className="tracking-wide text-left">Status</th>
                                <th className="tracking-wide text-left">Role</th>
                                <th className="tracking-wide text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* row 1 */}
                            <tr>
                                <td className="whitespace-nowrap">1</td>
                                <td className="whitespace-nowrap">Shariyer</td>
                                <td className="whitespace-nowrap">shariyer132@gmail.com</td>
                                <td className="whitespace-nowrap">01886600369</td>
                                <td className="whitespace-nowrap">Unbanned</td>
                                <td className="whitespace-nowrap">admin</td>
                                <td className="whitespace-nowrap "><MdRemoveRedEye onClick={()=>navigate('/dashboard/user')} className="bg-blue-400 px-2 text-white rounded text-3xl cursor-pointer" /></td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <td className="whitespace-nowrap">2</td>
                                <td className="whitespace-nowrap">Sojol</td>
                                <td className="whitespace-nowrap">sojol132@gmail.com</td>
                                <td className="whitespace-nowrap">01886600369</td>
                                <td className="whitespace-nowrap">Unbanned</td>
                                <td className="whitespace-nowrap">user</td>
                                <td className="whitespace-nowrap "><MdRemoveRedEye className="bg-blue-400 px-2 text-white rounded text-3xl cursor-pointer" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* mobile device view */}
            <div className="md:hidden shadow-lg py-5 m-2 p-3 rounded-md">
                <div className="overflow-x-auto">
                    <table className="pt-5 border-t-2 border-black w-full">
                        <tbody >
                            {/* card one */}
                            <tr>
                                <th className="border-r-2 border-gray-500">Serial No.</th>
                                <td className="pl-4">
                                    1
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Name</th>
                                <td className="pl-4">
                                    Shariyer
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Email</th>
                                <td className="pl-4">
                                    shariyer132@gmail.com
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Phone</th>
                                <td className="pl-4">
                                    01886600369
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Status</th>
                                <td className="pl-4">
                                    Unbanned
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Role</th>
                                <td className="pl-4">
                                    admin
                                </td>
                            </tr>
                            <tr className="border-b-4 border-black">
                                <th className="border-r-2 border-gray-500">Actions</th>
                                <td className="pl-4">
                                    <MdRemoveRedEye className="bg-blue-400 px-2 text-white rounded text-3xl cursor-pointer" />
                                </td>
                            </tr>

                        </tbody>
                        <tbody >
                            {/* card two */}
                            <tr>
                                <th className="border-r-2 border-gray-500">Serial No.</th>
                                <td className="pl-4">
                                    2
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Name</th>
                                <td className="pl-4">
                                    Sojol
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Email</th>
                                <td className="pl-4">
                                    sojol132@gmail.com
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Phone</th>
                                <td className="pl-4">
                                    01886600369
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Status</th>
                                <td className="pl-4">
                                    Unbanned
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Role</th>
                                <td className="pl-4">
                                    user
                                </td>
                            </tr>
                            <tr className="border-b-4 border-black">
                                <th className="border-r-2 border-gray-500">Actions</th>
                                <td className="pl-4">
                                    <MdRemoveRedEye className="bg-blue-400 px-2 text-white rounded text-3xl cursor-pointer" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="join flex justify-center pt-10">
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>
        </div>
    );
};

export default ManageUsers;