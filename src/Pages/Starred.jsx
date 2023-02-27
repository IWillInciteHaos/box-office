import { useQuery } from "@tanstack/react-query";
import { getMultipleShowsById } from "../api/tvmaze";
import ShowGrid from "../components/shows/ShowGrid";
import { useStarredShows } from "../lib/UseStarredShows";

const Starred = () => {

    const [starredShowsIds] = useStarredShows();

    const { data : starredShows, error : starredShowsError} = useQuery({
        queryKey: ['starred', starredShowsIds],
        queryFn: () => getMultipleShowsById(starredShowsIds).then(result => 
            result.map(show => ({ show }))),
        refetchOnWindowFocus: false
    });

    if(starredShows?.length > 0) {
        return <ShowGrid shows={starredShows} />
    }else if(starredShows?.length === 0){
        return <div>No starred shows</div>
    }

    if(starredShowsError){
        return <div>ERROR: {starredShowsError.message}</div>
    }

    return <div>Shows loading...{starredShowsIds.length}</div>
}

export default Starred;