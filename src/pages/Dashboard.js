import React from 'react';
import {Outlet, Link} from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Dashboard</Link>
          </li>
          <li>
            <Link to='/transaction'>Transactions</Link>
          </li>
          <li>
            <Link to='/investment'>Invesments</Link>
          </li>
          
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Dashboard;
;