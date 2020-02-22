export function fetchCards() {
    return fetch(BASE_FUNCTION_URL + '/api/cards')
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .catch(e => {
            console.error('Unable to fetch cards', e)
            return e
        })
}
