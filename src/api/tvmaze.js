const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async (queryString) => {
    const response = await fetch(`${BASE_URL}${queryString}`)
    const body = await response.json();

    return body;
}   

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);
export const getShowsByID = (showID) => apiGet(`/shows/${showID}?embed[]=seasons&embed[]=cast`)

export const getMultipleShowsById = async (showIDs) => {
    
    const promises = showIDs.map(showId => apiGet(`/shows/${showId}`));            
    return  Promise.all(promises);
}