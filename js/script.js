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