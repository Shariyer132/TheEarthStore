
const ShopNow = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            {/* filter functions */}
            <div className="bg-slate-300 lg:w-1/4 flex md:p-5 flex-col items-center gap-3 pt-5">
                {/* Shortby field */}
                <div className="w-1/2 lg:w-full">
                    <label className="label">
                        <span className="label-text font-medium">Short By</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Normal</option>
                        <option>Normal Apple</option>
                        <option>Normal Orange</option>
                        <option>Normal Tomato</option>
                    </select>
                </div>
                {/* Category field */}
                <div className="w-1/2 lg:w-full">
                    <label className="label">
                        <span className="label-text font-medium">Category</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Normal</option>
                        <option>Normal Apple</option>
                        <option>Normal Orange</option>
                        <option>Normal Tomato</option>
                    </select>
                </div>
                <div className="w-1/2 lg:w-full">
                    <label className="label">
                        <span className="label-text font-medium">Price Range</span>
                    </label>
                    <div className="flex items-center">
                        <label className="label">
                            <span className="label-text w-24"><span className="font-medium">Price:</span> $100000</span>
                        </label>
                        <input type="range" min={0} max="100" value="50" className="range range-xs range-info " />
                        <label className="label">
                            <span className="label-text">$100000</span>
                        </label>
                    </div>

                </div>
            </div>


            <div className="lg:w-3/4">
                {/* search bar */}
                <div className="py-5 pl-5">
                    <label className="input input-bordered flex items-center gap-2 max-w-md">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                {/* cards */}
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:py-10">
                    {/* card one */}
                    <div className="card bg-base-100 shadow-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes</h2>
                            <p><span className="font-medium">Price:</span> $500</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* card two */}
                    <div className="card bg-base-100 shadow-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes</h2>
                            <p><span className="font-medium">Price:</span> $500</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* card three */}
                    <div className="card bg-base-100 shadow-lg">
                        <figure className="px-10 pt-10">
                            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes</h2>
                            <p><span className="font-medium">Price:</span> $500</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Pagination */}
                <div className="join p-6">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">Page 22</button>
                    <button className="join-item btn">»</button>
                </div>
            </div>
        </div>
    );
};

export default ShopNow;