/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
 */


//SVOLGIMENTO 

//creo un generatore casuale di 5 numeri con array 


console.log(getArrRandomNum(1, 50, 5));


//funzione per creare un array di tot num 

function getArrRandomNum (minNUm, maxNUm, tot){

    const numArr = [];

    //creo un ciclo per popolare l'array con i numeri
   while (numArr.length < tot) {
       const randomNum = genRandomNumInRange(minNUm, maxNUm);
        //metto un if per dare univocità ai miei numeri randomi 
        if(!numArr.includes(randomNum)){  //quindi gli sto dicendo che se il mio random Num non è incluso (!not) allora può pushare
            numArr.push(randomNum);
        } 

        
    }
    return numArr
}

// funzione che genera random num tra min e max
function genRandomNumInRange(min,max ){
    return Math.floor(Math.random () * (max - min + 1)) + min;
}








//genero un countdown di 30 secondi
//seleziono l'elemento di output
//inserisco una variabile di inizio conteggio

//ogni secondo mi toglie un'unità (10,9,8 ecc)
//inserisco output con i secondi aggiornati 
//gestisco l'aggiornamento dell'output
//SE il countdoun finisce allora  
//tolgo il display alla frase "Memorizza i numeri entro il tempo limite"
    //richiamo in pagina il form che fino a questo punto non era visibile


    //all'invio del form il risultato mi dice quanti numeri ho azzeccato 



