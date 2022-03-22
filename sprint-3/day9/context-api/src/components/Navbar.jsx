// import {useContext,useState} from "react";

// import {AuthContext} from "../context/AuthContext";


// export const Button = () => {

//     const [formData, setFormData] = useState({name:"", pantone_value:""});


//      const {handleChange} = useContext(AuthContext);

//     const handleChange1 = (e) => {
//         // console.log(e.target.id, e.target.value)
//         const { id, value } = e.target;
//         setFormData({
//             ...formData, [id]:value,
//         });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // axios.post(`http://localhost:3001/users`,formData).then(() => {
//         //     alert("user Created successfully!")
//             setFormData({
//                 name:"",
//                 pantone_value:""
                
//             })
   
//              handleChange(formData)
//     }

//    return (
//     <form onSubmit={handleSubmit}>

//         <h2>Sign in</h2>
//         <input id = "name"  value={formData.name} type = "text" onChange = {handleChange1} placeholder = "enter name"/>
//         <input  id = "pantone_value"   value={formData.pantone_value} type = "text"  onChange = {handleChange1} placeholder = "pantone_value"/>
    
//         <input type = "submit" value={"created user"}/> 
//     </form>



// //        <input type = "text"></input>
// //    <button onClick = {() => handleChange(1)}>Add to cart </button>
//    )
// }



import { useContext } from "react";

import {AuthContext} from "../context/AuthContext";

export const Button = () => {

    const { auth, isAuth } = useContext(AuthContext);

    return <button onClick={() => isAuth()}>
        {auth ? "Log Out" : "Log In"}
    </button>

}


