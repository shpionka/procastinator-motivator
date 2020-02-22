import React from 'react';
import './image-card.scss';

const lazySlothCard = 'https://firebasestorage.googleapis.com/v0/b/procrastinator-motivator.appspot.com/o/sloth-4617460_1280.png?alt=media';
import './default-card-container.scss'
import ImageCard from "./image-card";

const DefaultCard = () => {
    return (
        <div className="default-card-container">
            <h3>Click a button - motivate or procrastinate!</h3>
           <ImageCard card={{url: lazySlothCard}}/>
        </div>
    )
}

export default DefaultCard;
