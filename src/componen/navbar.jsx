import React, { useState, useEffect } from 'react';
import { Link, scroller } from 'react-scroll';
import logo from './../assets/logo.svg'; // Pastikan path ke logo sudah benar
import { Sling as Hamburger } from 'hamburger-react'

function Navbar() {
    const [activeSection, setActiveSection] = useState('home'); // Menyimpan bagian yang aktif

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'service', 'project'];
            let currentSection = 'home'; // Default section

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        // Event listener untuk scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup listener saat komponen unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isOpen, setOpen] = useState(false)
    const [color, setColor] = useState("#000")


    const togglePosition = () => {
        setOpen(prevOpen => !prevOpen)
        setColor(isOpen ? "#000" : "#fff")
    }
    

    return (
        <>
            <div className="main-nav desktop">
            <div className="navbar">
                <Link
                    to='home'
                    smooth={true}
                    duration={500}
                    id="logo"
                >
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="nav">
                    <div className="nav-item">
                        <ul>
                            <li>
                                <Link
                                    to='home'
                                    smooth={true}
                                    duration={500}
                                    className={`navlink ${activeSection === 'home' ? 'active-nav' : ''}`}
                                    onClick={() => setActiveSection('home')}
                                    spy={true}
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='about'
                                    smooth={true}
                                    duration={500}
                                    className={`navlink ${activeSection === 'about' ? 'active-nav' : ''}`}
                                    onClick={() => setActiveSection('about')}
                                    spy={true}
                                >
                                    Tentang
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='service'
                                    smooth={true}
                                    duration={500}
                                    className={`navlink ${activeSection === 'service' ? 'active-nav' : ''}`}
                                    onClick={() => setActiveSection('service')}
                                    spy={true}
                                >
                                    Layanan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='project'
                                    smooth={true}
                                    duration={500}
                                    className={`navlink ${activeSection === 'project' ? 'active-nav' : ''}`}
                                    onClick={() => setActiveSection('project')}
                                    spy={true}
                                >
                                    Portofolio
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <a className="kontak" href="https://wa.me/6287713863441" target='__blank'>Kontak</a>
                </div>
            </div>
        </div>

        <div className="navbar-android">
            <div id='top-hp'>
                <Hamburger color={color} toggled={isOpen} toggle={togglePosition} />
            </div>
            <div className={`navbar-hp ${isOpen ? 'open' : ''}`}>
                <div className={`nav-hp ${isOpen ? 'open' : ''}`}>
                    <ul>
                        {/* <div className="nav">
                            <Link>Logo</Link>

                            <a href="">HP</a>
                        </div> */}
                        <li>
                            <Link
                                to='home'
                                smooth={true}
                                duration={500}>Beranda</Link>
                        </li>
                        <li>
                            <Link
                            to='about'
                            smooth={true}
                            duration={500}>Tentang</Link>
                        </li>
                        <li>
                            <Link
                            to='services'
                            smooth={true}
                            duration={500}>Layanan</Link>
                        </li>
                        <li>
                            <Link
                            to='project'
                            smooth={true}
                            duration={500}>Portofolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;
