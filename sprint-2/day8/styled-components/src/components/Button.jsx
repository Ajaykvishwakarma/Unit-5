// import "./Button.css";

import styled from "styled-components";

const Button = styled.button`


    padding : ${({ padding })=>padding}px;
    color : ${({ color })=>color};
    border : ${({ border })=>border};
    background: ${({ bgColor })=>bgColor};
    font-size : 15px;
    height:30px;
    margin : 20px;
    &:hover {
        color : ${({ colorHover })=>colorHover};
        cursor: pointer;
    }
`

export { Button }

