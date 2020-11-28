import React from "react";
import {Link} from "react-router-dom";

const Post = (props) => {

  return (
    <div class="post">
      <img class="postImg"
        src={props.imgSrc} 
      />
      <div class="animalInfo">
        <p><b>{props.name}</b></p>
        <span>
          <img class="icon" src="images/animal_icon.jpg" />
          {props.breed}
        </span>
        <br></br>
       <span>
         <img class="icon" src="images/needle_icon.jpg" />
         {props.status}
      </span> 
      <br></br>
      <span>
        <img class="icon" src="images/info_icon.jpg" />
        {props.info}
      </span>
      <br></br><br></br>
        <Link to={props.url}>View more details</Link>
      </div>
    </div>
  );
}

export default Post;