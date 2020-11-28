import React from "react";
import {NavLink} from "react-router-dom";
  
  const Nav = () => {
    return (
          <div class="nav">
            <NavLink className="links" to ="/">Benji's Animal Shelter</NavLink>
            <NavLink className="links" to ="/About">About</NavLink>
            <NavLink className="links" to ="/">Adopt a pet</NavLink>
          </div>
    );
  };

export default Nav;