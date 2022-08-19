import React from 'react'
import { Link} from 'react-scroll'

const CtaSection = (props) => {
    return (
        <div className="upper-contact-area">
            <div className="container">
                <div className="contact-grids">
                    <div className="row align-items-center">
                        <div className="col col-lg-6">
                            <h2>Send me a message and make something together.</h2>
                        </div>
                        <div className="col col-lg-6">
                            <div className="send-message-btn">
                                <Link className="theme-btn" to="contact" spy={true} smooth={true} duration={500}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="left-shape"></div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;