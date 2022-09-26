import React, {useState} from "react";
import ShowDetail from "./ShowDetail";

function HogTile({name, specialty, greased, weight, medal, image}) {
    const [detail, setDetail] = useState(false)

	return (
		<div className="ui card eight wide column pigTile">
            <h3>{name}</h3>
            <img 
                onClick={() => setDetail((detail) => !detail)}
                src={image} 
                alt={name}/>
            {detail ? <ShowDetail specialty={specialty} greased={greased} weight={weight} medal={medal}/> : null}
		</div>
	);
}

export default HogTile;
