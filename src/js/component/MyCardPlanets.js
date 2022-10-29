import React from "react";
import {useHistory} from "react-router-dom";



const MyCardPlanets = (props) => {
    const {namePlanet, uid} = props;

    const history = useHistory();

    const handleClick = () => {
        history.push(`/${uid}`)
    }


    return(
        <div className="col text-center mt-5">
        <div className="card" >
          <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="card-img-top" alt="..."></img>
          <div className="card-body bg-black">
              <p className="card-text text-white">{namePlanet}</p>
          </div>
          <button onClick={handleClick}>Ir a la descripcion</button>
      </div>
      </div>
    )
}


export default MyCardPlanets