// PAROLA PALINDROMA

/*
const content = document.getElementById('content');

const word = prompt('Inserire parola');
const reverse = word.split('').reverse().join('');
let wordPalindrome = palindrome(word);



function palindrome (word){
    if(word == reverse) return true
    return false
}

if(wordPalindrome){
    message = 'La parola ' + word + ' è polindoma'; 
}else {
    message = 'La parola ' + word + ' non è polindoma'; 
}

content.innerHTML = message;
*/

//PARI O DISPARI

const numPlayer = parseInt(prompt('Inserire un numero'));
const  evenOddPlayer= prompt('Pari o dispari');
const numComputer = randomizer(1,5);
const sum = numPlayer + numComputer;
const risultato = evenOdd(sum);

function randomizer (min, max){
    return Math.floor( Math.random()*(max - min +1) + min);
}

function evenOdd (value){
    if(value % 2) return false
    return true
}

console.log(numPlayer);
console.log(numComputer);
console.log(risultato);
