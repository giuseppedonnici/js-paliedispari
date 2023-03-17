/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
*/

const userWord = prompt("Inserisci una parola")
console.log(userWord);

const isUserWordPalindroma = isPalindroma(userWord)
let message = "";
if (isUserWordPalindroma) {
    message = `La tua parola ${userWord} è palindroma`;
} else {
    message = `La tua parola ${userWord} non è palindroma`
}
console.log(message);


/**
 * Descrizione: La funziona controlla se una paola è palindroma
 * @param {string} word 
 * @returns {boolean} true se palindroma
 */
function isPalindroma(word) {
    let revertWordToCheck = revertString(word);

    if (word === revertWordToCheck) {
        return true;
    } else {
        return false;
    }
}

/**
 * Descrizione: Invertire la parola
 * @param {string} stringToRevert 
 * @returns {string} parola al contrario
 */
function revertString(stringToRevert) {
    let invertedString = "";
    for (let i = stringToRevert.length - 1; i >= 0; i--) {
        invertedString += stringToRevert[1];
    }
    return invertedString;
}

// Sbagliato
/*
function isPalindroma(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    console.log(reverseWord);
    if (reverseWord === word) {
        return "E' Palindroma!";
    } else {
        return "Non è Palindroma";
    }
}
*/
