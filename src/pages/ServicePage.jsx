import React from 'react';

const ServicePage = () => {
    return (
        <div className='flex w-full flex-col'>
            <div className='text-center text-2xl font-bold m-5'>Two Services</div>
                <div className='grid grid-cols-1 lg:grid-cols-2 p-5 justify-items-center gap-5 w-[50%] m-auto'>      
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                        <a href="#">
                            <img className="rounded-full w-32 h-32 m-auto mt-5" src="https://i.pinimg.com/736x/53/a1/16/53a116dd11bb211c40dca69af999a071.jpg"   alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Owner</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black-400">Address : St21a Preak Ambel Village Preak Ambel Comminue Saang District Kandel Province. </p>
                            <p>Map : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d322869.4267628549!2d104.76387904830098!3d11.55551262032767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1748425470888!5m2!1sen!2skh"></iframe></p>
                           
                        </div>
                    </div>

                     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                        <a href="#">
                            <img className="rounded-full w-32 h-32 m-auto mt-5" src="https://i.pinimg.com/736x/a5/1b/fb/a51bfbc24358fa81ecc2bd101a12def8.jpg"   alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Online</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black-400">Facebook Page : V.V.6 , Vorn Theavy
                                <p>Telegram : @VyvySt218</p>
                            </p>
                           
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ServicePage;
