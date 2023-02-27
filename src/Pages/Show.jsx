import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {getShowsByID} from '../api/tvmaze'
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";

const Show = () => {
    const {showId} = useParams();
    
    //const {showData, showDataError} = useShowById(showId)
    const {data : showData, error : showDataError} = useQuery({ 
        queryKey: ['show', showId],
        queryFn: () => getShowsByID(showId),
        refetchOnWindowFocus: false
    })




    if(showDataError){
        return <div>Error {showDataError.message}</div>
    }
    if(showData)
        return <div>

            <Link to="/">Home</Link>

            <ShowMainData 
                image={showData.image}
                name={showData.name}
                rating={showData.rating}
                summary={showData.summary}
                genres={showData.genres}
            />
            <h2>Details</h2>
            <Details 
                status={showData.status}
                premiered={showData.premiered}
                network={showData.network}
            />
            <div>                
                <h2>Cast</h2>
                <Cast cast={showData._embedded.cast} />
            </div>
            <div>
                <h2>Seasons</h2>
                <Seasons seasons={showData._embedded.seasons}/>

            </div>
        </div>
    

    return <div>hello from Show loading screen</div>
}

export default Show;