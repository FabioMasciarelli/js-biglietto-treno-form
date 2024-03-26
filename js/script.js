
//INPUT
let userAge = prompt("Ciao utente! Quanti anni hai?"); // string | null
console.log(userAge, typeof userAge);

userAge = parseInt(userAge); // number
console.log(userAge, typeof userAge);

let userKm = prompt("Quanti Km vuoi percorrere?"); //string | null
console.log (userKm, typeof userKm);

userKm = parseInt(userKm); // number
console.log(userKm, typeof userKm);


//LOGICA
const variableKm = 0.21; // number
const youngDiscount = 20; // number
const oldDiscount = 40; // number
let discount ="";

// calcolo del prezzo del biglietto in base all'età e al numero di Km che vuole fare il cliente
if (userAge < 18 && userAge > 0) {
    discount = (variableKm * userKm) * (youngDiscount / 100); 
} else if (userAge > 65) {
    discount = (variableKm * userKm) * (oldDiscount / 100); 
} else {
    discount = (variableKm * userKm);
}
console.log(discount, typeof discount);

const finalPrice = (variableKm * userKm) - discount;

// OUTPUT 
//trasformare il numero con soli due valori dopo la virgola
const number = finalPrice.toFixed(2);

finalMessage = `Abbiamo calcolato il prezzo del tuo biglietto ed è di: ${number} €`; // string
document .getElementById("result") .innerHTML = finalMessage;






