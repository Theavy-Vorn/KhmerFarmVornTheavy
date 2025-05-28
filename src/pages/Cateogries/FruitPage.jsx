import React, { useEffect, useState } from 'react';
import { fruits } from '../../data/productdata';
import { Link } from 'react-router-dom';

const FruitPage = () => {
    let dataproduct =fruits;
    return (
        <div className='flex flex-col'>
            <div className='text-3xl font-bold text-center'>Fruits</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 justify-items-center gap-5 w-[85%] m-auto'>
                {
                    fruits.map((pro, index) => (
                        <div key={pro.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <a href={`fruits/${pro.id}`}>
                                <img className="rounded-t-lg" src={pro.image || "https://via.placeholder.com/300"} alt={pro.title} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pro.title}</h5>
                                </a>
                                <a href={`fruits/${pro.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
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

export default FruitPage;
