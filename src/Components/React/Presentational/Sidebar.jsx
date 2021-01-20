import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../Styles/Sidebar.css";
import DashboardIcon from '@material-ui/icons/Dashboard';


import { Button } from "@material-ui/core";

const Sidebar = () => {
  const menus = [
    "Dashboard",
    "Human Resources",
    "Employees Management",
    "Finance",
  ];

  const active = {
    // color: "blue",
    backgroundColor: "rgb(39, 122, 133);",
  };
  return (
    <div className="sidebar-container">
      <h4 className='sidebar-title'>Head of Department</h4>
      {menus.map((menu) => (
        <section className="sidebar-items" key={menu}>
            <NavLink to={menu === "Employees Management" ? <Redirect to={`/dashboard/:${menu}`} /> : ""} className="mt-3 btn btn-info temp-active" activeStyle={active}>
                {menu}
            </NavLink>
        </section>
      ))}
    </div>
  );
};

export default Sidebar;
