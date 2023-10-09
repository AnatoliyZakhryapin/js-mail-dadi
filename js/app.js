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



// Creazione database per imagine
const imageBase = [
    "./img/dado1.png", 
    "./img/dado2.png", 
    "./img/dado3.png",
    "./img/dado4.png",
    "./img/dado5.png",
    "./img/dado6.png",
];

let player1DOMElement = document.getElementById("imagePlayer1");
let player2DOMElement = document.getElementById("imagePlayer2");
let btnStartDOMElement = document.getElementById("start");
let vinnertDOMElement = document.getElementById("vinner");

btnStartDOMElement.addEventListener("click", function (){
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
    vinnertDOMElement.innerHTML = vinner;    
    } else {
        vinner = gamer2;
        vinnertDOMElement.innerHTML = vinner;  
    }

    console.log("numberPC", numberPc)
    console.log("numberUser", numberUser)
    console.log(vinner);
    
    let imagePlayer1 = imageBase[numberPc-1];
    let imagePlayer2 = imageBase[numberUser-1];
   
    player1DOMElement.src = imagePlayer1;
    player2DOMElement.src = imagePlayer2;
})

console.log(imagePlayer1)
console.log(imagePlayer2)

