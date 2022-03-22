// import {  createContext, useState, useEffect  } from "react";


//  export const AuthContext = createContext() // Create Box

//  export const AuthContextProvider = ({ children }) => {

//     const [auth, setAuth] = useState(0);

//     // const [users, setUsers] = useState([]);
    
//     // const f = async () => {
//     //   const res = await fetch("https://reqres.in/api/login");
//     //   const json = await res.json();
//     //   setUsers(json.data);
//     // };
//     // console.log(users)
//     // useEffect(() => {
//     //   f();
//     // }, []);



//     const handleChange = (value) => {
//         setAuth(auth + value)
//     }



//     return <AuthContext.Provider value ={{auth, handleChange}}>
//         {children}
//         </AuthContext.Provider>
// }





import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({children})
{

  const [auth, setAuth] = useState(false);

  function isAuth() {
    
      setAuth(!auth)
    
  }
  function toggleAuth() {

    auth ? console.log("logged in successfull!") : console.log("logged out successfull!")
  
  }

  return <AuthContext.Provider value={{auth, isAuth, toggleAuth}}>
    {children}
  </AuthContext.Provider>


}