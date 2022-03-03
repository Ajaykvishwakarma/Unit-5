import logo from './logo.svg';
import './App.css';

function App() {
    // const data = [
    //   { name: "Ajay",   age:21 },
    //   { name: "Abhay",  age:21 },
    //   { name: "Arun",   age:21 },
    //   { name: "Aditya", age:21 },
    //   { name: "Hardik", age:21 }
    // ];
    const operation = ["Android", "Blackberry","iPhone", "Windows Phone"];

    const manufactures = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <div>
        <h1>Mobile Operation System </h1>
      {operation.map((user) => User(user))}
      </div>
      <div>
      <h1>Mobile Manufactures </h1>
      {manufactures.map((user) => User1(user))}
      </div>
    </div>
  )
}

function User(elem) {
    return (
      <div>
        <li>{elem}</li>

      </div>
    )
}

function User1(elem) {
  return (
    <div>
      <li>{elem}</li>
    </div>
  )
}



// function usercomponent({name, age}){
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   )
// }


// return (
  
//   <div className="App">
//     <h1>Hello MasaiSchool : : {name}</h1>
//     <div>You Age is : {age > 10 ? "valid" : "inValid"}</div>
//     <div>
//       <ul><h3>You Worked for :</h3> </ul>
//       {data.map((e) => (<li>{e}</li>))}
//     </div>
//   </div>
// );

export default App;
