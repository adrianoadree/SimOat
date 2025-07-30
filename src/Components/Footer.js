import React from 'react';
import '../Assets/SIMOAT-logo.jpg';

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
                            <p style={{ fontSize: '18px' }}>📍Weston Tower, Brixton Place, Kapitolyo, Pasig</p>
                            <p style={{ fontSize: '18px' }}>📞 0917-XXX-XXXX</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 style={{ fontWeight: '600', color: '#4a3f35' }}>Follow us</h5>
                        <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                            <p style={{ margin: 0, color: '#7c6f65' }}>Facebook</p>
                            <p style={{ margin: 0, color: '#7c6f65' }}>Viber</p>
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


