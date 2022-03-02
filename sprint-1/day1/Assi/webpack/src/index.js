// import { } from "./calc";

import "./index.css";
import Icon from "./Todo-Logo.png";


// import logo from "./logo.png"



// document.write("Hello ")

const h1 = document.createElement("h1");
h1.innerText = "Show the data";
h1.classList.add("redtext");


function component() {
    const element = document.createElement('div');
 
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.setAttribute("id","icon")
   myIcon.src = Icon;
 
   element.appendChild(myIcon);
 
    return element;
  }
  let image = document.getElementById("image");
  image.appendChild(component());





document.getElementById("root").append(h1);

document.querySelector("#store").addEventListener("click",storeTheData);
var dataArr = JSON.parse(localStorage.getItem("Data"))||[]
// let userdata = document.querySelector("#desc").innerText;

function storeTheData(){
   
    var dataObj={

        description:document.querySelector("#desc").value
    }
    dataArr.push(dataObj)
    localStorage.setItem("Data",JSON.stringify(dataArr))
    displayTable(dataArr)
}


displayTable(dataArr)

function displayTable(dataArr){
    let show = document.getElementById("show")
    show.innerHTML = null;
    console.log(dataArr)
    dataArr.map(function(elem,index){
        let div1 = document.createElement("div")
        
       let p1 = document.createElement("p")
       let btn = document.createElement("button")
       btn.innerText = "Remove";
        btn.addEventListener('click',function(){
            deleteRow(index)
        })

        p1.textContent=elem.description;
        div1.append(p1,btn)
        show.append(div1);
        
    })

    function deleteRow(index){
        dataArr.splice(index,1)
        localStorage.setItem("Data",JSON.stringify(dataArr))
        displayTable(dataArr)
    }
  }







    





// function formSubmit(event){

//     event.preventDefault()
// count++;
//     var bozazObj={
//         category:form.cat.value,
//         title:form.title.value,
//         description:form.desc.value,
//         price:form.price.value,
//         id:count
//     }
// console.log(count)

//     bozazArr.push(bozazObj)
//     displayTable(bozazArr)
//     localStorage.setItem("bozazData",JSON.stringify(bozazArr))
// }


// function displayTable(bozazArr){
//     var tbody = document.querySelector("tbody")
//     tbody.textContent=""
//     console.log(bozazArr)
//     bozazArr.map(function(elem,index){
//         var td5 = document.createElement("button")
       
//         td5.addEventListener('click',function(){
//             deleteRow(index)
//         })

//         td3.textContent=elem.description;

//         tr.append(td3);
//         tbody.append(tr);
//     })

//     function deleteRow(index){
//         bozazArr.splice(index,1)
//         localStorage.setItem("bozazData",JSON.stringify(bozazArr))
//         displayTable(bozazArr)
//     }
//   }
