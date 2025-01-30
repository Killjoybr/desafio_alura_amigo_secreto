// Constantes do código
const idInput = "amigo";
const idlistaAmigos = "listaAmigos";
const idresultado = "resultado";
const idbotaoSorteio = "botaoSorteio"
const htmlBotaoReset = `<img src="assets/play_circle_outline.png" alt="Ícone para sortear">Sortear amigo`
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
let sorteioRealizado = false;

// Funções do código
function adicionarAmigo(){
    let input = getCampo(idInput).value;
    if(!validarInput(input)){
        return;
    }
    arrayAmigos.push(input);
    adicionarNaLista(input, idlistaAmigos);
    getCampo(idInput).value = "";
}

function sortearAmigo(){
    let lenArr = arrayAmigos.length;
    let nomeSorteado = arrayAmigos[getRandom(lenArr)];
    sorteadoPreReset = nomeSorteado;

    if(arrayAmigos.length <= 1){
        return alert("Adicione mais amigos antes de sortear");
    }

    sorteioRealizado = true;
    alert(`Uhull você tirou: ${nomeSorteado}`);
    adicionarNaLista(nomeSorteado, idresultado);
    limparLista(idlistaAmigos);
}

function adicionarNaLista(nome, listaId){
    let lista = getCampo(listaId);
    let elementoLista = document.createElement("li");
    elementoLista.appendChild(document.createTextNode(nome));
    lista.appendChild(elementoLista);
}

function limparLista(idLista){
    let lista = getCampo(idLista);
    lista.innerHTML = "";
}

function validarInput(input){
    if(badwords.includes(input.toLowerCase())){
        alert("Sem palavrão!");
        return false;
    } else if(arrayAmigos.includes(input)){
        alert("Nome já incluído, adicione o sobrenome ou outro indentificador");
        return false;
    }
    return true;
}

function getCampo(idCampo){
    if (idCampo == null) {
        console.log("Erro, idCampo vazio ou não encontrado");
        return;
    };
    const campo = document.getElementById(idCampo);
    return campo;
}

function getRandom(max) {
    return Math.floor(Math.random() * ((max) - 0) + 0);
}

function resetGame(){

}