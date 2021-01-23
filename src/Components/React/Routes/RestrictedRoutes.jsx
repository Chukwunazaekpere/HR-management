import React from 'react';
import { Route } from "react-router-dom";

import Dashboard from '../Presentational/Dashboard';
import Confirmation from "../Pages/Confirmation";



const RestrictedRoutes = (props) => {
    return (
        <div>
            <Route exact path={["/dashboard", "/dashboard/employees-management",
                                "/dashboard/finance", "/dashboard/human-resources"]} component={Dashboard} />
            <Route path="/confirmation" component={Confirmation} />
        </div>
    );
}

export default RestrictedRoutes;