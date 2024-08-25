import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import webDevelop from '../../assets/logo/webDevelop.svg';
import videoEditor from '../../assets/logo/video-editor.svg'
import logoMaker from '../../assets/logo/logoMaker.svg'

function Service() {
    const [flippedCardIndex, setFlippedCardIndex] = useState(null);

    // Updated card data structure with different images for front and back
    const cardData = [
        {
            front: ['DEVELOPMENT', 'hai'],
            frontImageUrl: webDevelop,
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back1'
        },
        {
            front: ['VIDEO EDITING', 'keluar'],
            frontImageUrl: videoEditor,
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back2'
        },
        {
            front: ['LOGO DESIGN', 'rindu'],
            frontImageUrl: logoMaker,
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back3'
        },
        {
            front: ['DESAIN GRAPHIC', 'rindu'],
            frontImageUrl: 'https://via.placeholder.com/200x100?text=Front3',
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back3'
        },
        {
            front: ['DEVELOPMENT', 'hai'],
            frontImageUrl: webDevelop,
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back1'
        },
        {
            front: ['VIDEO EDITING', 'keluar'],
            frontImageUrl: 'https://via.placeholder.com/200x100?text=Front2',
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back2'
        },
        {
            front: ['LOGO DESIGN', 'rindu'],
            frontImageUrl: 'https://via.placeholder.com/200x100?text=Front3',
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back3'
        },
        {
            front: ['DESAIN GRAPHIC', 'rindu'],
            frontImageUrl: 'https://via.placeholder.com/200x100?text=Front3',
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back3'
        }
    ];

    const handleCardClick = (index) => {
        setFlippedCardIndex(flippedCardIndex === index ? null : index);
    };

    return (
        <>
            <h1>Services</h1>
            <div className="deskripsi">
                <div className="detail-deskripsi">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor
                        massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh
                        libero pharetra tristique.
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