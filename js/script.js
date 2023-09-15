const parola = ('enne');
const reverse = parola.split('').reverse().join('');
let parolaPalindroma = palindroma(parola);
console.log(parolaPalindroma);

function palindroma (parola){
    if(parola == reverse) return true
    return false
}