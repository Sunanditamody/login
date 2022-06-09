import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import  {createContext} from "react";
import Homepage from '../Homepage/Homepage'
const name = createContext();
function Login() {
    
    const [email,setemail]=useState("");
    const [pass, setpass]=useState("");
   
    const nav = useNavigate();
    const redirect = () => {
        nav('/register');
      }

          const home = () => {
          nav('/');}
    
    const loginhandler=()=>
    {
        axios.post("http://localhost:5000/login",{email1:email,pass1:pass})
        .then((response) => {
            console.log(response.data);
             
             if(response.data.user)
             {    
             if(response.data.user.email===email && response.data.user.pass===pass) {
                                   
                home();      
             }
            }
             else {
                 alert("wrong credentials. Check or Register");

             }             
          })
        .catch(error => console.log(error));
    }

    const mailhandler=(e)=>{
       setemail(e.target.value);
    }

    
    const passhandler=(e)=>{
        setpass(e.target.value);
     }
   
  return (
    <div>
      <TextField onChange={mailhandler} label="Your Email" id='mail'/><br/><br/>

      <TextField onChange={passhandler} label ="Your Password" id='password'/><br/><br/>
      
      <Button onClick={loginhandler}>Login</Button><br/><br/>
      
       or <br/><br/>
       
      <Button onClick={redirect}>Register</Button>
     
    
    </div>
  )
}

export default Login;
