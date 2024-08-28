import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import webDevelop from '../../assets/logo/webDevelop.svg';
import videoEditor from '../../assets/logo/video-editor.svg'
import logoMaker from '../../assets/logo/logoMaker.svg'
import desainGraphic from '../../assets/logo/design.svg'

function Service() {
    const [flippedCardIndex, setFlippedCardIndex] = useState(null);

    // Updated card data structure with different images for front and back
    const cardData = [
        {
            front: ['PEMBUATAN WEB', 'Layanan pembuatan situs web secara menyeluruh: mencakup desain, pengembangan, dan optimasi untuk menghasilkan situs yang menarik, responsif, dan efektif dalam mencapai tujuan bisnis Anda.'],
            frontImageUrl: webDevelop,
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back1'
        },
        {
            front: ['EDIT VIDEO', 'Layanan editing video profesional: mencakup penyuntingan, penyesuaian, dan penyempurnaan untuk menghasilkan video yang berkualitas tinggi dan sesuai dengan kebutuhan Anda.'],
            frontImageUrl: videoEditor,
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back2'
        },
        {
            front: ['DESAIN LOGO', 'Layanan desain logo profesional: menciptakan identitas visual yang unik dan representatif untuk memperkuat citra merek Anda.'],
            frontImageUrl: logoMaker,
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back3'
        },
        {
            front: ['DESAIN GRAFIS', 'Layanan desain grafis: solusi kreatif untuk berbagai kebutuhan visual, dari branding hingga materi promosi dan desain pribadi.'],
            frontImageUrl: desainGraphic,
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back3'
        }
    ];

    const handleCardClick = (index) => {
        setFlippedCardIndex(flippedCardIndex === index ? null : index);
    };

    return (
        <>
            <h1>Layanan</h1>
            <div className="deskripsi">
                <div className="detail-deskripsi">
                    <p>
                        {/* I offer a range of services for SMEs, including website
                        creation, video editing, logo design, and graphic design,
                        to meet all your business needs. */}
                        Saya menawarkan berbagai layanan untuk UMKM,
                        termasuk pembuatan website, video editing,
                        desain logo, dan desain grafis, untuk memenuhi
                        semua kebutuhan bisnis Anda.
                    </p>
                </div>
            </div>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <ReactCardFlip
                        key={index}
                        isFlipped={flippedCardIndex === index}
                        flipDirection="horizontal"
                        containerStyle={{ width: '200px', height: '200px' }}
                    >
                        <div className="card front" onClick={() => handleCardClick(index)}>
                            <img src={card.frontImageUrl} alt="Card Front" className="card-image" />
                            <h3>{card.front[0]}</h3>
                        </div>
                        <div className="card back" onClick={() => handleCardClick(index)}>
                            <h6>{card.front[1]}</h6>
                        </div>
                    </ReactCardFlip>
                ))}
            </div>
        </>
    );
}

export default Service;