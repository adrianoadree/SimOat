import '../App.css'
import Footer from '../Components/Footer';

const OurProducts = () => {
    return (
        <>
            <div style={{ backgroundColor: '#D8D2C2' }}>
                <div className='container' style={{ marginTop: '150px', paddingTop: '100px', paddingBottom: '100px' }}>
                    <h1 className='header text-center mb-4'>Our List of Products</h1>
                    <div className='page-content'>
                        <h2 className='subheading'>
                            We're now offering 3 flavors:
                        </h2>
                        <div>
                            <ul style={{ fontSize: '24px' }}>
                                <li>
                                    <p><b>🍓BNK</b> - Berries 'n Kakao</p>
                                </li>
                                <li>
                                    <p><b>🥭H&M</b> - Honey & Mango Yogurt</p>
                                </li>
                                <li>
                                    <p><b>🍌ABC</b> - Almond Banana Chocolate</p>
                                </li>
                            </ul>
                            <p>
                                These SimOat flavors contain 480kcal~ per container(300g~)!
                                For only P119, you can now enjoy a Simoat whether it's your breakfast, lunch, dinner, or just a snack. SimOat sa sarap!
                            </p>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default OurProducts;