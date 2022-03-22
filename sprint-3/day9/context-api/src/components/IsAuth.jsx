import {useContext} from "react";

import {AuthContext} from "../../contexts/AuthContext";

export const Auth = () => {
    const {cart }= useContext(AuthContext);


return (
    <nav>
    <h5>No. of items in the cart : {cart}</h5>
    </nav>
)


}