import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";


export default function CharacterList(props) {

  return (
    <div className="character-list">
      <ul>
        {(props.searchResults) ? props.searchResults.map(character => (
          <CharacterCard key={character.id} name={character.name} species={character.species} status={character.status}   />
        )) : null}
      </ul>
        <h2>
            {characters.map((character) => {
                return (
                    <CharacterCard key={character.id} name={character.name} species={character.species} status={character.status}   />
                )
            })}
        </h2>
    </div>
  );
}
