import React, { useState } from 'react';
import "../Styles/Homepage.css";

import {Button} from "@material-ui/core";
import Login from "./Login";
import "animate.css";


const Homepage = () => {
    const [toggleLogin, setToggleLogin] = useState(false)
    
    const showLogin = () =>{
        setToggleLogin(!toggleLogin)
    }

    return(
        <div className="home-container">
            {
                !toggleLogin ?
                <section className='wel-text'>
                    <h2 className=" animate__animated animate__bounce">Welcome...</h2>
                    <h4 className=" animate__animated animate__heartBeat">
                        This is Chukwunazaekpere's portfolio - site (an HR - management system)
                        <br />  powered by Django, React and MongoDB.
                    </h4>
                    <Button color='primary' className='homelogin-button' 
                        variant='contained' onClick={() => {showLogin()} }>
                        Explore
                    </Button>
                </section>
            :
                <section className='login-comp'>
                    <Login />
                </section>
            }
        </div>
    )
}

export default Homepage;