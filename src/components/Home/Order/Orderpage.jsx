import { MdRemoveRedEye } from "react-icons/md";

const Orderpage = () => {
    return (
        <div>
            <h4 className="font-semibold bg-gray-300 mt-3 py-2 pl-2 mx-3">Manage All Products</h4>
            {/* large device showing table */}
            <div className="hidden md:block shadow-lg mt-1 px-6 lg:mx-36 rounded-lg">
                <h2 className="py-4 text-lg font-bold">Orders Summary</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300">
                            <tr className="text-black ">
                                <th className="tracking-wide text-left">ID</th>
                                <th className="tracking-wide text-left">Quantity</th>
                                <th className="tracking-wide text-left">Discount</th>
                                <th className="tracking-wide text-left">Amount</th>
                                <th className="tracking-wide text-left">Status</th>
                                <th className="tracking-wide text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* row 1 */}
                            <tr>
                                <td className="whitespace-nowrap">9ijfndf8jnfd67bfdjf6fjdf7jd9djf</td>
                                <td className="whitespace-nowrap">10</td>
                                <td className="whitespace-nowrap">200</td>
                                <td className="whitespace-nowrap">8999</td>
                                <td className="whitespace-nowrap">delivered</td>
                                <td className="whitespace-nowrap"><MdRemoveRedEye className="cursor-pointer" /></td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <td className="whitespace-nowrap">84hrfjndruhfjnds948543thrwt4</td>
                                <td className="whitespace-nowrap">10</td>
                                <td className="whitespace-nowrap">200</td>
                                <td className="whitespace-nowrap">5900</td>
                                <td className="whitespace-nowrap">delivered</td>
                                <td className="whitespace-nowrap"><MdRemoveRedEye className="cursor-pointer" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* mobile device view */}
            <div className="md:hidden shadow-lg m-2 p-3 rounded-md">
                <h2 className="py-4 pl-2 text-lg font-bold">Product Dashboard</h2>
                <div className="overflow-x-auto">
                    <table className="pt-5 border-t-2 border-black w-full">
                        <tbody >
                            {/* card one */}
                            <tr>
                                <th className="border-r-2 border-gray-500">ID</th>
                                <td className="pl-4">
                                    40oijfndsaug8reohtrjf8grehg
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Quantity</th>
                                <td className="pl-4">
                                    4
                                </td>
                            </tr>

                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Discount</th>
                                <td className="pl-4">
                                    2
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Amount</th>
                                <td className="pl-4">
                                    200
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Status</th>
                                <td className="pl-4">
                                    delivered
                                </td>
                            </tr>
                            <tr className="border-b-4 border-black">
                                <th className="border-r-2 border-gray-500">Actions</th>
                                <td className="pl-4">
                                    <MdRemoveRedEye className="cursor-pointer" />
                                </td>
                            </tr>

                        </tbody>
                        <tbody>
                            {/* card two */}
                            <tr>
                                <th className="border-r-2 border-gray-500">ID</th>
                                <td className="pl-4">
                                    9djd8rhdj4hjhfufj4j4njkdfjief
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Quantity</th>
                                <td className="pl-4">
                                    5
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Discount</th>
                                <td className="pl-4">
                                    200
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Amount</th>
                                <td className="pl-4">
                                    2400
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Status</th>
                                <td className="pl-4">
                                    delivered
                                </td>
                            </tr>
                            <tr className="border-b-2 border-black">
                                <th className="border-r-2 border-gray-500">Actions</th>
                                <td className="pl-4">
                                    <MdRemoveRedEye />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orderpage;