import React from 'react';
import { vegitables } from '../../data/vegitabledata';
const VegitablePage = () => {
    const vegitabledata = vegitables;
    return (
        <div className='flex flex-col'>
            <div className='text-3xl font-bold text-center'>Vegitables</div>
            <div className='grid grid:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 justify-items-center gap-5 w-[85%] m-auto'>
                {
                    vegitables.map((pro)=>(
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href={`vegitables/${pro.id}`}>
                                <img class="rounded-t-lg" src={pro.image} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pro.title}</h5>
                                </a>
                                <a href={`vegitables/${pro.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))
                }
              

            </div>
        </div>
        
    );
}

export default VegitablePage;
