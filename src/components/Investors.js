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
