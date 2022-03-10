import { useEffect, useState } from "react";
 const axios = require('axios');
export const Grocery = () => {

  //store grocery

  const [text, setText] = useState("");

  const [ groceries, setGroceries] = useState([]);

  const [page, setPage ] = useState(1);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/grocery").then(res => {
  //     setGroceries(res.data)
  //   })
  // },[])

 

  //OR 
  //console.log(page)
  //http://localhost:3001/grocery?_limit=3&_page=${page}

  useEffect(() => {
   getData()
  },[page])

  const getData = () => {
    axios.get(`http://localhost:3001/grocery`).then(res => {
      setGroceries(res.data)
      console.log(res.data[0].id)
    })
  }

  // const deleteData = () => {
  //   axios.delete(`http://localhost:3001/grocery$id`).then(res => {
  //     setGroceries(res.data)
  //   })
  // }
  // deleteData()


  const deletePerson = async (id) => {
    await fetch(`http://localhost:3001/grocery/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })

    await setGroceries(groceries.filter(groceries => groceries.id !== id))
  }
  







   
    return (
    <div>
        <input type = "text" onChange={e => setText(e.target.value)}/>

        <button onClick = {() => {
            fetch("http://localhost:3001/grocery", {
                method: "POST",
                body:JSON.stringify({title : text, purchased : false}),
                headers : {
                    "content-type" : "application/json"
                }
            }).then(() => {
              getData();
            });

            // axios.post("http://localhost:3001/grocery", {title:text, purchased : false})
        }}> save Grocery </button>
           {groceries.map((e) => (
            <div key = {e.id}>{e.title}</div>
           ))}  


        <button onClick= {() => {
          setPage(page - 1);
        }}>Prev</button>

        <button onClick= {() => {
          setPage(page + 1);
        }}>Next</button>
    </div>
   )
}

