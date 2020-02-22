import React from 'react';

const VideoCard = ({card}) => {
    return (
        <div className="video-container">
            <video preload="auto" autoPlay={true} loop="loop" controls={true}>
                <source src={card.url} type="video/mp4"/>
            </video>
        </div>
    )
}

export default VideoCard;
