import React from 'react';
import './image-card.scss';

const ImageCard = ({card}) => {
    return (
        <div className="image-container">
                <img  className="image-container-image" src={card.url}/>
        </div>
    )
}

export default ImageCard;
