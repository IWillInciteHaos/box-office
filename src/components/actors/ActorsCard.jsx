const ActrosCard = ( {name, image, gender, country, birthday, deathday} ) => {

    
    return (
        <div>
            <div>
                <img src={image} alt={name}/>
            </div>

            <h1>{name} {!!gender && `(${gender})`}</h1>

            <p>{country ? `Comes from ${country}` : "Country unknown"}</p>

            {!!birthday && <p>Born: {birthday}</p>}
            
            <p>Died: {deathday ? `${deathday}` : `/`}</p>

        </div>
    )
}

export default ActrosCard;