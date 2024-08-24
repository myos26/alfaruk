import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';


function Service() {
    const [flippedCardIndex, setFlippedCardIndex] = useState(null);

    // Updated card data structure with different images for front and back
    const cardData = [
        {
            front: ['halo', 'hai'],
            frontImageUrl: 'https://via.placeholder.com/200x100?text=Front1',
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back1'
        },
        {
            front: ['masuk', 'keluar'],
            frontImageUrl: 'https://via.placeholder.com/200x100?text=Front2',
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back2'
        },
        {
            front: ['aku', 'rindu'],
            frontImageUrl: 'https://via.placeholder.com/200x100?text=Front3',
            backImageUrl: 'https://via.placeholder.com/200x100?text=Back3'
        },
        {
            front: ['aku', 'rindu'],
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
                            <h1>{card.front[0]}</h1>
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