import { useQuery } from "@tanstack/react-query";
import { getMultipleShowsById } from "../api/tvmaze";
import ShowGrid from "../components/shows/ShowGrid";
import { useStarredShows } from "../lib/useStarredShows";
import {TextCenter} from "../components/common/TextCenter"

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
        return <TextCenter>No starred shows!</TextCenter>
    }

    if(starredShowsError){
        return <TextCenter>ERROR: {starredShowsError.message}</TextCenter>
    }

    return <TextCenter>Shows loading...{starredShowsIds.length}</TextCenter>
}

export default Starred;