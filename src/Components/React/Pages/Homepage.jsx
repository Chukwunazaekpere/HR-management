import React, { useState } from 'react';
import "../Styles/Homepage.css";

import {Button} from "@material-ui/core";
import Login from "./Login";
import "animate.css";


const Homepage = () => {
    const [toggleLogin, setToggleLogin] = useState(false)
    const showLogin = () =>{
        console.log("Clicked!")
        setToggleLogin(!toggleLogin)
    }

    return(
        <div className="home-container">
            {
                !toggleLogin ?
                <section className='wel-text'>
                    <h4 className=" animate__animated animate__bounce">Welcome...</h4>
                    <Button color='primary' className='homelogin-button' 
                        variant='contained' onClick={() => {showLogin()} }>
                        Log in
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