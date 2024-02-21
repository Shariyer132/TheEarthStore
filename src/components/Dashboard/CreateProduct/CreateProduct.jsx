
const CreateProduct = () => {
    return (
        <div className="card shrink-0 lg:p-14 md:m-3 mt-2 mr-2 bg-base-100">
            <form className="card-body gap-4 bg-[#F3F3F3] rounded-md">
                <h3 className="text-center font-bold text-3xl">Add New Product</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Name*</span>
                        </label>
                        <input type="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Price*</span>
                        </label>
                        <input type="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Stock*</span>
                        </label>
                        <input type="stock" placeholder="Stock" className="input-bordered input-md input" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-medium">Category*</span>
                        </label>
                        <input type="category" placeholder="eg. laptop, camera etc" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-medium">Photo*</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" />
                </div>
                <div className="form-control lg:w-1/6 md:w-1/4 sm:w-1/3 mt-6">
                    <input type="submit" value="Add Product" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;