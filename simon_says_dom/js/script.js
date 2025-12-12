/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
 */


//SVOLGIMENTO 

//creo un generatore casuale di 5 numeri con array 

//li faccio visualizzare in pagina
//mi prendo la ul dove inserire i miei numeri
const numberList = document.getElementById('numbers-list');
//aggiungo i numeri 
const randomListNumbers = getArrRandomNum(1, 50, 5);
numberList.innerText = randomListNumbers;



//funzione per creare un array di tot num 

function getArrRandomNum (minNUm, maxNUm, tot){

    const numArr = [];

    //creo un ciclo per popolare l'array con i numeri
   while (numArr.length < tot) {
       const randomNum = genRandomNumInRange(minNUm, maxNUm);
        //metto un if per dare univocità ai miei numeri randomi 
        if(!numArr.includes(randomNum)){  //quindi gli sto dicendo che lo aggiunge solo se non è già presente nell'Array e quindi non me lo scrive due volte
            numArr.push(randomNum);
        } 

        
    }
    return numArr
}

// funzione che genera random num tra min e max
function genRandomNumInRange(min,max ){
    return Math.floor(Math.random () * (max - min + 1)) + min;
}


//----- COUNTDOWN SECTION -----
//genero un countdown di 30 secondi

//richiamo l'elemento di output
const timerOutput = document.getElementById('countdown');
//mi richiamo anche la scritta che poi vado a eliminare 
const instParagraph = document.getElementById('instructions');
//richiamo il form per mettergli il display una volta finito il countdown 
const answersForm = document.getElementById('answers-form')
//inserisco una variabile di inizio conteggio
let seconds = 30;

//ogni secondo mi toglie un'unità (10,9,8 ecc)
//inserisco output con i secondi aggiornati
timerOutput.innerText = seconds; 

//gestisco l'aggiornamento dell'output
const time =setInterval( () =>{
    //SE il countdoun finisce allora  
    if(seconds === 0){

        //fermo il timer
        clearInterval(time);
        
        //tolgo il display alla frase "Memorizza i numeri entro il tempo limite"
        instParagraph.classList.add('d-none');
        //tolgo il display anche ai numeri 
        numberList.classList.add('d-none');
        //metto il display al form
        answersForm.classList.remove('d-none');
}   else{
    //decremento seconds 
    seconds = seconds -1 
    timerOutput.innerText = seconds;
}

}, 100)


    //all'invio del form il risultato mi dice quanti numeri ho azzeccato 
    //creo un evento che al submit mi dice quanti numeri ha indovinato l'utente 

    answersForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        //creo una variabile per i numeri azzeccati con array
        let numArrGuess = [];
        let userNums = document.querySelectorAll("#input-group input");
        //creo il messaggio 
        let finalMessage = document.getElementById('message');

        //creo il ciclo finale su tutti gli input inseriti dall'utente

        for (let i = 0; i < userNums.length; i++){
            let numUser = parseInt(userNums[i].value);
            if(randomListNumbers.includes(numUser) && !numArrGuess.includes(numUser)){
                numArrGuess.push(numUser);
            }
        }
        finalMessage.innerText = `Bene! Hai indovinato ${numArrGuess.length} numeri! ${numArrGuess.join(", ")}`
    });



