import React from 'react';
import Post from "./Post";
import Species from './Species';


const Adopt = () => {
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

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
      fetch('http://localhost:3001/')
        .then(response => response.json())
        .then(responseAsJSON => 
          setData(responseAsJSON))
          //console.log("Did that work?"))
    }, [])

    //just change postInfo in line 64 to responseAsJSON
    const postElements = postInfo.map((info, idx) => (
      <Species 
        type={info._id}
        pets={info.pets}
      />
    ));   


    return (
        <>
      <main>
        <div class="posts">
          {postElements}
        </div>
      </main>
    </>
    );
}

export default Adopt;