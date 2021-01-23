import React from "react";
import Sidebar from "./Sidebar";

import EmployeeSummary from "../Pages/Employee/EmployeeSummary";
import HumanResources from "../Presentational/SidebarComponents/HumanResources";
import Finance from "../Presentational/SidebarComponents/Finance";


const Dashboard = (props) =>{
   const history = props.history.location.pathname
   const split = String(history).split(":")[1]
   console.log("\n\t Dash history: ", split)
    return(
        <div>
            <section className='summary-details'>
                {
                    split === 'finance' ? <Finance /> :
                    split === 'human-resources' ? <HumanResources /> :
                    <EmployeeSummary />
                }
            </section>

            <section className='dashboard-sidebar'>
                <Sidebar />
            </section>
        </div>
    )
}

export default Dashboard;