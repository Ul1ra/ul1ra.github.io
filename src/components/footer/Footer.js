import React from 'react'
import { Link} from 'react-scroll'
// import Logo from '../../images/logo.png'
// import CtaSection from '../ctaSection/ctaSection'

// Social Media Icons
import Github from "../../images/footer/github64.png"
import Linkedin from "../../images/footer/linkedin64.png"
import Email from "../../images/footer/email64.png"

const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer" id='footer'>
            {/* <CtaSection/> */}
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className="site-logo" to="/">Ben Cunningham</Link>
                                </div>
                                <h4>Thanks for having a look, to see more about me, please click on the following links.</h4>
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="https://github.com/Ul1ra" target="_blank"><img className='fi size' src={Github}/></a></li>
                                        <li><a href="https://www.linkedin.com/in/benpetercunningham/" target="_blank"><img className='fi size' src={Linkedin} /></a></li>
                                        <li><a href="mailto:benpcunningham@outlook.com"><img className='size' src={Email}/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-shape">
                    <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="separator"></div>
                        <p className="copyright">Copyright &copy; 2022 Ben Cunningham All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;