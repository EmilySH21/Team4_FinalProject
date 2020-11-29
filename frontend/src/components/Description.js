import React from 'react';
import { Route, Switch, useParams } from "react-router-dom";
import Details from "./Details";

const Description = (props) => {

    const postInfo = 
    [
      {
        _id: 'dog',
        pets: [
          { 
            name: 'Rocky',
            breed: 'American pit bull cross',
            status: 'Neutered and vaccinated',
            gender: 'Female',
            yearsOld: 7,
            adopted: false,
          },
          {
            name: 'Juju',
            breed: 'American staff cross',
            status: 'Vaccindated, not neutered',
            gender: 'Male',
            yearsOld: 7,
            adopted: true,
          }
        ]
      },
      {
        _id: 'cat',
        pets: [
          {
            name: 'Terry',
            breed: 'Domestic medium hair cross',
            status: 'Neutered, not vaccinated',
            gender: 'Male',
            yearsOld: 2,
            adopted: false,
          },
          {
            name: 'Chonker',
            breed: 'Main coone',
            status: 'Status unknown',
            gender: 'Female',
            yearsOld: 5,
            adopted: true,
          }
        ]
      }
    ];


    console.log("hello");
    let {id} = useParams();

    let newname = id.split("-")[0];
    let newtype = id.split("-")[1];

    //loop through array to find the pet with the URL parameters

    let finaldata;

    if (newtype == 'dog') {
        postInfo[0]['pets'].forEach(element => {
            if (newname == element['name']) {
                finaldata = (
                    <Details 
                        name = {element.name}
                        breed = {element.breed}
                        status = {element.status}
                        gender = {element.gender}
                        age = {element.yearsOld}
                        adopted = {element.adopted}
                    />
                );
            }
        });
    } else {
        postInfo[1]['pets'].forEach(element => {
            if (newname == element['name']) {
                finaldata = (
                    <Details 
                        name = {element.name}
                        breed = {element.breed}
                        status = {element.status}
                        gender = {element.gender}
                        age = {element.yearsOld}
                        adopted = {element.adopted}
                    />
                );
            }
        });
    }

    //to use fetch
    /**
    React.useEffect(() => {
        fetch('http://localhost:3001/')
          .then(response => response.json())
          .then(responseAsJSON => 
            setData(responseAsJSON))
      }, []) */


    return (
        <>
        <main>
            <div class="allinfo">
                {finaldata}
            </div>
        </main>
    </>
    );
}

export default Description;