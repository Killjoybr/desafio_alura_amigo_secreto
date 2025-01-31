# Challenge Amigo Secreto ONE Oracle x Alura 

## Escopo
Neste desafio, você desenvolverá uma aplicação que permita aos usuários inserir nomes de amigos em uma lista para, em seguida, realizar um sorteio aleatório e determinar quem é o "amigo secreto".

O usuário deverá adicionar nomes por meio de um campo de texto e de um botão "Adicionar".

Os nomes inseridos serão exibidos em uma lista visível na página, e ao finalizar, um botão "Sortear Amigo" selecionará um dos nomes de forma aleatória, exibindo o resultado na tela.

Para testar o projeto siga o [link](https://ruandavid.tech/projects/amigosecreto)

## Funcionalidades:

- [x] **Adicionar nomes**: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
- [x] **Validar entrada**: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
- [x] **Visualizar a lista**: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
- [x] **Sorteio aleatório**: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.
- [x] **Opção de resetar**: Após o sorteio o botão que antes era "Sortear amigo" vira "Resetar Sorteio" para começar do zero.

## Trechos de código importantes

<details>
<summary><b>Validação de entrada do usuário</b></summary>

```js
function validarInput(input){
    if(badwords.includes(input.toLowerCase())){
        alert("Sem palavrão!");
        return false;
    } else if(arrayAmigos.includes(input)){
        getCampo(idInput).value = "";
        alert("Nome já incluído, adicione o sobrenome ou outro indentificador");
        return false;
    } else if(input.trim() == ""){
        getCampo(idInput).value = "";
        alert("Campo vazio, por favor preencha");
        return false;
    }

    return true;
}
```
</details>

<details>
<summary><b>Adição de amigos no html</b></summary>

```js
function adicionarNaLista(nome, listaId){
    let lista = getCampo(listaId);
    let elementoLista = document.createElement("li");
    elementoLista.appendChild(document.createTextNode(nome));
    lista.appendChild(elementoLista);
}
```
</details>

<details>
<summary><b>Separando constantes</b></summary>

```js
// Constantes do código
const idInput = "amigo";
const idlistaAmigos = "listaAmigos";
const idresultado = "resultado";
const idbotaoSorteio = "botaoSorteio"
const htmlBotaoReset = '<img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Resetar Sorteio';
const htmlBotaoSorteio = '<img src="assets/play_circle_outline.png" alt="Ícone para sortear"> Sortear Amigo';
const badwords = ["censurado"]    
```
</details>

<details>
<summary><b>"Mágica" do sorteio.</b></summary>
Obs: -0 & +0 foram devido a refatoração de uma antiga constante

```js
function getRandom(max) {
    return Math.floor(Math.random() * ((max) - 0) + 0);
}
```
</details>
