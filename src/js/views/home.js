import React, {useState, useEffect} from "react";
import {getList} from "/workspace/blog-star-wars/src/js/services/getList.js";

import "../../styles/home.css";
import MyCard from "/workspace/blog-star-wars/src/js/component/MyCard.js"
import MyCardPlanets from "/workspace/blog-star-wars/src/js/component/MyCardPlanets.js"
import MyCardSpecies from "/workspace/blog-star-wars/src/js/component/MyCardSpecies.js";


export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);


  useEffect(() => {
    getList("people").then((respuestaJson)=> {
        setCharacters(respuestaJson);
    })


    getList("planets").then((respuestaJson)=> {
      setPlanets(respuestaJson);
  })

  getList("species").then((respuestaJson)=> {
    setSpecies(respuestaJson);
})


  })

  return(
    <div>
    <div className="row">
      {characters.map(character => <MyCard name={character.name} uid={character.uid}/>)}
    </div>
    <div className="row">
       {planets.map(planet => <MyCardPlanets namePlanet={planet.name} uid={planet.uid}/>)}
    </div>
     <div className="row">
       {species.map(specie => <MyCardSpecies name={specie.name} uid={specie.uid}/>)}
    </div> 

    </div>
  );
}
