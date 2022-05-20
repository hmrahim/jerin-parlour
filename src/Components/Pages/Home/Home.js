import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='w-full lg:w-11/12 mx-auto px-6'>
           <Banner/>
           <Services/>
           <Testimonials/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default Home;