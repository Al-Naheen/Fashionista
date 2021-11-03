import React from 'react'
import Header from '../components/Header'

const Contactus = () => {
    return (
        <div style={{ background: 'rgb(243 243 243)' }}>
            <Header></Header>
            {/* Start Contact */}
            <section id="contact-us" className="contact-us section">
                <div className="container">
                    <div className="contact-head">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-xs-12 mb-3">
                                <div className="single-head">
                                    <div className="single-info" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <i className="fa fa-phone" />
                                        <h4 className="title">Call us Now: </h4>
                                        <ul style={{ textAlign: 'center' }}>
                                            <li>+123 456-789-1120</li>
                                            <li>+522 672-452-1120</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12 mb-3">
                                <div className="single-head">
                                    <div className="single-info" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <i className="fa fa-envelope-open  fa-3x" />
                                        <h4 className="title">Email: </h4>
                                        <ul style={{ textAlign: 'center' }}>
                                            <li><a href="mailto:info@yourwebsite.com">info @yourwebsite.com</a></li>
                                            <li><a href="mailto:info@yourwebsite.com">support @yourwebsite.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12 mb-3">
                                <div className="single-head">
                                    <div className="single-info" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <i className="fa fa-location-arrow" />
                                        <h4 className="title">Our Address: </h4>
                                        <ul style={{ textAlign: 'center' }}>
                                            <li>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/ End Contact */}
            {/* Map Section */}
            <div className="container mb-5 pb-5 map-section">
                <h3>My React Map</h3>
            </div>
            {/*/ End Map Section */}
        </div>
    )
}

export default Contactus
