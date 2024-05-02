`use strict`

// definisco due variabile: (generare and annullare).document.getElementById(``)
const generare = document.getElementById('invio')
const annullare = document.getElementById('reset')

// metto una variabile (generare) insieme .addEventListener(`click`, function () {})
generare.addEventListener(`click`, 
function () {
    
    // definisco  una variabile per il dettaglio del biglietto
    const block= document.querySelector(`.d-none`)
    block.className=(`d-block`)
    
    //definisco variabile per aggiungere i dati del passeggero
    const nome = document.querySelector(`[type="name"]`) .value;
    const nomeBiglietto = document.querySelector(`.username`);
    nomeBiglietto.innerHTML= (`${nome}`)

    //definisco una variabile di un DOM della input "number"
    const km = document.querySelector(`[type="number"]`) .value;
    //definisco una variabile e la moltiplicazione di due variabile 
    const prezzoBiglietto = 0.21 
    const calcoloChilometro= prezzoBiglietto * km

    // definisco variabile per il tipo di biglietto e il costo
    const tipiBiglietto = document.querySelector(`.ticket-types`);
    const costoBiglietto = document.querySelector(`.cost`);
    const age = document.querySelector(`.form-select`) .value;

    // definisco una condizionale di sconto per minorenni e gli over 65 
    if( age== 1) {
        costoBiglietto.innerHTML= (`${calcoloChilometro} &euro;`)
    }else if(age == 2) {
        const scontoBiglietto2 =  calcoloChilometro * 0.4
        costoBiglietto.innerHTML= (`${scontoBiglietto2} &euro;`)
        tipiBiglietto.innerHTML= (`Biglietto Over 65`)
    }else if(age == 3){
        const scontoBiglietto1 =  calcoloChilometro * 0.2
        costoBiglietto.innerHTML= (`${scontoBiglietto1} &euro;`)
        tipiBiglietto.innerHTML= (`Biglietto Minorenne`)
    } 
}
)
// metto una variabile (annullare) insieme  addEventListener(`click`, function () {}
annullare.addEventListener(`click`,
function () {

    // definisco una variabile per annullare il dettaglio del biglietto
    const block= document.querySelector(`.d-block`)
    block.className=(`d-none`)

    //definisco una variabile per annullare dati personali del dettaglio del biglietto
    const nome = document.querySelector(`[type="name"]`);
    nome.value = ``;
    const km = document.querySelector(`[type="number"]`);
    km.value = ``;
    const age = document.querySelector(`.form-select`) ;
    age.value = `---SELEZIONA---`;
    
}
)