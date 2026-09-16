const second_button = document.querySelector("#second_button");


function change_color(e) {
    if (e.type === "mouseover") {
    e.target.style.backgroundColor = "rgb(56, 129, 245)";
    e.target.style.color = "white";}

    else if (e.type === "mouseout"){
    e.target.style.backgroundColor = "white";
    e.target.style.color = "rgb(56, 129, 245)"; }   
}

second_button.addEventListener("mouseover" , change_color);
second_button.addEventListener("mouseout" , change_color);


/*function change_color() {
    second_button.style.backgroundColor = "rgb(56, 129, 245)";
    second_button.style.color = "white";
   
}

function change_color2() {
    second_button.style.backgroundColor = "white";
    second_button.style.color = "rgb(56, 129, 245)";
   
}*/


  