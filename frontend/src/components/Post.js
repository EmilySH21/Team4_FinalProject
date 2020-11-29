import React from "react";
import {Link} from "react-router-dom";

const Post = (props) => {

  return (
    <div class="post">
      <img class="postImg"
        src={props.imgSrc} 
        alt='something'
      />
      <div class="animalInfo">
        <p><b>{props.name}</b></p>
        <span class="petInfo">
          <img class="icon" src="images/animal_icon.jpg" />
          {props.breed}
        </span>
        <br></br>
       <span class="petInfo">
         <img class="icon" src="images/needle_icon.jpg" />
         {props.status}
      </span> 
      <br></br>
      <span class="petInfo">
        <img class="icon" src="images/info_icon.jpg" />
        {props.info}
      </span>
      <br></br><br></br>
        <Link class="details" to={props.url}>View more details ↓</Link>
      </div>
    </div>
  );
}

export default Post;