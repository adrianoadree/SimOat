
import React from 'react';
import oatvideo from '../Assets/ingredients-video.mp4';


const Video = () => {



    return (
        <div className='video-container' >
            <video autoPlay muted loop style={{ opacity: .5, width: '100%', marginBottom: '-7px' }}>
                <source src={oatvideo} type="video/mp4" style={{ opacity: .3 }} />
                Your browser does not support the video.
            </video>
            <div className="content p-5" style={{ width: '100%' }}>
                <div className='row'>
                    <div className='col-lg-5 p-5'>
                        <h2 >How Was Your SimOat?</h2>
                        <h5 className='subheading'>We value your opinion</h5>
                        <p className='mt-5'>Help us improve our overnight oats by sharing your experience below. Your feedback means a lot to us!</p>
                    </div>
                    <div className='col-lg-7 forms-box p-5 ' >
                        <form className='float-right'>
                            <input className='p-2' type="text" placeholder="Your Name" style={{ backgroundColor: 'transparent', width: "100%", borderRadius: '7px', border: '0.5px solid #B17457' }} />
                            <input className='mt-2 p-2' type="email" placeholder="ex: email@email.com" style={{ backgroundColor: 'transparent', width: "100%", borderRadius: '7px', border: '0.5px solid #B17457' }} />
                            <textarea className='mt-2 p-2' id="feedback" name="user_feedback" placeholder="Send us a feedback" style={{ backgroundColor: 'transparent', resize: 'none', width: "100%", height: '200px', borderRadius: '7px', border: '0.5px solid #B17457' }}></textarea>
                            <input className='cta mt-2' type="submit" value="Submit feedback" style={{ width: '100%' }} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default Video;


