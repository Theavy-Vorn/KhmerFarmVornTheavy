import React from 'react';

const FeedbackComponent = () => {
    return (
        <div className='flex w-full flex-col'>
            <div className='text-center text-2xl font-bold m-5'>Feedback Customer</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 justify-items-center gap-5 w-[75%] m-auto'>      
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                        <a href="#">
                            <img className="rounded-full w-32 h-32 m-auto mt-5" src="https://i.pinimg.com/736x/06/2c/91/062c91d9a1d2a0c8332863884c7314d8.jpg"   alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">IU</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black-400">Lee Ji-eun (Korean: 이지은; born May 16, 1993), also known by her stage name IU (아이유), is a South Korean singer-songwriter and actress.</p>
                           
                        </div>
                    </div>

                     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                        <a href="#">
                            <img className="rounded-full w-32 h-32 m-auto mt-5" src="https://i.pinimg.com/736x/a0/b9/ec/a0b9ec7ff860dbc808a6370f043c5f12.jpg"   alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Suzy</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black-400">Bae Suzy or known mononymously as Suzy, is a South Korean singer and actress. She is a former member of the girl group Miss A under JYP Entertainment.</p>
                           
                        </div>
                    </div>

                     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                        <a href="#">
                            <img className="rounded-full w-32 h-32 m-auto mt-5" src="https://i.pinimg.com/736x/f5/4c/85/f54c85d15134e02dc1040085ab766e03.jpg"   alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black text-center">Gayoung</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black-400">Moon Ga-young (Korean: 문가영; born July 10, 1996) is a South Korean actress and model. In 2005, she started on her career as a child model.</p>
                           
                        </div>
                    </div>                   
                                       



            </div>
        </div>
    );
}

export default FeedbackComponent;
