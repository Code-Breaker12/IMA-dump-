import React from "react";
import Invest from "./investment.json";

// import List from "./List";
// const array = ['madhav','ajay','praksh',50];
// const object = {birth:'1972', age:'50'};

const Investors = () => {
  return (
    <>
    
      {Invest.map((data) => {
        return (
          <>
          <li key={data.Userid}>{data.Userid}</li>
          <li >{data.Date}</li>
          <li >{data.Principle}</li>
          <li >{data["Plan-type"]}</li>
          
          </>
          );
      })}
     
    
    
    
    </>
  );
};

export default Investors;


------------------------------

import React from "react";
import Invest from "./investment.json";
import Table from "react-bootstrap/Table";

// import List from "./List";
// const array = ['madhav','ajay','praksh',50];
// const object = {birth:'1972', age:'50'};

const Investors = () => {
  return (
    // Invest.map((data) => {
    //   return (
    // <>
    /* <Table>
           <ul>
          <li key={data.Userid}>{data.Userid}</li>
          <li >{data.Date}</li>
          <li >{data.Principle}</li>
          <li >{data["Plan-type"]}</li>
            </ul> 
          </Table> */
    <>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Date</th>
            <th scope="col">Principle</th>
            <th scope="col">Plan Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Invest.map((data) => {
              return (
                <>
                  <td key={data.Userid}>{data.Userid}</td>
                  <td>{data.Date}</td>
                  <td>{data.Principle}</td>
                  <td>{data["Plan-type"]}</td>
                </>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Investors;
