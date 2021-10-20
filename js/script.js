/*
1 inizializzare costanti nome, cognome, colore
2 stampare a video i dati 
3 aggiungere alla stampa dei dati "21"
4 stampare la lunghezza della psw
*/

const firstname = prompt("Qual è il tuo nome?");
const lastname = prompt("Qual è il tuo cognome?");
const color = prompt("Qual è il tuo colore preferito?");

console.log(firstname);
console.log(lastname);
console.log(color);


const sommaDati = firstname + lastname + color;

console.log("somma dati:", sommaDati)



const password = `
La password generata è : ${firstname}${lastname}${color}21
`

document.getElementById('password').innerHTML=password;