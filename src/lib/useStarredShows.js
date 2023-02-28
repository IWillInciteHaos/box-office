import { useReducer, useEffect } from "react";

const usePersistedReducer = (reducer, initState, localStorageKey) =>{    
    const [state, dispatch] = useReducer(reducer, initState, (initial) => {
        const persistedValue = localStorage.getItem(localStorageKey);
        return persistedValue ? JSON.parse(persistedValue) : initial;
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }, [state, localStorageKey])

    return [state, dispatch]

}

const starredShowReducer = (currentStarred, action) => {
    switch (action.type) {
        case 'star': return currentStarred.concat(action.showId);    
        case 'unstar': return currentStarred.filter( (showId) =>  showId !== action.showId )
        default: return currentStarred;
    }
}

export const useStarredShows = () => {return usePersistedReducer(starredShowReducer,[],'starredShows')}