import React, { useState, useEffect } from 'react';

function Project() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalImage, setModalImage] = useState(''); // New state for image URL

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

    const openModal = (content, image) => {
        setModalContent(content);
        setModalImage(image); // Set the image URL
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleModalContentClick = (e) => {
        e.stopPropagation(); // Prevent the modal from closing when clicking inside the content
    };

    return (
        <>
            <h1>Portofolio</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor
                massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh
                libero pharetra tristique.
            </p>
            <div className="filter">
                <div className="filter-container">
                    <button
                        className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => handleClick('all')}
                    >
                        All
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
                        Video Editor
                    </button>
                </div>
            </div>

            <div className="content-container">
                <div className="content-item desain-grafis"
                onClick={() =>
                openModal('Desain Grafis Content',
                'https://via.placeholder.com/600x400')}>
                    Desain Grafis
                </div>
                <div className="content-item website"
                onClick={() =>
                openModal('Website Content',
                'https://via.placeholder.com/600x400')}>
                    Website
                </div>
                <div className="content-item video"
                onClick={() =>
                openModal('Video Editor Content',
                'https://via.placeholder.com/600x400')}>
                    Video Editor
                </div>
                <div className="content-item desain-grafis"
                onClick={() =>
                openModal('Desain Grafis Content',
                'https://via.placeholder.com/600x400')}>
                    Desain Grafis
                </div>
                <div className="content-item website"
                onClick={() =>
                openModal('Website Content',
                'https://via.placeholder.com/600x400')}>
                    Website
                </div>
                <div className="content-item video"
                onClick={() =>
                openModal('Video Editor Content',
                'https://via.placeholder.com/600x400')}>
                    Video Editor
                </div>
                <div className="content-item desain-grafis"
                onClick={() =>
                openModal('Desain Grafis Content',
                'https://via.placeholder.com/600x400')}>
                    Desain Grafis
                </div>
                <div className="content-item website"
                onClick={() =>
                openModal('Website Content',
                'https://via.placeholder.com/600x400')}>
                    Website
                </div>
                <div className="content-item video"
                onClick={() =>
                openModal('Video Editor Content',
                'https://via.placeholder.com/600x400')}>
                    Video Editor
                </div>
                <div className="content-item desain-grafis"
                onClick={() =>
                openModal('Desain Grafis Content',
                'https://via.placeholder.com/600x400')}>
                    Desain Grafis
                </div>
                <div className="content-item website"
                onClick={() =>
                openModal('Website Content',
                'https://via.placeholder.com/600x400')}>
                    Website
                </div>
                <div className="content-item video"
                onClick={() =>
                openModal('Video Editor Content',
                'https://via.placeholder.com/600x400')}>
                    <img src="" alt="iu" />
                </div>

            </div>

            {modalVisible && (
                <div className="modal" onClick={closeModal}>
                    <div className="overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={handleModalContentClick}>
                            {modalImage && <img src={modalImage} alt="Modal Content" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />}
                            <h3>{modalContent}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Project;
