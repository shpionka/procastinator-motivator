import React, {useEffect, useState} from 'react';
import {fetchCards} from "../api/card-api";

const limit = 5;

export function useRemoteCards() {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        setIsLoading(true);
        fetchCards()
            .then(data => {
                setCards(data);
                setIsLoading(false)
            })
            .catch(e => {
                setError(e);
                setIsLoading(false)})
    }, []);

    const [cardsMotivation, setCardsMotivation] = useState([]);
    const [cardsEntertainment, setCardsEntertainment] = useState([]);

    useEffect(() => {
        const motivation = cards.filter(c => c.category === 'motivation')
        const entertainment = cards.filter(c => c.category === 'fun');
        setCardsMotivation(motivation);
        setCardsEntertainment(entertainment);
    }, [cards])


    return [cardsMotivation, cardsEntertainment, isLoading, error];
}
