import React from 'react';

const Starwars = (props) => {
    const swCharacters = props.starWarsChars.map(swchar => {
        return <p key={Math.random()}>{swchar.name}</p>
    })
    console.log("props slash state SWjs",props)
    return (
        <div>
            {swCharacters}
        </div>
    )
}

export default Starwars