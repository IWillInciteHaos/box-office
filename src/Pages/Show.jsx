import { useParams } from "react-router-dom";
import  {useEffect, useState} from 'react'
import {getShowsByID} from '../api/tvmaze'

const useShowById = (showId) => {
    const [showData, setShowData] = useState(null);
    const [showDataError, setShowDataError] = useState(null);

    useEffect(()=>{
        async function fetchData () {
        try {
            setShowDataError(null)
            const data = await getShowsByID(showId);
            setShowData(data)      
        } catch (err) {
            setShowData(null)
            setShowDataError(err)
        }
}  
        fetchData();   
    }, [showId])

    return {showData, showDataError}
}

const Show = () => {
    const {showId} = useParams();
    
    const {showData, showDataError} = useShowById(showId)

    if(showDataError){
        return <div>Error {showDataError.message}</div>
    }
    if(showData)
        return <div>{showData.name}</div>
    

    return <div>hello from Show loading screen</div>
}

export default Show;