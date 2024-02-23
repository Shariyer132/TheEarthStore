import img1 from '../../../assets/images.jpeg';
import img2 from '../../../assets/21743888.jpg';
import { RxCross1 } from 'react-icons/rx';

import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const ShopingCart = () => {
    const CardAvailable = true;
    return (
        <>
            <h4 className="font-bold text-center bg-gray-300 mt-3 py-2 pl-2 mx-3">Shopping Cart</h4>

            <div className="flex flex-col gap-10 mt-10 lg:flex-row m-10">
                {
                    CardAvailable ?
                        // card available
                        <div className="lg:w-2/3 flex flex-col items-end gap-4">
                            {/* card one */}
                            <div className="card sm:card-side min-h-56 bg-base-100 max-w-3xl w-full shadow hover:shadow-xl">
                                <figure><img src={img1} className='rounded' alt="Movie" /></figure>
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <h2 className="card-title">HeadPhone</h2>
                                        <div className="tooltip tooltip-error tooltip-left" data-tip="Remove">
                                            <button className='hover:text-red-600 text-xl'><RxCross1 /></button>
                                        </div>
                                    </div>
                                    <p>$500</p>
                                    <div className="card-actions justify-end">
                                        <div className='py-3 border-2 px-4 flex rounded'>
                                            Quantity
                                            <span className='flex items-center justify-center pl-5 gap-3 text-base'>
                                                <button><GoChevronLeft className='text-2xl' /></button> 1 <button><GoChevronRight className='text-2xl' /></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* card two */}
                            <div className="card sm:card-side min-h-56 bg-base-100 max-w-3xl w-full shadow hover:shadow-xl">
                                <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className='rounded' alt="Movie" /></figure>
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <h2 className="card-title">HeadPhone</h2>
                                        <div className="tooltip tooltip-error tooltip-left" data-tip="Remove">
                                            <button className='hover:text-red-600 text-xl'><RxCross1 /></button>
                                        </div>
                                    </div>
                                    <p>$500</p>
                                    <div className="card-actions justify-end">
                                        <div className='py-3 border-2 px-4 flex rounded'>
                                            Quantity
                                            <span className='flex items-center justify-center pl-5 gap-3 text-base'>
                                                <button><GoChevronLeft className='text-2xl' /></button> 1 <button><GoChevronRight className='text-2xl' /></button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        // card not availble
                        <div className='flex items-end justify-end'>
                            <img src={img2} className='w-1/2 rounded' alt="" />
                        </div>

                }

                <div className="lg:w-1/3">
                    <div className="card lg:w-72 bg-base-100 shadow rounded">
                        <div className="card-body">
                            <p className='flex justify-between'><span>Subtotal</span> <span>$5499</span></p>
                            <p className='flex justify-between'><span>Shipping Charges</span> <span>$0</span></p>
                            <p className='flex justify-between'><span>Tax</span> <span>$990</span></p>
                            <p className='flex justify-between border-b pb-4'><span>Discount</span> <span>-$0</span></p>
                            <h2 className="card-title flex justify-between font-bold"><span>Total</span><span>$6489</span></h2>
                            <small className='text-end'>including VAT</small>
                            <input type="text" name="text" placeholder='Coupon Code' className='input input-bordered w-3/4' />
                            <button className="btn btn-primary">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopingCart;