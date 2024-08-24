import logo from './../assets/logo.svg'
import { Link } from 'react-scroll';
// import styleCss from '../App.css';

function Navbar() {

    return (
        <>
            <div className="main-nav">
                <div className="navbar">
                    <Link to='home' smooth={true} duration={500} id="logo" href="">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="nav">
                        <div className="nav-item">
                            <ul>
                                <li><Link to='home' smooth={true} duration={500} className='navlink'>Home</Link></li>
                                <li><Link to='about' smooth={true} duration={500} className='navlink'>About</Link></li>
                                <li><Link to='service' smooth={true} duration={500} className='navlink'>Services</Link></li>
                                <li><Link to='project' smooth={true} duration={500} className='navlink'>Portofolio</Link></li>
                                {/* <li><Link to='testimoni' smooth={true} duration={500} className='navlink'>Testimonial</Link></li> */}
                            </ul>
                        </div>
                            <a className="kontak" href="#">Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
