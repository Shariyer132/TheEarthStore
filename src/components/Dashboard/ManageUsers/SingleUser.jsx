import { FaTrash } from "react-icons/fa";

const SingleUser = () => {
    return (
        <>
            <h4 className="font-bold text-center bg-gray-300 mt-3 py-2 pl-2 mx-3">User Profile</h4>
            {/* form */}
            <div className="flex md:p-14 sm:p-5 justify-around flex-col-reverse items-center lg:flex-row">
                <div className="card shrink-0 pr-2 pb-5 lg:w-3/5 w-full bg-base-100">
                    <form className="card-body gap-4 bg-[#F3F3F3] rounded-md">
                        <h3 className="font-bold text-2xl">Edit <span>Shariyer</span> Profile</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Phone</span>
                            </label>
                            <input type="number" placeholder="phone" className="input-bordered input-md input" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Status</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Active</option>
                                <option>Active</option>
                                <option>Banned</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Role</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>User</option>
                                <option>Admin</option>
                                <option>User</option>

                            </select>
                        </div>
                        <div className="mt-6 flex gap-6 ">
                            <input type="submit" value="Update" className="btn btn-primary" />
                            <button className="btn btn-error text-white"><FaTrash /></button>
                        </div>
                    </form>
                </div>
                {/* photo */}
                <div className="py-10">
                    <span className="tooltip tooltip-left" data-tip="Shariyer"><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="rounded-full max-w-md w-full" alt="" /></span>
                </div>
            </div>
        </>
    );
};

export default SingleUser;