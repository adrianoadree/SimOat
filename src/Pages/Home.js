import Blade from '../Components/Blade';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import Video from '../Components/Video';
import '../custom.css';



const Home = () => {





    return (
        <div>

            <Banner />

            <Blade />
            <div className='row' style={{ color: 'white', height: '100%', backgroundColor: '#3c2f2f', argin: '0px' }}>
                <div className='col-lg-3 p-4'>
                    <h2 className='text-center p-3 align-middle' style={{ color: 'white' }}>
                        OUR LOCATION
                    </h2>
                    <p>Weston Tower, Brixton Place</p>
                    <p>Kapitolyo, Pasig</p>
                    <p>National Capital Region, 1603</p>
                </div>
                <div className='col-lg-9'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5192369574497!2d121.05194177510549!3d14.569463385913163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c983462fd633%3A0xfa09dbc2818c6499!2sBrixton%20Place%20(Weston%20Tower)!5e0!3m2!1sen!2sph!4v1753931724930!5m2!1sen!2sph"
                        title="Map showing our location"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        style={{
                            width: '100%',
                            height: '300px',
                            marginBottom: '-6px'
                        }}></iframe></div>
            </div>
            <div>




            </div>



            <Video />
            <Footer />
        </div>
    );
}
export default Home;
