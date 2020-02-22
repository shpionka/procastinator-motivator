import React, {useState} from 'react';

export function useNextCard(cardsMotivation, cardsEntertainment){
    const [motivationIndex, setMotivationIndex] = useState(0);
    const [entertainmentIndex, setEntertainmentIndex] = useState(0);
    const [currentCard, setCurrentCard] = useState(undefined);

    function handleNextEntertain() {
        setCurrentCard(cardsEntertainment[entertainmentIndex]);
        if (entertainmentIndex < cardsEntertainment.length - 1) {
            setEntertainmentIndex(entertainmentIndex + 1)
        } else {
            setEntertainmentIndex(0)
        }
    }

    function handleNextMotivate() {
        setCurrentCard(cardsMotivation[motivationIndex]);
        if (motivationIndex < cardsMotivation.length - 1) {
            setMotivationIndex(motivationIndex + 1)
        } else {
            setMotivationIndex(0)
        }
    }

    return [currentCard, handleNextMotivate, handleNextEntertain];
}
