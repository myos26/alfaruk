import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import tiktok from '../assets/tiktok.svg'
import frame from '../assets/border-profile.png'
import React from 'react'

function hero(){
return(
    <>
        <div className='hero'>
            <div className="hero-item">
                <div className="hero-left">
                    <h4>Hi, I am</h4>
                    <h3>Al Faruk</h3>
                    <h1>Web Developer</h1>
                    <h1>& Designer</h1>
                    <p>
                        Mengintegrasikan keahlian teknis dengan desain kreatif, saya
                        berkomitmen untuk mengembangkan situs web yang menarik dan
                        berkinerja tinggi, serta selalu berinovasi untuk mengikuti
                        perkembangan teknologi terbaru.
                    </p>
                    <div className="cta">
                            <a className="hireMe" href="">
                                Hire Me
                            </a>
                            <a className="downloadCV" href="">
                                Download CV
                            </a>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="frame">
                        <img src={frame} alt="FOTOKU" />
                    </div>
                </div>
            </div>
            <div className="hero-footer">
                <a href="http://" title='instagram' target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="" />
                </a>
                <a href="http://" title='linkedin' target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" />
                </a>
                <a href="http://" title='tiktok' target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt="" />
                </a>
            </div>
        </div>
    </>
)
}

export default hero