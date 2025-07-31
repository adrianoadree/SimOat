import React from 'react';
import '../Assets/SIMOAT-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {



    return (
        <div id="footer" style={{ paddingTop: '90px', padding: '40px 0' }}>
            <div className="container">
                <div className="row text-start mb-4">
                    <div className="col-lg-3">
                        <img src={require('../Assets/SIMOAT-logo-white.png')} style={{ maxHeight: '200px' }} alt='Logo'></img>
                    </div>
                    <div className="col-lg-6 mb-3 mb-lg-0" >
                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <h2 style={{ fontWeight: '400', color: 'white' }}>SimOat Location</h2>
                        </div>
                        <div style={{ color: '#FAF7F0' }}>
                            <p style={{ fontSize: '18px' }}>
                                <FontAwesomeIcon icon={faLocationArrow} style={{ color: '#B17457' }} />
                                <span> Weston Tower, Brixton Place, Kapitolyo, Pasig </span>
                            </p>
                            <p style={{ fontSize: '18px' }}>
                                <FontAwesomeIcon icon={faPhone} style={{ color: '#B17457' }} />
                                <span> 0917-xxx-xxxx </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 style={{ fontWeight: '600', color: '#9a918b' }}>Follow us</h5>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '10px', fontSize: '32px' }}>
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#B17457' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#B17457' }} />
                            <FontAwesomeIcon icon={faViber} style={{ color: '#B17457' }} />
                        </div>
                    </div>
                </div>
                <hr style={{ borderTop: '1px solid #ccc' }} />
                <div className="text-center">
                    <p style={{ fontSize: '0.9rem', color: '#9a918b', marginBottom: 0 }}>Copyright © 2025 <a target='blank' href='https://aadriano-portfolio.vercel.app/' style={{ color: '#afa9a5ff' }}>A-Adrian</a></p>
                </div>
            </div>
        </div>
    )

};

export default Footer;


