import img1 from '../../../assets/01.jpg';

const Banner = () => {

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col-reverse lg:flex-row  justify-center items-center">
                    <div>
                        <h1 className="text-5xl font-bold text-center">Box Office News!</h1>
                        <p className="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='flex justify-center items-center'>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className=" rounded-lg  lg:w-1/2" />
                </div>
            </div>
        </>
    );
};

export default Banner;