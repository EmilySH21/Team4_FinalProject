import React from 'react';
import { useHistory } from "react-router-dom";

const Description = (props) => {
    console.log("hello");
   // let {id} = useParams();

    /*let name = id.split("-")[0];
    let type = id.split("-")[1];*/



    return (
        <div>
            <br></br><br></br><br></br>
            <h3>{props.name}</h3>
        </div>
    );
}

export default Description;