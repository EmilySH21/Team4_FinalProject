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
            imgSrc: "https://i.pinimg.com/originals/6c/e7/d2/6ce7d27d2748f31e91468ee59aac67d5.jpg",
            name: 'Rocky',
            breed: 'American pit bull cross',
            status: 'Neutered and vaccinated',
            gender: 'Female',
            yearsOld: 7,
            adopted: false,
          },
          {
            imgSrc: "https://visualhunt.com/photos/7/dog-canine-labrador-retriever-chocolate-tongue.jpg?s=s",
            name: 'Juju',
            breed: 'American staff cross',
            status: 'Vaccindated, not neutered',
            gender: 'Male',
            yearsOld: 7,
            adopted: true,
          },
          {
            imgSrc: "https://www.publicdomainpictures.net/pictures/40000/velka/happy-dog.jpg",
            name: 'Alice',
            breed: 'American staff cross',
            status: 'Vaccindated, not neutered',
            gender: 'Male',
            yearsOld: 7,
            adopted: true,
          },
          {
            imgSrc: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a015-helenal-151.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=9109afd2bb1008a6defaac8302ef2525",
            name: 'Knuckles',
            breed: 'American staff cross',
            status: 'Vaccindated, not neutered',
            gender: 'Male',
            yearsOld: 7,
            adopted: true,
          },
          {
            imgSrc: "https://img.rasset.ie/0015957e-500.jpg",
            name: 'Addie',
            breed: 'American staff cross',
            status: 'Vaccindated, not neutered',
            gender: 'Male',
            yearsOld: 7,
            adopted: true,
          },
          {
            imgSrc: "https://visualhunt.com/photos/6/dog-beagle-pet-animal-head-floppy-ears.jpg?s=s",
            name: 'Buster',
            breed: 'American staff cross',
            status: 'Vaccindated, not neutered',
            gender: 'Male',
            yearsOld: 7,
            adopted: true,
          },
          {
            imgSrc: "https://s.yimg.com/ny/api/res/1.2/kAEAYNIdLGPkF2PF1NAFGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzOS44NA--/https://s.yimg.com/uu/api/res/1.2/FQArkFVb48b.OPYbyJf9qA--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/daily_paws_articles_948/1ec8bc43b699e7f68f61a52cbd9bd494",
            name: 'Mercury',
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
            imgSrc: "https://burst.shopifycdn.com/photos/beautiful-cat.jpg?width=1200&format=pjpg&exif=0&iptc=0",
            name: 'Chonker',
            breed: 'Domestic medium hair cross',
            status: 'Neutered, not vaccinated',
            gender: 'Male',
            yearsOld: 2,
            adopted: false,
          },
          {
            imgSrc: "https://images.freeimages.com/images/small-previews/56b/ragdoll-cat-playing-1635061.jpg",
            name: 'Gandalf',
            breed: 'Main coone',
            status: 'Status unknown',
            gender: 'Female',
            yearsOld: 5,
            adopted: true,
          },
          {
            imgSrc: "https://media.istockphoto.com/photos/young-beautiful-cat-at-home-picture-id1041987536?k=6&m=1041987536&s=612x612&w=0&h=XA2WQXJYumtFtI6xISJDPry5XklKwu5Qd8J1CQXMolA=",
            name: 'Terry',
            breed: 'Domestic medium hair cross',
            status: 'Neutered, not vaccinated',
            gender: 'Male',
            yearsOld: 2,
            adopted: false,
          },
          {
            imgSrc: "https://allaboutpurrs.com/wp-content/uploads/2019/12/silver-tabby-cat-lying-on-brown-wooden-surface-126407.jpg",
            name: 'Lacey',
            breed: 'Domestic medium hair cross',
            status: 'Neutered, not vaccinated',
            gender: 'Male',
            yearsOld: 2,
            adopted: false,
          },
          {
            imgSrc: "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            name: 'Kip',
            breed: 'Domestic medium hair cross',
            status: 'Neutered, not vaccinated',
            gender: 'Male',
            yearsOld: 2,
            adopted: false,
          }
        ]
      }
    ];


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
                        species={newtype}
                        imglink = {element.imgSrc}
                        name = {element.name}
                        breed = {element.breed}
                        status = {element.status}
                        gender = {element.gender}
                        age = {element.yearsOld}
                        adopted = {element.adopted}
                        petData = {props.petData}
                        setData = {props.setData}
                    />
                );
            }
        });
    } else {
        postInfo[1]['pets'].forEach(element => {
            if (newname == element['name']) {
                finaldata = (
                    <Details 
                        species={newtype}
                        imglink = {element.imgSrc}
                        name = {element.name}
                        breed = {element.breed}
                        status = {element.status}
                        gender = {element.gender}
                        age = {element.yearsOld}
                        adopted = {element.adopted}
                        petData = {props.petData}
                        setData = {props.setData}
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