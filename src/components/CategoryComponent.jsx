import React from 'react';
import { Link } from 'react-router-dom';

const CategoryComponent = () => {
  return (
    <div className="w-full p-5">
      {/* Centered Heading */}
      <h1 className="text-2xl font-bold text-center mb-6">Category</h1>

      {/* Centered Images */}
      <div className="flex flex-wrap justify-center gap-30 max-w-screen-md mx-auto">
        <div>
         
         <Link to="/vegitableproduct">
           <img
            src="https://i.pinimg.com/736x/3c/40/bb/3c40bb6fd71bd9218f55980c27fda62c.jpg"
            alt=""
            className="w-60 h-auto object-cover"
          />
         </Link>
        </div>
        <div>
         <Link to="/fruitproduct">
          <img
            src="https://i.pinimg.com/736x/5a/7d/bf/5a7dbfbfe0b0b64d433bafc9b9e5bbea.jpg"
            alt=""
            className="w-60 h-auto object-cover"
          />
         </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
