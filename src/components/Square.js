import React from "react";
// import useState from 'react'

import { useState } from "react";

// let nextId = 0;

export default function Square() {
  const [elements, setElements] = useState([]);

  const handleDuplicate = (index) => {
    const newElements = [...elements];
    newElements.splice(index + 1, 0, elements[index]);
    setElements(newElements);
  };

  return (
    <>
      <div className="box1" onClick={() => handleDuplicate()}></div>
      <div className="box2" onClick={() => handleDuplicate()}></div>
      <div className="box3" onClick={() => handleDuplicate()}></div>

      {elements.map((element, index) => (
        <div key={index}>
          <span>{element}</span>
          <div onClick={() => handleDuplicate(index)}>
            <div className="box1"></div>
          </div>
        </div>
      ))}

      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul> */}
    </>
  );
}
