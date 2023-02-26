import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {getShowsByID} from '../api/tvmaze'

const Show = () => {
    const {showId} = useParams();
    
    //const {showData, showDataError} = useShowById(showId)
    const {data : showData, error : showDataError} = useQuery({ 
        queryKey: ['show', showId],
        queryFn: () => getShowsByID(showId),
    })




    if(showDataError){
        return <div>Error {showDataError.message}</div>
    }
    if(showData)
        return <div>{showData.name}</div>
    

    return <div>hello from Show loading screen</div>
}

export default Show;