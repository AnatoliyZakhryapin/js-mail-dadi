// # js-mail-dadi

// Creazione database per imagine
const imageBase = [
    "./img/dado1.png", 
    "./img/dado2.png", 
    "./img/dado3.png",
    "./img/dado4.png",
    "./img/dado5.png",
    "./img/dado6.png",
];

// - DOM Element
let benvenutoDOMElement = document.getElementById("benvenuto");
let cardLoginDOMElement = document.getElementById("card-login");
let inputMailDOMElement = document.getElementById("input-mail");
let alertMessegeDOMElement = document.getElementById("alert-messege");
let alertNotAccessDOMElement = document.getElementById("alert-not-access");
let alertNeedLoginDOMElement = document.getElementById("alert-need-login");
let sectionGameDOMElement = document.getElementById("section-game");

let namePcDOMElement = document.getElementById("name-pc");
let nameUserDOMElement = document.getElementById("name-user");
let imagePcDOMElement = document.getElementById("image-pc");
let imageUserDOMElement = document.getElementById("image-user");
let vinnertDOMElement = document.getElementById("vinner");

let btnLoginDOMElement = document.getElementById("login");
let btnExitDOMElement = document.getElementById("exit");
let btnGametnDOMElement = document.getElementById("game-dadi");
let btnStartDOMElement = document.getElementById("start");
let btnResetDOMElement = document.getElementById("reset");

// - Creare database con l'indirizzi mail registrati tramitte un array
const usersMailDateBase = [];
for (i=0; i < 100; i++){
    let n = i + 1;
    usersMailDateBase.push(`utente${n}@gmail.com`)
}
let lenghtArray = usersMailDateBase.length; // - Lungezza della dataBase

// - Login utente
btnLoginDOMElement.addEventListener("click", function(){

    // - Mail inserita dal utente
    let userMail = inputMailDOMElement.value;

    // - Controllo se esiste utente
    let isUserMail; // - Prendera il valore true se utente esiste nella database
    for (let i = 0; i < lenghtArray; i++) {
        if (usersMailDateBase[i] === userMail){
            isUserMail = true;
        }
    }

    // - Se utente è logato ci restituisce nome utente(indirizzo mail)
    let userLogged;
    if (isUserMail) {
        userLogged = userMail
    } else {
        userLogged = "";
    } 

    // - Messaggio di benvenuto
    let benvenutoMessage = benvenutoDOMElement.innerHTML += " " + userLogged;

    // - Recupero il valore del input
    let inputValue = inputMailDOMElement.value;
    
    // - Tipo di messaggio da mostrare in base ai dati inseriti
    let alertMessege;
    if (!inputValue) {
        alertMessege = alertNeedLoginDOMElement.classList.remove("d-none") + alertNotAccessDOMElement.classList.add("d-none"); 
    } else {
        alertMessege = alertNotAccessDOMElement.classList.remove("d-none") + alertNeedLoginDOMElement.classList.add("d-none");
    }

    // - Se user mail non esiste compare alert, altimenti ti da benvenuto e     permette di gioccare
    !isUserMail 
        ? alertMessegeDOMElement.classList.remove("d-none") + alertMessege
        : cardLoginDOMElement.classList.add("d-none") 
            + btnExitDOMElement.classList.remove("d-none")
            + benvenutoDOMElement.classList.remove("d-none")
            + benvenutoDOMElement.classList.add("d-block")
            + benvenutoMessage
            + alertMessegeDOMElement.classList.add("d-none")
            + sectionGameDOMElement.classList.remove("d-none")
    
    // - Assegnare il nome dei giocatori 
    var namePc = "PC";
    var nameUser = "User";
    namePcDOMElement.innerHTML = namePc;
    nameUserDOMElement.innerHTML = nameUser;
})

// - Resete alert messege
btnResetDOMElement.addEventListener("click", function (){
    alertMessegeDOMElement.classList.add("d-none")
    alertNeedLoginDOMElement.classList.add("d-none");
    alertNotAccessDOMElement.classList.add("d-none"); 
})

// - star game
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

    // - Cambiare imagini in base hai numeri
    let imagePc = imageBase[numberPc-1];
    let imageUser = imageBase[numberUser-1];
    imagePcDOMElement.src = imagePc;
    imageUserDOMElement.src = imageUser;
 
    // - Confrontare i numeri e stabilire chi ha piu punetggio
    let namePc = "PC";
    let nameUser = "User";
    if (numberPc > numberUser){
        vinnertDOMElement.innerHTML = `Ha vinto ${namePc}`; 
        namePcDOMElement.className = "fw-bold" + " " + "text-success";nameUserDOMElement.className = "fw-bold" + " " + "text-danger";   
    } else {
        vinnertDOMElement.innerHTML = `Ha vinto ${nameUser}`;
        nameUserDOMElement.className = "fw-bold" + " " + " text-success";
        namePcDOMElement.className ="fw-bold" + " " + " text-danger";    
    }
})

