/*
1 inizializzare costanti nome, cognome, colore
2 stampare a video i dati 
3 aggiungere alla stampa dei dati "21"
4 stampare la lunghezza della psw
*/

const firstname = prompt("Qual è il tuo nome?");
const lastname = prompt("Qual è il tuo cognome?");
const color = prompt("Qual è il tuo colore preferito?");
const years = "21"

console.log(firstname);
console.log(lastname);
console.log(color);


const sommaDati = firstname + lastname + color + years;

console.log("somma dati:", sommaDati);



const password = `
<p> La password generata è : ${firstname}${lastname}${color}${years}
</p>
`

document.getElementById('password').innerHTML=password;



let lunghezzaStringa = sommaDati.length;

console.log(lunghezzaStringa);

const lunghezzapsw =
`
<p> La lunghezza della password generata è : ${lunghezzaStringa} caratteri
</p>
`

document.getElementById('lunghezzapsw').innerHTML=lunghezzapsw