
let amigos = [];

// Quando clicar em adicionar o nome escrito vai para uma lista na parte amigos incluídos

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    if (nome == '') {
        alert('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(nome)) {
        alert('Nome já adicionado!');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(nome);

    if (lista.textContent == '') {
    lista.textContent = nome;
    } else {
        lista.textContent += ', ' + nome;
    }
    document.getElementById('nome-amigo').value = '';
}


// Quando clicar em sortear ele vai pegar os nomes e vai sortear um nome aleatório para fazer par com o nome sorteado sem repetir
function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
}
}


// Função para embaralhar
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


// Reiniciar
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}