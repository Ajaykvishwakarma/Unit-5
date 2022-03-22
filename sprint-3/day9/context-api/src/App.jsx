import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import { Button } from "./components/Navbar";
import { DisplayStatus} from './display_components/DisplayStatus'
// import { Input } from "./components/Input";

 function App() {

  return (
    <div className="App">
      
          {/* <Input/> */}
          <DisplayStatus/>
          <Button/>
         

    </div>
  );
}

export default App;
