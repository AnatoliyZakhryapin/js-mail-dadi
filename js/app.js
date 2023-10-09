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
    :  console.log("Benvenuto");

// # DADI

// - Creazione delle variabili per i giocatori
let numberPc;
let numberUser;

// - Assegnare il numero random alle variabile finche non sarrano diversi
do {
    numberPc = Math.floor(Math.random() * (6 - 1) ) + 1;
    numberUser =  Math.floor(Math.random() * (6 - 1) ) + 1;
  }
  while (numberPc == numberUser);

// - Confrontare i numeri e stabilire chi a piu punetggio
let gamer1 = "PC";
let gamer2 = "User";
let vinner;

if (numberPc > numberUser) {
   vinner = gamer1;
} else {
    vinner = gamer2;
}

console.log("numberPC", numberPc)
console.log("numberUser", numberUser)
console.log(vinner);