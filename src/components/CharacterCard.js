import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </div>
  );
}
