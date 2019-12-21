import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";

export default function SearchForm() {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    let endPoint = "https://rickandmortyapi.com/api/character/"; //https://rickandmortyapi.com/api/character/ https://rick-api.herokuapp.com/api/
    useEffect(() => {
        //  Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios
            .get(endPoint)
            .then((res) => {
                console.log(res.data);
                setCharacters(res.data.results);
                console.log("chars: ", characters);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [endPoint]);

    useEffect(() => {
        const results = characters.filter(char =>
            char.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChanges = e => {
      setSearchTerm(e.target.value);
    };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search </label>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Character Name"
          value={searchTerm}
          onChange={handleChanges}
        />
      </form>
      <CharacterList searchResults={searchResults} characters={characters}/>
    </section>
  );
}

