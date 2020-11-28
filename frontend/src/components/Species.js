import React from "react";
import Post from "./Post";

const Species = (props) => {

    const posts = props.pets.map((pet, idx) => (
        <Post
          imgSrc={pet.imgSrc}
          name={pet.name}
          breed={pet.breed}
          status={pet.status}
          info={pet.gender + ", " + pet.yearsOld}
          url={"/pet/" + pet.name + "-" + props.type}
        />
    ));

  return (
    <div>
      <h1>{props.type}</h1>
      <div class="float-container">{posts}</div>
    </div>
  );
}

export default Species;