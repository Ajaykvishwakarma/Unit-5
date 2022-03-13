import './App.css';
import { Button } from './components/Button';
import { Flex } from './components/Flex';
function App() {


  return ( 
    <div className='App'>
      <Flex>
      <Button color={"white"} bgColor={"#2591fe"} padding={"7px 10"} border={ "0.1px solid black"}>Primary Button</Button>
      <Button color={"black"} bgColor={"white"} padding={"7px 10"}  border={ "0.1px solid gray"}>Default Button</Button>
      <Button color={"black"} bgColor={"white"} padding={"7px 10"}  border={ "0.1px dashed"}>Dashed Button</Button><br/>
      <Button color={"black"} bgColor={"white"} padding={"7px 10"}  border={ "none"}>Text Button</Button>
      <Button color={"black"}  bgColor={"white"} padding={"7px 10"}  border={ "none"} colorHover={"blue"} >Link Button</Button>
      </Flex>
    </div>


  )

}

 export default App;


//1. I want to store a value, and not loose it after re-render!
//2. Change in this value, should not couse re-render!

