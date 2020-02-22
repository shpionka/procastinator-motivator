import React from 'react';

import './quote-container.scss'

const QuoteCard = ({card}) => {
    return (
        <div className="quote-container">
            <blockquote className="quote-text">
                {card.quote}
            </blockquote>
        </div>
    )
}

export default QuoteCard;
