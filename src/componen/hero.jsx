import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import tiktok from '../assets/tiktok.svg'
import frame from '../assets/border-profile.png'
import React from 'react'

function hero(){
    const instagram_url = 'https://www.instagram.com/mas_yos230'
    const linkedin_url = 'https://www.linkedin.com/in/moh-ngumar-al-faruk-9b6a94297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    const tiktok_url = 'https://www.tiktok.com/@alfaruk2629'

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
                    By integrating technical expertise with creative design, I am
                    committed to developing engaging and high-performance websites,
                    while continuously innovating to stay ahead of the latest technological
                    advancements
                        {/* Mengintegrasikan keahlian teknis dengan desain kreatif, saya
                        berkomitmen untuk mengembangkan situs web yang menarik dan
                        berkinerja tinggi, serta selalu berinovasi untuk mengikuti
                        perkembangan teknologi terbaru. */}
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
                <a href={instagram_url} title='instagram' target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="" />
                </a>
                <a href={linkedin_url} title='linkedin' target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" />
                </a>
                <a href={tiktok_url} title='tiktok' target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt="" />
                </a>
            </div>
        </div>
    </>
)
}

export default hero