import React from 'react';
import QuoteCard from './quote-card';
import ImageCard from './image-card';
import VideoCard from './video-card';

const ContentCard = ({card}) => {

    let cardToRender = null;

    if (!card) {
        return null;
    }

    if (card.contentType === 'quote'){
        cardToRender = <QuoteCard card={card}/>
    } else if (card.contentType === 'image') {
        cardToRender = <ImageCard card={card}/>;
    } else if (card.contentType === 'video'){
        cardToRender = <VideoCard card={card}/>;
    }

    return (
        <div className="card-content">
            {cardToRender}
        </div>
    )
}

export default ContentCard;
