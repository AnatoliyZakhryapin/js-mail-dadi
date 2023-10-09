// # js-mail-dadi

// - Creare database con l'indirizzi mail registrati tramitte un array

const usersMailDateBase = [];


for (i=0; i < 100; i++) {
    let n = i + 1;
    usersMailDateBase.push(`utente${n}@gmail.com`)
    console.log(n, usersMailDateBase[i])
}

console.log(usersMailDateBase)

// - Creare la variaviele "mailUtente"

let userMail = prompt("Qual'è il tuo indirizzo mai?")
console.log(userMail)

// - Chiedere ad uttente il suo indirizzo mail tramite prompt  e assegnare il sua valore alla variabile "mailUtente"
// - Controllare se la variabile "mailUtente" è presente nella database tramite for
//     - Se il valore è presente - stampare "L'accesso consestito"
//     ALTRIMENTI - "L'acesso vietato"

// - Creare la variabile con il numero random per pc "numeroPc"
// - Creare la variavile con il numero random per utente "numeroUtente"
// - Confrontare i numeri e stabilire chi a piu punetggio