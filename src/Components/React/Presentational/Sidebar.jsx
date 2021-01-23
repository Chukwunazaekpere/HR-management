import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../Styles/Sidebar.css";
import DashboardIcon from '@material-ui/icons/Dashboard';



const Sidebar = () => {
  const menus = [
    "",
    "Human-Resources",
    "Employees-Management",
    "Finance",
  ];

  const active = {
    backgroundColor: 'rgb(39, 122, 133)',
      fontWeight: 'bold',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.11) 0 3px 5px 0 rgba(0, 0, 0, 0.21)',
    }

  return (
    <div className="sidebar-container">
      <h4 className='sidebar-title'>Head of Department</h4>
      <section className="sidebar-items" >
      {menus.map((menu) => (
        <ul key={menu}>
          <li>
            <NavLink  to={`/dashboard/${menu.toLowerCase()}`} className="mt-3 btn" activeStyle={active}>
              {menu === "" ? "Dashboard" : menu }
            </NavLink>
          </li>
        </ul>
      ))}
      </section>
    </div>
  );
};

export default Sidebar;
