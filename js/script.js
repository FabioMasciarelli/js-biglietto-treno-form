
//INPUT
// DATI
const variableKm = 0.21; // number
const youngDiscount = 20; // number
const oldDiscount = 40; // number
let discount = 0;

const btn = document.getElementById("form-btn");

btn.addEventListener("click", function () {
    console.log(btn);
    //raccolta dati
    let userAge = document.getElementById("userage").value;

    let userName = document.getElementById("username").value;

    let userKm = document.getElementById("userkm").value;
    userKm = parseInt(userKm); // number
    console.log(userKm, typeof userKm);

    if (userAge === "minorenne") {
        discount = (variableKm * userKm) * (youngDiscount / 100); 
    } else if (userAge === "over65") {
        discount = (variableKm * userKm) * (oldDiscount / 100); 
    } else if (userAge === "maggiorenne") {
        discount = (variableKm * userKm);
    }
    console.log(discount);

    const number = (variableKm * userKm) - discount;
    
    const outputPrice = number.toFixed(2);
    console.log(outputPrice);

    document.querySelector(".output-name").innerHTML = userName;
    document.querySelector(".output-km").innerHTML = userKm;
    document.querySelector(".price").innerHTML = outputPrice;

    let output = document.querySelector(".ticket-output");
    output.classList.add("block");

});







