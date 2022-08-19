// import React, { Fragment } from 'react';
import About from '../../components/about/about';
// import BlogSection from '../../components/BlogSection/BlogSection';
// import ContactArea from '../../components/ContactArea';
import Exprience from '../../components/Exprience/Exprience';
import Footer from '../../components/footer/Footer';
import Hero from '../../components/hero/hero';
import Navbar from '../../components/Navbar/Navbar'
// import Pricing from '../../components/Pricing/Pricing';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
// import ServiceSection from '../../components/ServiceSection/ServiceSection';
// import Testimonial from '../../components/Testimonial/Testimonial';

const HomePage = () => {
    return (
        <>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
            <Hero />
            <About />
            {/* <ServiceSection/> */}
            <Exprience />
            <ProjectSection />
            {/* <Testimonial/> */}
            {/* <Pricing/> */}
            {/* <ContactArea /> */}
            {/* <BlogSection/> */}
            <Footer />
            <Scrollbar />
        </>
    )
};
export default HomePage;