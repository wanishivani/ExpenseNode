// import classes from '../Page/Home.modules.css';
// import {Card} from 'react-bootstrap';
import React from "react";

import { Link,useNavigate } from "react-router-dom";
export  function Homepage(props) { 
  const navigate = useNavigate();
  navigate("/");

    return (
    
      
      <div>
        <div>
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/signup">Signup</Link>
          </h1>
          <h1 style={{textAlign:'center',fontSize:'150px',backgroundColor:'pink'}}>Welcome on Board!</h1>

        </div>
  
        <br />
        <br />
        <br />
  
        <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      </div>
    );
  }
  
  export default Homepage;
















