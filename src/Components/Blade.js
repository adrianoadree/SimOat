
import React from 'react';
import '../Assets/Delicious-Yogurt-Parfaits-Spread.png'
import '../index.css';


const Blade = () => {



    return (
        <div className='container-fluid' style={{ backgroundColor: '#fcfdfd' }} >
            <div
                className="row justify-content-center align-items-center"
            >
                <div
                    className="col-lg-6 justify-content-center align-items-center"
                    style={{ minHeight: '100vh', textAlign: 'center' }}
                >
                    <div className='blade1-contents'>
                        <h1 className='header'>
                            Start Your Day Right with SimOat
                        </h1>
                        <h5 className='pt-3 subheading' >
                            Delicious, nutritious, and ready when you are — overnight oats made with fresh ingredients.
                        </h5>
                        <p className='pt-5 blade-content-inner'>
                            Wake up to a better breakfast with SimOat — overnight oats crafted with wholesome, fresh ingredients.
                            Whether you're rushing to work, hitting the gym, or enjoying a slow morning, SimOat makes it simple
                            to fuel your day the smart way.
                        </p>
                        <div className='align-left ' style={{ textAlign: 'left', marginTop: '2rem' }}>
                            <h3>Why Choose SimOat?</h3>
                            <ul className=''>
                                <li><p><b>Fresh Ingredients</b> – Made with real fruits, organic oats, and natural sweeteners.</p></li>
                                <li><p><b>Perfectly Prepped</b> – Ready-to-eat overnight oats, no cooking required.</p></li>
                                <li><p><b>Healthy and Satisfying</b> – High in fiber and protein to keep you full longer.</p></li>
                                <li><p><b>Eco-Friendly Packaging</b> – Convenient and sustainable containers you can reuse or recycle.</p></li>
                            </ul>
                        </div>
                    </div>
                    <a href="/about-simoat">
                        <button className='cta'>learn More</button>
                    </a>
                </div>
                <div className='col-lg-6 blade-img' >
                </div>
            </div>
        </div>
    )

};

export default Blade;


