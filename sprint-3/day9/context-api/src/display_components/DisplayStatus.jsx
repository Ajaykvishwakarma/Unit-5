import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const DisplayStatus = () => {
    const {auth} = useContext(AuthContext)

    return (
        <h2> User is {auth ? "Logged in":"Logged out"}</h2>
    )
}