import '../App.css'
import Footer from '../Components/Footer';

const OurProducts = () => {
    return (
        <>
            <div style={{ backgroundColor: '#D8D2C2' }}>
                <div className='container' style={{ marginTop: '150px', paddingTop: '100px', paddingBottom: '100px' }}>
                    <h1 className='header text-center mb-4'>Our List of Products</h1>
                    <div className='page-content'>
                        <h2 className='subheading'>Please Note</h2>
                        <div>
                            <h3 >Available at Brixton Place Only</h3>
                            <p>
                                SimOats is currently available only to residents of Brixton Place, and we are unable to deliver outside the condominium.                            </p>
                            <hr></hr>
                            <h3 className='mt-5'>Step 1: Join the Viber Group</h3>
                            <p>
                                Join the Buy and Sell Residents' Viber Group to place your order.
                                To join, simply ask the Brixton Place PMO (Property Management Office) for access.
                            </p>
                            <p>
                                This group is where we post daily updates and manage order reservations for our Overnight Oats.

                            </p>
                            <h3 className='mt-4'>
                                Step 2: Watch for the Nightly Post
                            </h3>
                            <p>
                                Every evening, we post a message in the group once a new batch of our freshly made Overnight Oats is ready for reservation.
                                Keep an eye out — they go fast!
                            </p>
                            <h3 className='mt-4'>
                                Step 3: Reserve Your Order
                            </h3>
                            <p>
                                Once you see our post:
                                📲 Send us a direct message on Viber to reserve your cups.
                                Orders are handled on a first come, first served basis.                            </p>
                            <h3 className='mt-4'>
                                Step 4: Choose Your Delivery Option
                            </h3>
                            <p>
                                You have two ways to receive your order:
                            </p>
                            <ul>
                                <li>
                                    Door-to-door delivery right at your unit
                                </li>
                                <li>
                                    Drop-off at your tower's designated food delivery table (ideal for Grab and other couriers)
                                </li>
                            </ul>
                            <h3 className='mt-4'>
                                Step 5: Pay for Your Order
                            </h3>
                            <p>
                                We accept the following payment methods:
                            </p>
                            <p>
                                Payment Options
                            </p>
                            <img className="img-fluid" src={require('../Assets/money-receiving-philippine-peso-color-icon.png')} style={{ maxHeight: '130px' }} alt='cash'></img>
                            <img className="img-fluid" src={require('../Assets/bank-transfer.png')} style={{ maxHeight: '130px' }} alt='Bank Transfer'></img>
                            <img className="img-fluid" src={require('../Assets/GCash-Logo-500x281.png')} style={{ maxHeight: '130px' }} alt='Gcash'></img>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default OurProducts;