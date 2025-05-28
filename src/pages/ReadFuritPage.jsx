import React from 'react';
import { useParams } from 'react-router-dom';
import { fruits } from '../data/productdata';

const ReadFuritPage = () => {
  const { id } = useParams();

  // Convert id to number if your fruit.id is a number
  const fruitDetail = fruits.find(fruit => fruit.id.toString() === id);

  if (!fruitDetail) {
    return (
      <div className="p-4 text-red-600">
        Fruit not found.
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 justify-items-center  m-auto">
        <img className="rounded-t-lg w-full h-70 object-cover" src={fruitDetail.image} alt={fruitDetail.title} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {fruitDetail.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {fruitDetail.description}
          </p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadFuritPage;
