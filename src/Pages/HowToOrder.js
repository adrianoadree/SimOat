import Footer from '../Components/Footer';
import Video from '../Components/Video';


const HowToOrdder = () => {
    return (
        <>
            <div style={{ backgroundColor: '#D8D2C2' }}>
                <div className='container' style={{ marginTop: '150px', paddingTop: '100px', paddingBottom: '100px' }}>
                    <h1 className='header'>How to Order SimOat?</h1>
                    <div className='page-content'>
                        <h2 className='subheading'>Please Note</h2>
                        <div>
                            <h3 >Available at Brixton Place Only</h3>
                            <p>
                                SimOats is currently available only to residents of Brixton Place, and we are unable to deliver outside the condominium.                            </p>

                            <h3>How We Deliver</h3>
                            <p>
                                We offer two convenient delivery options:
                            </p>
                            <ul>
                                <li>
                                    Door-to-door delivery right at your unit
                                </li>
                                <li>
                                    Drop-off at your tower's designated food delivery table (ideal for Grab and other couriers)
                                </li>
                            </ul>

                            <h3>
                                How to Order
                            </h3>
                            <p>
                                Orders are coordinated via the Buy and Sell Residents' Viber Group, where we post nightly updates once fresh batches of our Overnight Oats are ready for reservation—perfect for enjoying the next day. Send us a message on Viber to reserve yours!                            </p>
                            <h3>
                                We accept
                            </h3>
                            <p>
                                Payment Options
                            </p>
                            <img className="img-fluid" src={require('../Assets/money-receiving-philippine-peso-color-icon.png')} style={{ maxHeight: '130px' }} alt='Logo'></img>
                            <img className="img-fluid" src={require('../Assets/bank-transfer.png')} style={{ maxHeight: '130px' }} alt='Bank Transfer'></img>
                            <img className="img-fluid" src={require('../Assets/GCash-Logo-500x281.png')} style={{ maxHeight: '130px' }} alt='Gcash'></img>
                        </div>
                    </div>


                </div>
            </div>
            <Video />
            <Footer />
        </>
    );
};

export default HowToOrdder;