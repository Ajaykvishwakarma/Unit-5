

// function add(a,b){
//     return a + b;
// }
// function mul(a,b){
//     return a + b;
// }
document.querySelector("#form").addEventListener("submit",formSubmit)
var bozazArr = JSON.parse(localStorage.getItem("bozazData"))||[]
displayTable(bozazArr)
var count = 0;

function store(){
 
    function formSubmit(event){
        var bozazObj={
            description:form.desc.value
        }
    
    
        bozazArr.push(bozazObj)
        displayTable(bozazArr)
        localStorage.setItem("bozazData",JSON.stringify(bozazArr))
    }
}
module.exports =  { store }