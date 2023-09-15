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
const evenOdd = prompt('Pari o dispari');
const numComputer = randomizer(1,5);

function randomizer (min, max){
    return Math.floor( Math.random()*(max - min +1) + min);
}

console.log(numPlayer);
console.log(numComputer);