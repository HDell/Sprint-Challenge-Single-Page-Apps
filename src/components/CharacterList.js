import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";


export default function CharacterList(props) {

  return (
    <div className="character-list">
      <ul>
        {( !(typeof props.searchResults === "undefined") && (props.searchResults.length > 0) ) ?
          props.searchResults.map(character => {
            console.log("reached 1st!");
              return(
                <CharacterCard key={character.id} name={character.name} species={character.species} status={character.status}   />
              )
          })
          :
          props.characters.map((character) => {
            console.log("reached 2nd!");
              return (
                <CharacterCard key={character.id} name={character.name} species={character.species} status={character.status}   />
              )
          })
        }
      </ul>

    </div>
  );
}
