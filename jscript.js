const kmPercorsi = prompt('Quanti kilometri vuoi percorrere?');
const etàPassegero = prompt('Quanti anni hai?');
var prezzoBiglietto = kmPercorsi * 0.21;


if(etàPassegero < 18){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 20) / 100;
}
else if(etàPassegero >65){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 40) / 100;;
}

alert(prezzoBiglietto.toFixed(2) + "€");
console.log(prezzoBiglietto)