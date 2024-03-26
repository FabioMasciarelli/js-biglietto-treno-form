
//INPUT
// DATI
const variableKm = 0.21; // number
const youngDiscount = 20; // number
const oldDiscount = 40; // number
let discount ="";

const btn = document.getElementById("form-btn");
console.log(btn);

btn.addEventListener("click", function () {
    if (userAge < 18 && userAge > 0) {
        discount = (variableKm * userKm) * (youngDiscount / 100); 
    } else if (userAge > 65) {
        discount = (variableKm * userKm) * (oldDiscount / 100); 
    } else {
        discount = (variableKm * userKm);
    }
});


const finalPrice = (variableKm * userKm) - discount;


const number = finalPrice.toFixed(2);

finalMessage = `Abbiamo calcolato il prezzo del tuo biglietto ed è di: ${number} €`; // string
document .getElementById("result") .innerHTML = finalMessage;






