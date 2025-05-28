
import React from 'react';
import Navbar from '../components/NavbarComponent';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import SearchComponent from '../components/SearchComponent';
import ProductComponent from '../components/ProductComponent';
import PaginationComponent from '../components/PaginationComponent';
import FiltureComponent from '../components/FiltureComponent';
import CategoryComponent from '../components/CategoryComponent';
import SlideComponent from '../components/SlideComponent';
import FeedbackComponent from '../components/FeedbackComponent';

const HomePage = () => {
    return (
        <div className='w-full'>
           
            <CategoryComponent />
            <FiltureComponent />
            <ProductComponent />
            <PaginationComponent />
            <FeedbackComponent />
          
        </div>
    );
}

export default HomePage;
