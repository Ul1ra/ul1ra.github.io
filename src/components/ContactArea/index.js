import React from 'react'
// import ContactForm from '../ContactFrom/ContactForm'
import SectionTitle from '../SectionTitle/SectionTitle';


const ContactArea = (props) => {
    return (
        <section className={`wpo-contact-area section-padding ${props.contactclass}`} id="contact">
            <div className="wpo-wpo-contact-form-map">
                <div className="container">
                    <div className="row align-items-center">
                        <SectionTitle Title={'Get in Contact with Me'} />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className="info-item col-5">
                                <h2>LinkedIn</h2>
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-linkedin"></i>
                                    </div>
                                    <div className="info-text">
                                        <span><a href='https://www.linkedin.com/in/benpetercunningham/'>My LinkedIn</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item col-5">
                                <h2>Github</h2>
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi ti-github"></i>
                                    </div>
                                    <div className="info-text">
                                        <span><a href='https://github.com/Ul1ra'>My Github</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="info-item col-5">
                                <h2>Dornach, Switzerland</h2>
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-location"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Address</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item col-5">
                                <h2>benpcunningham@outlook.com</h2>
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-mail"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Email</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info-item col-5">
                                <h2>+41 78 982 40 30</h2>
                                <div className="info-wrap">
                                    <div className="info-icon">
                                        <i className="fi flaticon-phone-call"></i>
                                    </div>
                                    <div className="info-text">
                                        <span>Personal Phone</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default ContactArea;