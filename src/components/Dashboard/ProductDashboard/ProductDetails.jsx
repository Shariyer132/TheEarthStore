
const ProductDetails = () => {
    return (
        <div>
            <h4 className="font-semibold bg-gray-300 mt-3 py-2 pl-2 mr-2">Product Details</h4>
            <div className="flex flex-col lg:flex-row gap-2 pt-10 justify-center items-center">
                {/* card */}
                <div className="lg:w-1/2 mb-10">
                    <div className="card md:w-96 mx-auto bg-base-100 shadow">
                        <figure className="px-10 pt-10">
                            <img src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Couple</h2>
                            <p><span className="font-semibold">Quantity:</span> 54 Available</p>
                            <p><span className="font-semibold">Price:</span> $500</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* form */}
                <div className="lg:w-1/2 mb-10">
                    <div className="card shrink-0 w-full max-w-md bg-[#F3F3F3]">
                        <form className="card-body">
                        <h3 className="text-center font-semibold text-lg">Manage Product</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="price" placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock</span>
                                </label>
                                <input type="stock" placeholder="stock" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="category" placeholder="category" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control flex items-center">
                                <input type="submit" value="Update" className="btn btn-block btn-primary mt-5" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;