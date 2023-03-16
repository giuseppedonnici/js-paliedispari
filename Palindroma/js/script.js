/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
*/

const userWord = prompt("Inserisci una parola")
console.log(userWord);
console.log(isPalindroma(userWord));


/**
 * Descrizione: questa funzione prende una parola, la legge al contrario partendo dall'ultima
 * lettera e la paragona a quella originale
 * @param {*} word 
 * @returns un messaggio che ti dice se la parola è o no Palindroma
 */
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
