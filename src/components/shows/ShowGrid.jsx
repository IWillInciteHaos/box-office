import ShowCard from "./ShowCard"
import { useStarredShows } from "../../lib/UseStarredShows";



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

    return <div>{shows.map(data => 
        <ShowCard 
            id = {data.show.id}
            key={data.show.id} 
            name={data.show.name}
            image={data.show.image ? data.show.image.medium : '/notFound.png'}
            summary = {data.show.summary}
            onStarClick = {onStarClick}
            isStarred={starredShows.includes(data.show.id)}
        />
    )}</div>
}

export default ShowGrid;