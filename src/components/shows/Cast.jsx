const Cast = (props) => {
    const {cast} = props;

    return <div>{
            cast.map(({person, character}) => <div key={person.id}>
                <div>
                    <img src={person.image 
                        ? person.image.medium 
                        : 'notFound.png'} 
                    />
                </div>
                <div>{person.name} | Character: {character.name}</div>
            </div>
            )
        }</div>
}

export default Cast;