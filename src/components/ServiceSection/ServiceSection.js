import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Button } from '@material-ui/core'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from '../../api/service'
import classnames from 'classnames';
import ServiceSingle from '../ServiceSingle';

const ServiceSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }


    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div className={`wpo-service-area section-padding ${props.sClass}`} id='service'>
            <div className="container">
                <SectionTitle Title={'Popular Services'} />
                <div className="wpo-service-wrap">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={`${classnames({ active: activeTab === '1' })}`}
                                onClick={() => { toggle('1'); }}
                            >
                                Design
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${classnames({ active: activeTab === '2' })}`}
                                onClick={() => { toggle('2'); }}
                            >
                                Development
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={`${classnames({ active: activeTab === '3' })}`}
                                onClick={() => { toggle('3'); }}
                            >
                                Marketing
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row align-items-center">
                                {Services.slice(0, 3).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-service-item">
                                            <div className="icon">
                                                <i className={`fi ${service.icon}`}></i>
                                            </div>
                                            <h2>{service.sTitle}</h2>
                                            <p>{service.description}</p>
                                            <Button
                                                className="btn"
                                                onClick={() => handleClickOpen(service)}>
                                                Learn More
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row align-items-center">
                                {Services.slice(3, 6).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-service-item">
                                            <div className="icon">
                                                <i className={`fi ${service.icon}`}></i>
                                            </div>
                                            <h2>{service.sTitle}</h2>
                                            <p>{service.description}</p>
                                            <Button
                                                className="btn"
                                                onClick={() => handleClickOpen(service)}>
                                                Learn More
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="row align-items-center">
                                {Services.slice(6, 9).map((service, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className="wpo-service-item">
                                            <div className="icon">
                                                <i className={`fi ${service.icon}`}></i>
                                            </div>
                                            <h2>{service.sTitle}</h2>
                                            <p>{service.description}</p>
                                            <Button
                                                className="btn"
                                                onClick={() => handleClickOpen(service)}>
                                                Learn More
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
            <div className="ab-shape">
                <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4268)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4268" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </div>
    );
}

export default ServiceSection;