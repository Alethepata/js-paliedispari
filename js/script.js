const word = prompt('Inserire parola');
const reverse = word.split('').reverse().join('');
let wordPalindrome = palindrome(word);

function palindrome (word){
    if(word.toLowerCase == reverse.toLowerCase) return true
    return false
}

if(wordPalindrome){
    message = 'si'; 
}else {
    message = 'no'; 
}

console.log(message);