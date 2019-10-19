
const URL = '/api';

export function getCats() {  

    const url = `${URL}/cats`;

    return fetch(url)
        .then(response => response.json());
}
