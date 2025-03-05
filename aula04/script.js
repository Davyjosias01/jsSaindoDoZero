function adicionaTarefa() {

    //declarando mensagens
    let mensagemSucesso = "Tarefa adicionada com sucesso.";
    let mensagemErro = "Não foi possível acidionar a tarefa!";

    //capturando os elementos necessários
    const inputTarefa = document.getElementById("inputTarefa");

    //capturando o valor no input "inputTarefa";
    let tarefa = inputTarefa.value.trim();
    let apagaTarefa = inputApagaTarefa.value.trim();

    if(tarefa){
        //declarando o array de tarefas com uma variável que persiste enquanto a aba estiver aberta
        let arrayTarefas = window.name ? JSON.parse(window.name) : [];

        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;

        console.log("Nova tarefa = " + novaTarefa)

        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";

        console.log("Botão remover = " + botaoRemover)
        
        novaTarefa.appendChild(botaoRemover);

        console.log("Nova tarefa = " + novaTarefa)

        arrayTarefas.push(novaTarefa);



        renderizaTarefas(arrayTarefas);

        window.name = JSON.stringify(arrayTarefas);

        alteraMensagem(mensagemSucesso, "black");
    } else {
        alteraMensagem(mensagemErro, "red");
    }

    inputTarefa.value = "";
}

function apagaTarefa(){
    let mensagemErro = "Insira um valor válido no campo de apagar tarefas!"
    let mensagemSucesso = "Tarefa apagada com sucesso!"

    const inputApagaTarefa = document.getElementById("inputApagaTarefa");
    const apagaTarefa = inputApagaTarefa.value.trim();

    if(apagaTarefa){
        //recebe a array que persistiu na variável window.nam
        let arrayTarefas = window.name ? JSON.parse(window.name) : [];
        let tamanhoAntes = arrayTarefas.length;

        //filtrando a array com o valor passado por parâmetro
        arrayTarefas = arrayTarefas.filter(tarefa => tarefa !== apagaTarefa);
        
        if (tamanhoAntes !== arrayTarefas.length){
            alteraMensagem(mensagemSucesso);
            window.name = JSON.stringify(arrayTarefas);
            renderizaTarefas(arrayTarefas);    
        } else {
            alteraMensagem(mensagemErro, "red");
        }

    } else {
        alteraMensagem(mensagemErro, "red")
    }
    
    apagaTarefa = "";
}

function alteraMensagem(mensagem){
    const elementMensagem = document.getElementById("mensagem");
    elementMensagem.textContent = mensagem;
}

function alteraMensagem(mensagem, cor){
    const elementMensagem = document.getElementById("mensagem");
    elementMensagem.textContent = mensagem;
    elementMensagem.style.color = cor;
}

function renderizaTarefas(arrayTarefas){
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    arrayTarefas.forEach(tarefa => {
        listaTarefas.appendChild(tarefa.value);
    });
}
