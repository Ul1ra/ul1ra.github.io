import React from 'react'
import { Link } from 'react-scroll'
import MobileMenu from '../MobileMenu/MobileMenu'
import cv from '../../images/CVBenCunningham.pdf'


const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className="wpo-header-style-1">
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <h3 className="navbar-brand site-logo">Ben Cunningham</h3>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link></li>
                                        <li>
                                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</Link>
                                        </li>
                                        <li><Link activeClass="active" to="experience" spy={true} smooth={true} duration={500}>Experience</Link></li>
                                        <li>
                                            <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>Portfolio</Link>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-btn">
                                        <a onClick={ClickHandler} className="theme-btn" download="CV Ben Cunningham" href={cv}
                                            title="My CV">
                                            <img className="hide-img" alt="ImageName" src={cv} />
                                            My CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;