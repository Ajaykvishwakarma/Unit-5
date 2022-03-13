import { useState } from "react"
const axios = require("axios");


export const Forms = (props) => {

    const [formData, setFormData] = useState({
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        isMarried:""
    });

    const handleChange = (e) => {

        let { id, value, checked, type } = e.target;
        value = type === "checkbox" ? checked : value;
        console.log(value)
        setFormData({...formData, [id]:value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/users`,formData).then(() => {
            alert(" Welcome! ")
            setFormData({
                name:"",
                age:"",
                address:"",
                department:"",
                salary:"",
                isMarried:""
            })
        })
    }


    return (
            <div id="formDiv">
                <form onSubmit={handleSubmit}>
                <label className="labelname">Enter Name</label><br></br>
                <input id = "name" className="all" type = "text" value = {formData.name} onChange = {handleChange} placeholder="Enter Name..."/>
                <br></br><br></br>
                <label>Enter Age</label><br></br>
                <input id = "age"  className="all"  type = "number" value = {formData.age} onChange = {handleChange} placeholder="Enter Name..."/>
                <br></br><br></br>
                <label>Enter Address</label><br></br>
                <input id = "address"  className="all"  type = "text" value = {formData.address} onChange = {handleChange} placeholder="Enter Address..."/>
                <br></br><br></br>
                <label>Department</label><br></br>
                <select  id = "department"  className="all"  value={formData.department} onChange = {handleChange}>
                    <option>......</option>
                    <option value="senior_instructor">Senior Instructor</option>
                    <option value="developer" >Developer </option>
                    <option value="ceo">Ceo</option>
                    <option value="hr">HR</option>
                    <option value="IA" >IA</option>
                </select>
                <br></br><br></br>
                <label>Enter Salary</label><br></br>
                <input  id = "salary"  className="all"  type = "text" onChange = {handleChange} value = {formData.salary} placeholder="Enter Salary..."/>
                <br></br><br></br>
               
                <label>Mariad</label>
                <input  id = "isMarried"  type = "checkbox" onChange = {handleChange} checked = {formData.isMarried}/>
               
                <br></br><br></br>
                <input id = "button"  type = "submit" value = {"Submit"}/> 
                </form>
            </div>
    )
}








