// Constantes do código
const idInput = "amigo";
const badwords = [
    "porra", "pênis", "penis", "caralho", "bosta", "merda", "puta", "puto", 
    "desgraça", "desgraca", "cacete", "cu", "foda", "foder", "arrombado", 
    "viado", "buceta", "xoxota", "babaca", "otário", "otario", "vagabundo", 
    "vagabunda", "piranha", "prostituta", "prostituto", "fdp", "pqp", "carai", 
    "caralho", "cuzão", "cuzona", "pau", "rola", "piroca", "xana", "xaninha", 
    "xavasca", "xereca", "xota", "xoxota", "xibiu"
];

// Variáveis do código
let arrayAmigos= [];

// Funções do código
function adicionarAmigo (){

}

function sortearAmigo(){

}

function validarInput(input){
    badwords.includes(input.toLowerCase()) ? alert("É sério?") : null;
}