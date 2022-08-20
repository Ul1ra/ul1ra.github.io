import React from 'react'

// Logos
import sit from '../../images/work/sit.png'
import felixideas from '../../images/work/felixideas.png'
import udacity from '../../images/work/udacity.png'
import imi from '../../images/work/imi.png'

// Certificates and Work Experience
import sitCert from '../../images/work/CertificateSIT.pdf'
import felixCert from '../../images/work/ArbeitszeugnisJF.pdf'
import udacityCert from '../../images/work/Udacity.pdf'
import imiCert from '../../images/work/BA.pdf'

import SectionTitle from '../SectionTitle/SectionTitle'

import arrow from "../../images/icon/arrow-rightSM.png"

const Expriences = [
    {
        date: '2022 - 2022',
        logo: sit,
        position: 'Full-Stack Bootcamp',
        companyName: 'SIT Academy, Zurich, CH',
        workFrom: 'On Site',
        link: sitCert,
    },
    {
        date: '2017 - 2018',
        logo: felixideas,
        position: 'Software Engineer Intern, Assistant Trainer',
        companyName: 'felixideas GmbH, Basel, CH',
        workFrom: 'On Site',
        link: felixCert,
    },
    {
        date: '2017 - 2018',
        logo: udacity,
        position: 'Front End Developer Nanodegree',
        companyName: 'Udacity, Basel, CH',
        workFrom: '(Remote)',
        link: udacityCert,
    },
    {
        date: '2011 - 2013',
        logo: imi,
        position: 'BA in Hospitality Entrepreneurship',
        companyName: 'IMI, Lucerne, CH',
        workFrom: 'On Site',
        link: imiCert,
    },

]


const Exprience = (props) => {
    return (
        <div className="wpo-work-area section-padding" id='experience'>
            <div className="container">
                <SectionTitle Title={'My Experiences'} />
                <div className="wpo-work-wrap">
                    {Expriences.map((exprience, exp) => (
                        <div className="wpo-work-item" key={exp}>
                            <ul>
                                <li className="date">{exprience.date}</li>
                                <li className="logo"><img src={exprience.logo} alt=""/></li>
                                <li className="position">{exprience.position} <span>{exprience.companyName} <span>{exprience.workFrom}</span></span></li>
                                <li className="link"><img src={arrow}/><a href={exprience.link} target="_blank" rel="noreferrer">More info...</a></li>
                            </ul>
                        </div>
                    ))}
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
        </div>
    )
}

export default Exprience;