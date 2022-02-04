const kmPercorsi = prompt('Quanti kilometri vuoi percorrere?');
const etàPassegero = prompt('Quanti anni hai?');
var prezzoBiglietto = kmPercorsi * 0.21;

if(isNaN(kmPercorsi) || isNaN(etàPassegero) ){
    alert('Scrivi numeri')
}else if((kmPercorsi < 0) ||  (etàPassegero < 0)){
    alert('Numeri negativi non validi')
}else if(etàPassegero > 100){
    alert('Sopra i 100 anni meglio se stai a casa')
}
else{

    if(etàPassegero < 18){
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 20) / 100;
    }
    else if(etàPassegero >65){
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 40) / 100;;
    }

    alert(prezzoBiglietto.toFixed(2) + "€");
    console.log(prezzoBiglietto)
}