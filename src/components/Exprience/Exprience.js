import React from 'react'

// Logos
import sit from '../../images/work/sit.png'
import felixideas from '../../images/work/felixideas.png'
import udacity from '../../images/work/udacity.png'
import imi from '../../images/work/imi.png'
import self from '../../images/work/selfwork.png'
import headswap from '../../images/work/headswap.png'
import salesforce from '../../images/salesforce.png'

// Certificates and Work Experience
import sitCert from '../../images/work/CertificateSIT.pdf'
import felixCert from '../../images/work/ArbeitszeugnisJF.pdf'
import udacityCert from '../../images/work/Udacity.pdf'
import imiCert from '../../images/work/BA.pdf'

import SectionTitle from '../SectionTitle/SectionTitle'

const Expriences = [
    {
        date: 'May 2024',
        logo: salesforce,
        position: 'Certified Salesforce Administrator',
        companyName: 'Bergen, NL',
        workFrom: '(Remote)',
        link: '',
    },{
        date: 'Dec 2023 - Feb 2024',
        logo: headswap,
        position: 'Low Code Traineeship and Salesforce Admin',
        companyName: 'Zurich, CH',
        workFrom: '(Remote)',
        link: 'https://headswap.com/',
    },{
        date: 'May 2022 - Dec 2024',
        logo: self,
        position: 'Self Development Vue, React, Node, Django, Python',
        companyName: 'Bern, CH',
        workFrom: '(Remote)',
        link: '',
    },
    {
        date: 'Feb - Apr 2022',
        logo: sit,
        position: 'Full-Stack Bootcamp',
        companyName: 'SIT Academy, Zurich, CH',
        workFrom: 'On Site',
        link: sitCert,
    },
    {
        date: 'Feb - Aug 2018',
        logo: felixideas,
        position: 'Software Engineer Intern, Assistant Trainer',
        companyName: 'felixideas GmbH, Basel, CH',
        workFrom: 'On Site',
        link: felixCert,
    },
    {
        date: 'Oct 2017 - May 2018',
        logo: udacity,
        position: 'Front End Developer Nanodegree',
        companyName: 'Udacity, Basel, CH',
        workFrom: '(Remote)',
        link: udacityCert,
    },
    {
        date: 'Sep 2011 - Jun 2013',
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
                                <li className="link"><a href={exprience.link} target="_blank">More Info...</a></li>
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