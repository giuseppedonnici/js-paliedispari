/*
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// Continua a chiedere all'utente una scelta tra "pari" e "dispari"
let sceltaPariDispari;
do {
    sceltaPariDispari = prompt("Scegli pari o dispari");
    
} while (sceltaPariDispari !== "pari" && sceltaPariDispari !== "dispari");
console.log(`La tua scelta è: ${sceltaPariDispari}`);

// Continua a chiedere all'utente un numero compreso tra 1 e 5
let sceltaNumero;
do {
    sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
} while (sceltaNumero < 1 || sceltaNumero > 5);

console.log(`Il numero che hai scelto è: ${sceltaNumero}`);

// Genera un numero random per il computer tramite funzione
const numeroComputer = getRndInteger(1, 5);
console.log(`Il numero del computer generato casualmente è: ${numeroComputer}`);

// Somma i due numeri
const sommaNumeri = sceltaNumero + numeroComputer;

// Stabilisci se la somma dei due numeri è pari o dispari tramite funzione
const risultatoFinale = isPariOrDispari(sommaNumeri);

// Confronta il risultato finale con la scelta che ha fatto l'utente e stabilisci chi ha vinto
if (risultatoFinale === sceltaPariDispari) {
    console.log(`Complimenti!!! Siccome la somma dei numeri è ${sommaNumeri} e quindi è ${risultatoFinale} hai vinto!!!`);
} else {
    console.log(`Mi dispiace =( Siccome la somma dei numeri è ${sommaNumeri} e quindi è ${risultatoFinale} ha vinto il computer`);
}

/**
 * Descrizione: Dato un numero controlla se è pari o dispari
 * @param {number} number 
 * @returns stringa
 */
function isPariOrDispari(number) {
    let result;
    if (number % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}

 /**
  * Genera un numero random compreso tra min e max
  * @param {number} min 
  * @param {number} max 
  * @returns {number} il numero random generato
  */
 function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }