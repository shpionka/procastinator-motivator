import React from 'react';

import './app.scss';
import Headline from "./components/headline/headline";
import ContentCard from "./components/content-card/content-card";
import DefaultCard from "./components/content-card/default-card";
import {useRemoteCards} from "./hooks/use-remote-cards";
import {useNextCard} from "./hooks/use-next-card";

export default function App() {

    const [cardsMotivation, cardsEntertainment, isLoading, error] = useRemoteCards();
    const [currentCard, handleNextMotivate, handleNextEntertain] = useNextCard(cardsMotivation, cardsEntertainment);

    return (
        <div className="app">
            <div className="top-content">
                <Headline onNextEntertain={handleNextEntertain} onNextMotivate={handleNextMotivate}/>
            </div>
            <div className="card-content">

                {isLoading ? <h1 className="card-content-loading-message">Loading...</h1> : null}
                {error ? <h2 className="card-content-error-message">Could not fetch cards, try again later...</h2> : null}

                <div className="card-container">
                    {currentCard === undefined ?
                        <DefaultCard/> : <ContentCard card={currentCard}/>}
                </div>
            </div>
        </div>
    )
};
