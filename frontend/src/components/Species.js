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

    let type = " ";
    if (props.type == "dog") {
      type = "Dogs and puppies";
    } else if (props.type == "cat") {
      type = "Cats";
    }

  return (
    <div>
      <div class="container">
        <h1 class="speciesName">{type}</h1>
        <div class="flex-container">{posts}</div>
      </div>
    </div>
  );
}

export default Species;