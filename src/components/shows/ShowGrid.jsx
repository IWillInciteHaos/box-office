import ShowCard from "./ShowCard";
import { useStarredShows } from "../../lib/useStarredShows";
import NotFoundSrc from '../../lib/notFound.png'
import {FlexGrid} from "../common/FlexGrid"



const ShowGrid = ( { shows }) => {
    const [starredShows, dispatchedStarredShows] =  useStarredShows()    

    console.log(starredShows);

    const onStarClick = (showId) => {
        const isStarred = starredShows.includes(showId);

        if(isStarred){
            dispatchedStarredShows({type: 'unstar', showId})
        }else{
            dispatchedStarredShows({type: 'star', showId})
        }
    }

    return (
        <FlexGrid>
            {shows.map(data => 
                <ShowCard 
                    id = {data.show.id}
                    key={data.show.id} 
                    name={data.show.name}
                    image={data.show.image ? data.show.image.medium : NotFoundSrc}
                    summary = {data.show.summary}
                    onStarClick = {onStarClick}
                    isStarred={starredShows.includes(data.show.id)}
                />
            )}
        </FlexGrid>
    )
}

export default ShowGrid;

