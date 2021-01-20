import React from 'react';
import { Route } from "react-router-dom";

import Dashboard from '../Presentational/Dashboard';



const RestrictedRoutes = (props) => {
    return (
        <div>
            <Route path="/dashboard" component={Dashboard} />
        </div>
    );
}

export default RestrictedRoutes;