import React from 'react';

const FiltureComponent = () => {
    return (
        <div className='flex m-10'>
            <div className="m-auto">
                <div className='text-center text-2xl font-bold'>Trending</div>
                <div>    
                    <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
                        <li>
                            <a href="#" className="me-4 hover:underline md:me-6 ">Features</a>
                        </li>
                        <li>
                            <a href="#" className="me-4 hover:underline md:me-6">Latest</a>
                        </li>
                        <li>
                            <a href="#" className="me-4 hover:underline md:me-6 ">Best Saller</a>
                        </li>
                    
                    </ul>

                </div>

            </div>
            
        </div>
    );
}

export default FiltureComponent;
