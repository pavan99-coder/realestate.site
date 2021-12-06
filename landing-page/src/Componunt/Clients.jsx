import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const pdata = [
  {
    year: "2015",
    BUNGALOWclients: 35,
    Apartmentclients: 57,
   
  },
  {
    year: "2016",
    BUNGALOWclients: 42,
    Apartmentclients: 14,
   
  },
  {
    year: "2017",
    BUNGALOWclients: 53,
    Apartmentclients: 23,
    
  },
  {
    year: "2018",
    BUNGALOWclients: 54,
    Apartmentclients: 39,
  
  },
  {
    year: "2019",
    BUNGALOWclients: 18,
    Apartmentclients: 48,
   
  },
 
  {
    year: "2021",
    BUNGALOWclients: 34,
    Apartmentclients: 43,
    
  }

];

export default function App() {
  return (
      <>
      <h1 className="font-bold text-3xl text-center mb-10"> OUR HAPPY CLIENTS</h1>
    <LineChart
      width={500}
      height={300}
      data={pdata}
      margin={{
        top: 5,
       
        left: 100,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Apartmentclients"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="BUNGALOWclients" stroke="#82ca9d" />
    </LineChart>
    </>
  );
}
