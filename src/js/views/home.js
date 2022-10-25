import React, {useState, useEffect} from "react";
import {getList} from "/workspace/blog-star-wars/src/js/services/getList.js";

import "../../styles/home.css";
import MyCard from "/workspace/blog-star-wars/src/js/component/MyCard.js"

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getList().then((respuestaJson)=> {
        setCharacters(respuestaJson);
    })
  })

  return(
    <div className="row">
      {characters.map(character => <MyCard name={character.name} uid={character.uid}/>)}
    </div>
  );
}
