import React from "react";
import {useHistory} from "react-router-dom";




const MyCardSpecies = (props) => {

    const {name, uid} = props;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/${uid}`)
    }

    return(
        <div className="col text-center mt-5">
        <div className="card" >
          <img src={`https://starwars-visualguide.com/assets/img/species/${uid}.jpg`} className="card-img-top" alt="..."></img>
          <div className="card-body bg-black">
              <p className="card-text text-white">{name}</p>
          </div>
          <button onClick={handleClick}>Ir a la descripcion</button>
      </div>
      </div>   
    )

}

export default MyCardSpecies;