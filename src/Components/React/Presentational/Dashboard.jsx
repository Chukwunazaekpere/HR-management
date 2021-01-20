import React from "react";
import Sidebar from "./Sidebar";

import EmployeeSummary from "../Pages/Employee/EmployeeSummary";
import Confirmation from "../Presentational/Confirmation";

const Dashboard = (props) =>{
    const path = props.location
    console.log("\n\t Dash ", path)
    return(
        <div>
            <section className='summary-details'>
                <EmployeeSummary />
            </section>
            <section className='dashboard-sidebar'>
                <Sidebar />
            </section>
        </div>
    )
}

export default Dashboard;