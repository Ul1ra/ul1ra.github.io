import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";


const Pricing = (props) => {

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">
                        <SectionTitle Title={'Pricing Plan'} />
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Basic</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2>$120<span> / per month</span></h2>
                                        <p>Determine the Best Pricing Strategy For Your Business.</p>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Softwere Development</li>
                                            <li>Web Development</li>
                                            <li>Digital Marketing</li>
                                            <li>Graphic Design</li>
                                            <li>24/Support</li>
                                        </ul>
                                        <Link to="/">CHOOSE PLAN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Premium</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2>$210<span> / per month</span></h2>
                                        <p>Determine the Best Pricing Strategy For Your Business.</p>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Softwere Development</li>
                                            <li>Web Development</li>
                                            <li>Digital Marketing</li>
                                            <li>Graphic Design</li>
                                            <li>24/Support</li>
                                        </ul>
                                        <Link to="/">CHOOSE PLAN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Advanced</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2>$373<span> / per month</span></h2>
                                        <p>Determine the Best Pricing Strategy For Your Business.</p>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Softwere Development</li>
                                            <li>Web Development</li>
                                            <li>Digital Marketing</li>
                                            <li>Graphic Design</li>
                                            <li>24/Support</li>
                                        </ul>
                                        <Link to="/">CHOOSE PLAN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-p">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4213)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4213" x="0" y="0" width="1500" height="1500"
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

export default Pricing;