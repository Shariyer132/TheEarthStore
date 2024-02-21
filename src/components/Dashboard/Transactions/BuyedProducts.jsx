
const BuyedProducts = () => {
    return (
        <div>
            <h4 className="font-semibold bg-gray-300 mt-3 py-2 pl-2 mr-2">Order Details</h4>
            <div className="flex flex-col lg:flex-row">
                {/* ordered Products */}
                <div className="lg:w-1/2 flex flex-col gap-4 pt-10">
                    {/* card one */}
                    <div className="card sm:card-side bg-base-100 shadow-md md:shadow-lg">
                        <figure className="sm:w-1/2 "><img className="rounded " src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Couple</h2>
                            <p>$500 x 1 =500</p>
                            <p><span className="text-semibold">Total:</span> $500</p>
                        </div>
                    </div>
                    {/* card two */}
                    <div className="card sm:card-side bg-base-100 shadow-md md:shadow-lg">
                        <figure className="sm:w-1/2"><img className="rounded" src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>$500 x 1 =500</p>
                            <p><span className="text-semibold">Total:</span> $500</p>
                        </div>
                    </div>
                </div>
                {/* Order Info */}
                <div className="lg:w-1/2 h-1/2 border shadow-lg rounded-md m-5 p-10">
                    <h5 className="font-semibold text-green-600">User info</h5>
                    <p className="font-semibold">Name: <span className="font-normal">Puspa</span></p>
                    <p className="font-semibold">Address: <span className="font-normal">dhaka, Bangladesh</span></p>
                    <h5 className="font-semibold text-green-600 pt-2">Amount info</h5>
                    <p className="font-semibold">Subtotal: <span className="font-normal">$499</span></p>
                    <p className="font-semibold">Shipping Charges: <span className="font-normal">$0</span></p>
                    <p className="font-semibold">Tax: <span className="font-normal">$99</span></p>
                    <p className="font-semibold">Discount: <span className="font-normal">$0</span></p>
                    <p className="font-semibold">Total: <span className="font-normal">$0</span></p>
                    <h5 className="font-semibold text-green-600 pt-2">Status info</h5>
                    <p className="font-semibold">Processing</p>
                    <div className="flex justify-between pt-5">
                        <button className="btn text-white btn-error btn-sm">Delete</button>
                        <button className="btn text-white btn-success btn-sm">Proccess</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyedProducts;