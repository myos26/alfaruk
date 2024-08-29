import React, { useState } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import tiktok from '../assets/tiktok.svg';
import frame from '../assets/border-profile.png';

function Hero() {
  const [loading, setLoading] = useState(false);

  const instagram_url = 'https://www.instagram.com/mas_yos230';
  const linkedin_url = 'https://www.linkedin.com/in/moh-ngumar-al-faruk-9b6a94297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const tiktok_url = 'https://www.tiktok.com/@alfaruk2629';

  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create a temporary anchor element and initiate the download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1fnCuv1ioUrV0abZQfRH37eSJfV6yqnNm';
    link.download = 'CV'; // Customize the file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Start polling to check download status
    checkDownloadStatus();
  };

  const checkDownloadStatus = async () => {
    try {
      // Replace this URL with your actual status endpoint
      const response = await fetch('https://example.com/status');
      if (response.ok) {
        const status = await response.json();
        if (status.downloadComplete) {
          setLoading(false);
          // File download is complete
        } else {
          setTimeout(checkDownloadStatus, 1000); // Check status every 1 second
        }
      } else {
        console.error('Failed to check status');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error checking download status:', error);
      setLoading(false);
    }
  };

  return (
    <div className='hero'>
      <div className="hero-item">
        <div className="hero-left">
          <h4>Hai, Saya</h4>
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
            <a className="hireMe" href="https://wa.me/6287713863441" target='__blank'>
              Hire Me
            </a>
            <a
              className={`downloadCV ${loading ? 'hidden' : ''}`}
              href="#"
              onClick={handleDownload}
            >
              Download CV
            </a>
            {loading && (
              <div className="loader">
                <BeatLoader
                  color="#fdfd53"
                  loading={loading}
                  size={15}
                />
              </div>
            )}
          </div>
        </div>
        <div className="hero-right">
          <div className="frame">
            <img src={frame} alt="FOTOKU" />
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <a href={instagram_url} title='Instagram' target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href={linkedin_url} title='LinkedIn' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href={tiktok_url} title='TikTok' target="_blank" rel="noopener noreferrer">
          <img src={tiktok} alt="TikTok" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
