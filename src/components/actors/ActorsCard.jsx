import { SearchCard, SearchImgWrapper } from "../common/SearchCard";

const ActrosCard = ( {name, image, gender, country, birthday, deathday} ) => {

    
    return (
        <SearchCard>
            <SearchImgWrapper>
                <img src={image} alt={name}/>
            </SearchImgWrapper>

            <h1>{name} {!!gender && `(${gender})`}</h1>

            <p>{country ? `Comes from ${country}` : "Country unknown"}</p>

            {!!birthday && <p>Born: {birthday}</p>}
            
            <p>Died: {deathday ? `${deathday}` : `/`}</p>

        </SearchCard>
    )
}

export default ActrosCard;