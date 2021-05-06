/* Descrizione:






/*******************************
 * Un alert() espone 5 numeri generati casualmente.
 ********************************/

//funzione per generare numeri casuali compresi tra due estremi
function getRandomNumber(min, max){
    return Math.floor(Math.random() *(max - min)) + min;
}



//creo un array per salvare i numeri estratti

var randomNumbers = [];

//salvarne 5 e in modo che non ci siano doppioni
while(randomNumbers.length < 5){

    var numeroEstratto = getRandomNumber(1,100);
    if(!randomNumbers.includes(numeroEstratto)){
        randomNumbers.push(numeroEstratto);
    }
}

// mostro i numeri estratti all'utente
alert('MEMORIZZA I NUMERI ESTRATTI: '+ randomNumbers);


//Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

var numeriRicordati = []; //variabile per salvare i numeri ricordati dall'utente
var numeriUtente = []; //variabile di controllo per non far inserire all'utente sempre lo stesso numero
var i = 1;      //variabile per il prompt di inserimento numero i-esimo

//timer di 30 secondi
setTimeout(function(){
    confirm('inserisci uno alla volta i numeri che ti ricordi')
    while(numeriUtente.length < 5){
        
        var numeroUtente = Number(prompt('inserisci il ' + i + '° numero:'));

        //controllo per non far inserire all'utente sempre lo stesso numero
        if(!numeriUtente.includes(numeroUtente)){

            numeriUtente.push(numeroUtente);
            i++;

            //controllo se il numero inserito era tra quelli estratti
            if(randomNumbers.includes(numeroUtente)){
                numeriRicordati.push(numeroUtente);
            }
        } 
        else {
            alert('hai già inserito questo numero');
        }     
               
    }
    

    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    document.querySelector(".container").innerHTML = `
     <span> 
            hai indovinato ${numeriRicordati.length} numeri/o: ${numeriRicordati}
        </span>`;
    
}, 3000);

