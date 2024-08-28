import React, { useState, useEffect } from 'react';
import bajuBis from '../../assets/portofolio/desain/desainBajuBis.jpg';
import bajuCustom from '../../assets/portofolio/desain/desainBajuPersonal.png';
import agyaa from '../../assets/portofolio/video/agya.png'
import logoZ from '../../assets/portofolio/desain/logoZia.png'
import logoJadiTrip from '../../assets/portofolio/desain/Jeep warna bPutih.png'
import logoVB from '../../assets/portofolio/desain/VB Travel logo.png'
import vector1 from '../../assets/portofolio/desain/vector1.jpg'
import vector2 from '../../assets/portofolio/desain/vector2.jpg'
import corona from '../../assets/portofolio/desain/pamflet himbauan.jpg'
import promosi from '../../assets/portofolio/desain/vbali.png';
import patiunus from '../../assets/portofolio/web/patiunus.jpg';
import jaditrip from '../../assets/portofolio/web/jaditrip.png';
import serbatau from '../../assets/portofolio/web/serbatau.png';


// Helper function to get YouTube thumbnail
const getYouTubeThumbnail = (url) => {
    const videoId = new URL(url).searchParams.get('v');
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
};

// Helper function to get Google Drive thumbnail
const getDriveThumbnail = (fileId) => `https://drive.google.com/thumbnail?id=${fileId}`;

// Helper function to extract Google Drive file ID
const getDriveFileId = (url) => {
    const match = url.match(/drive\.google\.com\/file\/d\/(.*)\/view/);
    return match ? match[1] : '';
};

function Project() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalImage, setModalImage] = useState('');
    const [modalLink, setModalLink] = useState(''); // Menyimpan URL tautan jika ada
    const [modalVideo, setModalVideo] = useState(''); // Menyimpan URL video jika ada

    const handleClick = (filter) => {
        setActiveFilter(filter);
    };

    useEffect(() => {
        const contentItems = document.querySelectorAll('.content-item');
        contentItems.forEach(item => {
            if (activeFilter === 'all' || item.classList.contains(activeFilter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }, [activeFilter]);

    const openModal = (content, image, link = '', video = '') => {
        setModalContent(content);
        setModalImage(image);
        setModalLink(link);
        setModalVideo(video); // Set URL video jika ada
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleModalContentClick = (e) => {
        e.stopPropagation(); // Prevent the modal from closing when clicking inside the content
    };

    const getYouTubeEmbedUrl = (url) => {
        const videoId = new URL(url).searchParams.get('v');
        return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    };

    return (
        <>
            <h1>Portofolio</h1>
            <div className="deskripsi">
                <div className="detail-deskripsi">
                    <p>
                        {/* View my collection of work that has helped clients achieve
                        their various goals. Each piece reflects my creativity and
                        expertise in tackling diverse design challenges and solutions. */}
                        Lihat koleksi karya saya yang telah membantu klien mencapai berbagai
                        tujuan mereka. Setiap karya mencerminkan kreativitas dan keahlian
                        saya dalam menghadapi tantangan dan solusi desain yang beragam.
                    </p>
                </div>
            </div>
            <div className="filter">
                <div className="filter-container">
                    <button
                        className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => handleClick('all')}
                    >
                        Semua
                    </button>
                    <button
                        className={`filter-button ${activeFilter === 'desain-grafis' ? 'active' : ''}`}
                        onClick={() => handleClick('desain-grafis')}
                    >
                        Desain Grafis
                    </button>
                    <button
                        className={`filter-button ${activeFilter === 'website' ? 'active' : ''}`}
                        onClick={() => handleClick('website')}
                    >
                        Website
                    </button>
                    <button
                        className={`filter-button ${activeFilter === 'video' ? 'active' : ''}`}
                        onClick={() => handleClick('video')}
                    >
                        Video Editing
                    </button>
                </div>
            </div>

            <div className="content-container">
                {/* ||||||||||||||||||||||||||||||||||||| DESAIN ||||||||||||||||||||||||||||||||||| */}
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Logo Mental Health (UBAYA)', logoZ, '')}>
                    <img src={logoZ} alt="Baju Komunitas Bus" />
                </div>
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Baju Komunitas Bus', logoJadiTrip, '')}>
                    <img src={logoJadiTrip} alt="Baju Komunitas Bus" />
                </div>
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Baju Komunitas Bus', logoVB, '')}>
                    <img src={logoVB} alt="Baju Komunitas Bus" />
                </div>
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Baju Komunitas Bus', vector1, '')}>
                    <img src={vector1} alt="Baju Komunitas Bus" />
                </div>
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Baju Komunitas Bus', vector2, '')}>
                    <img src={vector2} alt="Baju Komunitas Bus" />
                </div>
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Baju Komunitas Bus', promosi, '')}>
                    <img src={promosi} alt="Baju Komunitas Bus" />
                </div>
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Baju Komunitas Bus', corona, '')}>
                    <img src={corona} alt="Baju Komunitas Bus" />
                </div>
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Baju Komunitas Bus', bajuBis, '')}>
                    <img src={bajuBis} alt="Baju Komunitas Bus" />
                </div>
                <div className="content-item desain-grafis"
                    onClick={() => openModal('Baju Komunitas Bus', bajuCustom, '')}>
                    <img src={bajuCustom} alt="Baju Komunitas Bus" />
                </div>
                {/* -------------------------------------------------------------------------------- */}

                {/* |||||||||||||||||||||||||||||||||||||||| WEB ||||||||||||||||||||||||||||||||||||| */}
                <div className="content-item website"
                    onClick={() => openModal('Portal Berita Serbatau', patiunus, 'https://www.serbatau.web.id')}>
                    <img src={patiunus} alt="Portal Berita Serbatau" />
                </div>
                <div className="content-item website"
                    onClick={() => openModal('Portal Berita Serbatau', jaditrip, 'https://www.serbatau.web.id')}>
                    <img src={jaditrip} alt="Portal Berita Serbatau" />
                </div>
                <div className="content-item website"
                    onClick={() => openModal('Portal Berita Serbatau', serbatau, 'https://www.serbatau.web.id')}>
                    <img src={serbatau} alt="Portal Berita Serbatau" />
                </div>
                {/* -------------------------------------------------------------------------------- */}

                {/* ||||||||||||||||||||||||||||||||||||| VIDEO ||||||||||||||||||||||||||||||||||| */}

                <div className="content-item video"
                    onClick={() => {
                        const fileId = getDriveFileId('https://drive.google.com/file/d/11GhEUytFWCspyvmGkxApW1pICKMOwRE_/view?usp=drive_link');
                        openModal('(@vbalilux)', getDriveThumbnail(fileId), 'https://www.instagram.com/vbalilux', `https://drive.google.com/file/d/${fileId}/preview`);
                    }}>
                    <div className="thumbnail-container">
                        <img src={getDriveThumbnail('11GhEUytFWCspyvmGkxApW1pICKMOwRE_')} alt="Drive Video Thumbnail" className="video-thumbnail" />
                        <div className="play-button">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7L8 5z" fill="#fff"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="content-item video"
                    onClick={() => {
                        const fileId = getDriveFileId('https://drive.google.com/file/d/1PD-FGZQ6QfGGOTarNJIxm13xHOeRSRQ2/view?usp=drive_link');
                        openModal('(@vbalilux)', getDriveThumbnail(fileId), 'https://www.instagram.com/vbalilux', `https://drive.google.com/file/d/${fileId}/preview`);
                    }}>
                    <div className="thumbnail-container">
                        <img src={getDriveThumbnail('1PD-FGZQ6QfGGOTarNJIxm13xHOeRSRQ2')} alt="Drive Video Thumbnail" className="video-thumbnail" />
                        <div className="play-button">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7L8 5z" fill="#fff"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="content-item video"
                    onClick={() => {
                        const fileId = getDriveFileId('https://drive.google.com/file/d/1lImWCnhUcV7aTU2LreyYvVt25RRM5t7o/view?usp=drive_link');
                        openModal('(@vbalilux)', getDriveThumbnail(fileId), 'https://www.instagram.com/vbalilux', `https://drive.google.com/file/d/${fileId}/preview`);
                    }}>
                    <div className="thumbnail-container">
                        <img src={agyaa} alt="Drive Video Thumbnail" className="video-thumbnail" />
                        <div className="play-button">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7L8 5z" fill="#fff"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------- */}



                {/* <div className="content-item video"
                    onClick={() => openModal('YouTube Video Content', getYouTubeThumbnail('https://www.youtube.com/watch?v=O7bpziju9JE'), '', getYouTubeEmbedUrl('https://www.youtube.com/watch?v=O7bpziju9JE'))}>
                    <div className="thumbnail-container">
                        <img src={getYouTubeThumbnail('https://www.youtube.com/watch?v=O7bpziju9JE')} alt="YouTube Video Thumbnail" className="video-thumbnail" />
                        <div className="play-button">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5v14l11-7L8 5z" fill="#fff"/>
                            </svg>
                        </div>
                    </div>
                </div> */}
                {/* Tambah lebih banyak item sesuai kebutuhan */}
            </div>

            {modalVisible && (
                <div className="modal" onClick={closeModal}>
                    <div className="overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={handleModalContentClick}>
                            {modalImage && !modalVideo && (
                                <img
                                    src={modalImage}
                                    alt="Modal Content"
                                    style={{ width: '100%', height: 'auto', marginTop: '10px' }}
                                />
                            )}
                            {modalVideo && (
                                <div className="video-container">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={modalVideo}
                                        title="Video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )}
                            {modalLink ? (
                                <a href={modalLink} target="_blank" rel="noopener noreferrer">
                                    <h3>{modalContent}</h3>
                                </a>
                            ) : (
                                <h3>{modalContent}</h3>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Project;
