
function yourAgeInDays(){
    var age = prompt("Enter your age: ");
    var ageInDays = (2021 - age) * 365;
    const para = document.createElement("h2")
    const node = document.createTextNode("Your age in day is: " + ageInDays);
    para.setAttribute("id", "yourAgeInDays")
    para.appendChild(node);
    const element = document.getElementById("flex-box-result");
    element.appendChild(para);
}

function reset(){
    const myObj = document.getElementById("yourAgeInDays");
    myObj.remove();
  
}