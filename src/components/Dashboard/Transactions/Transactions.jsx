import { MdRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h4 className="font-semibold bg-gray-300 mt-3 py-2 pl-2 mr-2">Manage All Products</h4>
            {/* large device showing table */}
            <div className="hidden md:block shadow-lg mt-1 px-6 mr-2 rounded-lg">
                <h2 className="py-4 text-lg font-bold">Product Dashboard</h2>
                <div className="overflow-x-auto rounded">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300">
                            <tr className="text-black ">
                                <th className="tracking-wide text-left">Image</th>
                                <th className="tracking-wide text-left">Name</th>
                                <th className="tracking-wide text-left">Amount</th>
                                <th className="tracking-wide text-left">Discount</th>
                                <th className="tracking-wide text-left">Quantity</th>
                                <th className="tracking-wide text-left">Status</th>
                                <th className="tracking-wide text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* row 1 */}
                            <tr>
                                <td className="whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-12 h-12 rounded">
                                                <img src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap">Couples</td>
                                <td className="whitespace-nowrap">200</td>
                                <td className="whitespace-nowrap">10</td>
                                <td className="whitespace-nowrap">people</td>
                                <td className="whitespace-nowrap">delivered</td>
                                <td className="whitespace-nowrap"><MdRemoveRedEye /></td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <td className="whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-12 h-12 rounded">
                                                <img src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td> 
                                <td className="whitespace-nowrap">Couples</td>
                                <td className="whitespace-nowrap">200</td>
                                <td className="whitespace-nowrap">10</td>
                                <td className="whitespace-nowrap">people</td>
                                <td className="whitespace-nowrap">delivered</td>
                                <td className="whitespace-nowrap"><MdRemoveRedEye className="cursor-pointer" onClick={()=>navigate('/dashboard/buyedProduct')}/></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Transactions;