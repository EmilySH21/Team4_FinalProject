import React from "react";
import {Link} from "react-router-dom";

const Details = (data) => {
    return (
        <div class="petDetails">
            <h1 class="petTitle">{data.name}</h1>
            <div>
                <img src={data.imgSrc} alt='image of pet'></img>
            </div>
            <div class="petSummary">
                <img class="icon" src="/images/animal_icon.jpg" />
                {data.breed}
            </div>
            <br></br>
            <div class="petSummary">
                <img class="icon" src="/images/needle_icon.jpg" />
                {data.status}
            </div> 
            <br></br>
            <div class="petSummary">
                <img class="icon" src="/images/info_icon.jpg" />
                {data.gender + ", " + data.age}
            </div>
            <div class="petParagraph">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis arcu ante, pharetra a purus vel, facilisis cursus magna. 
                Donec ultricies, mi quis semper efficitur, felis elit ultrices nisl, quis euismod justo enim ut dui. 
                Donec fermentum laoreet ullamcorper. In hac habitasse platea dictumst. Vivamus porta tempor luctus. 
                Vivamus at enim a turpis condimentum vestibulum quis vitae metus. Cras ac risus rhoncus, euismod ex vitae, cursus dolor. 
                Donec eget libero ex. In hac habitasse platea dictumst. Vestibulum interdum augue ipsum, quis volutpat elit semper eget. 
                Nulla risus massa, ullamcorper ut justo nec, dapibus interdum nisi. Suspendisse vel pharetra augue.

                <br></br>
                <br></br>

                Quisque sagittis mollis purus, at rhoncus orci pellentesque ut. Donec enim nulla, lacinia quis ornare dapibus, volutpat eu nulla. 
                Curabitur scelerisque, est in malesuada faucibus, purus sapien dapibus dolor, sit amet auctor nibh augue a felis. 
                Nunc egestas iaculis nunc. Quisque rhoncus pellentesque mi vel egestas. Aliquam a fringilla ante. 
                Cras euismod lacinia nibh, in gravida ex consectetur sit amet. In vitae justo at dolor molestie dignissim porta at lorem. 
                Mauris gravida ullamcorper nisi, eu mollis orci lacinia pretium. Donec leo purus, porta eu placerat ac, malesuada ut eros. 
                Mauris venenatis, lectus at vehicula bibendum, urna tellus tempus diam, vel mollis leo enim sed justo.

                <br></br>
                <br></br>

                Nullam vitae dui a mi molestie maximus eu dictum sapien. Suspendisse pellentesque arcu erat, at lobortis magna scelerisque non. 
                Proin eget risus semper nisi scelerisque euismod quis sed arcu. Nam at dignissim ante. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum imperdiet iaculis venenatis. 
                Vivamus imperdiet tempor interdum. Cras eget maximus orci.

                <br></br>
                <br></br>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis lacus enim. Vivamus condimentum augue augue, tristique 
                venenatis lorem aliquet at. Pellentesque eget felis id tellus consectetur rhoncus. Quisque sodales at ligula sed sodales. 
                Sed eleifend orci justo, at scelerisque odio finibus ac. Cras non tellus orci. In aliquet, nisl nec commodo vulputate, arcu nulla laoreet purus, 
                rutrum ornare leo urna vitae neque. Sed ante elit, tincidunt ac lobortis non, molestie in lectus. Mauris non consectetur erat. Donec lobortis congue ex, 
                sit amet posuere urna commodo ut. Donec ullamcorper nibh posuere iaculis luctus. Vestibulum tincidunt, diam et malesuada finibus, eros nunc interdum ligula, 
                sed commodo velit libero euismod massa.

                <br></br>
                <br></br>
                </p>
                <button type="button" class="adopt-me-button">ADOPT ME!</button>
            </div>
        </div>
    );
}

export default Details;