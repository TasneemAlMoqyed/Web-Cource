
var x = 3;
let numoflikes =document.querySelector("#numoflikes")
function addlike() {
    x++;
    numoflikes.innerText = x;
    if (numoflikes.innerText == 13 ) {
        button5.style.padding = "20px" ;
    }
    else{
        button5.style.padding = "8px 15px";
    }
} 
   
function remove(element) {
    element.remove()
    }

    function chandeInnerText(element) {
        if (element.innerText =="login") {
            element.innerText="log out"
        }
        else{
            element.innerText ="login";
        }
    }
function showAlert() {
    alert("This button was clicked");
    
}
/*
const button5 = document.querySelector("#button5")

button5.addEventListener("click" , event =>{
    button5.style.backgroundColor = "blue";
    button5.style.color = "white";
} )*/


const button2 = document.querySelector("#button2");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");


function changecolor(e) {
    if (e.type === "click") {
    e.target.style.backgroundColor = "blue";
    e.target.style.color = "white";}  
}

button2.addEventListener("click" , changecolor);
button4.addEventListener("click" , changecolor);
button5.addEventListener("click" , changecolor);

