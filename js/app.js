// # js-mail-dadi

// - Creare database con l'indirizzi mail registrati tramitte un array

const usersMailDateBase = [];


for (i=0; i < 100; i++) {
    let n = i + 1;
    usersMailDateBase.push(`utente${n}@gmail.com`)
}

console.log( usersMailDateBase)
// - Creare la variaviele "userMail"
// +
// - Chiedere ad uttente il suo indirizzo mail tramite prompt  e assegnare il

let userMail = prompt("Qual'è il tuo indirizzo mai?")

// - Controllare se la variabile "userMail" è presente nella database tramite for
// + 
//     - Se il valore è presente - stampare "L'accesso consestito"
//     ALTRIMENTI - "L'acesso vietato"

let lenghtArray = usersMailDateBase.length;
let isUserMail;

for (let i = 0; i < lenghtArray; i++) {
    if (usersMailDateBase[i] === userMail) {
       isUserMail = true;
    }
}

!isUserMail ? console.log("L'accesso NON è consestito") 
    :  console.log("Benvenuto") 

// - Creare la variabile con il numero random per pc "numeroPc"
// - Creare la variavile con il numero random per utente "numeroUtente"
// - Confrontare i numeri e stabilire chi a piu punetggio