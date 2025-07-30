
import '../Assets/SIMOAT-logo-ver2.png';
import '../custom.css'; // adjust path if needed

import { Outlet, Link } from "react-router-dom";

const Navigation = () => {



    return (
        <>
            <nav className='navstyle'>
                <div className='nav-logo'>
                    <Link to="/">
                        <img src={require('../Assets/SIMOAT-logo-ver2.png')} style={{ maxHeight: '130px' }} alt='Logo'></img>
                    </Link>
                </div>
                <div className='text-link-container' >
                    <a className='text-link' href="*">Why SimOat?</a>
                    <a className='text-link' href="*">Our Flavors</a>
                    <a className='text-link' href="*">How It Works</a>
                    <a className='text-link' href="*">Sustainability Commitment</a>
                </div>
            </nav>
            <Outlet />
        </>

    )

};

export default Navigation;


