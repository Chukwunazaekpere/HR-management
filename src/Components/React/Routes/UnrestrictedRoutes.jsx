import React from 'react';
import Homepage from "../Pages/Homepage";
import { Route } from "react-router-dom";
import Confirmation from "../Presentational/Confirmation";



const UnrestrictedRoutes = (props) => {
    return (
        <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/confirmation" component={Confirmation} />
        </div>
    );
}

export default UnrestrictedRoutes;