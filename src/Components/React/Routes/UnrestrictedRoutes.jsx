import React from 'react';
import Homepage from "../Pages/Homepage";
import { Route } from "react-router-dom";



const UnrestrictedRoutes = (props) => {
    return (
        <div>
            <Route exact path="/" component={Homepage} />
        </div>
    );
}

export default UnrestrictedRoutes;