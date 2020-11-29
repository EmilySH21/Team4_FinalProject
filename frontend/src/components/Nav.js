import React from "react";
import {NavLink} from "react-router-dom";
  
  const Nav = () => {
    return (
          <div class="nav">
              <NavLink className="logo" to ="/">Benji's Animal Shelter</NavLink>
              <div class="links">
              <NavLink className="link" to ="/About">About</NavLink>
              <NavLink className="link" to ="/">Adopt a pet</NavLink>
              </div>
          </div>
    );
  };

export default Nav;