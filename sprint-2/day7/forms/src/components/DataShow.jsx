 import "./DataShow.css";

import { useEffect, useState } from "react";
 const axios = require('axios');


 export const Show = () => {


 const [ userdata, setUserdata] = useState([]);

 const [page, setPage ] = useState(1);

 useEffect(() => {
  getData()
 },[])

 const getData = () => {
   axios.get(`http://localhost:3001/users`).then(res => {
     setUserdata(res.data)
   })
 }
 return (


    <div id = "Showdata">
        <table id="tabledata">
        <thead>
           <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Marrital Status</th>
          </tr>
          </thead>
          
      <tbody>
          {userdata.map((elem) => {
             if(elem.isMarried == true){
              elem.isMarried = "Married"
            }
            if (elem.isMarried== false) {
              elem.isMarried = "UnMarried"
            } 
        
            return(

             <tr>
              
            <td >{elem.name}</td>
            <td  > {elem.age}</td>
            <td >{elem.address}</td>
            <td >{elem.department}</td>
            <td >{elem.salary}</td>
            <td>{elem.isMarried}</td>
            </tr>
           
            )
           
            })}
   
           </tbody>

      
            </table>
    </div>
 )

 }

