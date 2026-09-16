const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

function changecolor (e) {
    if (e.type === "click" ) {
        e.target.style.color = "black";
        e.target.style.backgroundColor = "white";}
    
        }



button1.addEventListener("click" , changecolor );
button2.addEventListener("click" ,  changecolor);
button3.addEventListener("click" , changecolor );

