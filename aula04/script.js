function adicionarTarefa() {
    //declarando o array de tarefas com uma variável que persiste enquanto a aba estiver aberta
    let tarefas = window.name ? JSON.parse(window.name) : [];
    
    
    //declarando mensagens
    let mensagemSucesso = "Tarefa adicionada com sucesso.";
    let mensagemErro = "Não foi possível acidionar a tarefa!";


    //capturando os elementos necessários
    const inputTarefa = document.getElementById("inputTarefa");

    const mensagem = document.getElementById("mensagem");
    

    //capturando o valor no input "inputTarefa";
    let tarefa = inputTarefa.value.trim();
    let apagaTarefa = inputApagaTarefa.value.trim();


    if(tarefa){
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "black";
        tarefas.push(tarefa);
        //alert(tarefas);
        renderizaTarefas(tarefas);
    } else {
        document.getElementById("inputTarefa").placeholder = "Não é possível adicionar uma tarefa vazia!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "red";
    }

    inputTarefa.value = "";
    window.name = JSON.stringify(tarefas);
}

function apagaTarefa(){
    //recebe a array que persistiu na variável window.nam
    let tarefas = window.name ? JSON.parse(window.name) : [];

    const inputApagaTarefa = document.getElementById("inputApagaTarefa");
    const apagaTarefa = inputApagaTarefa.value;

    tarefas = tarefas.filter(tarefa => tarefa !== apagaTarefa);
    //alert(tarefas)

    window.name = JSON.stringify(tarefas);

    renderizaTarefas(tarefas)
}

function renderizaTarefas(tarefas){
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    tarefas.forEach(tarefa => {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);
    });
}

function mudarPlaceholder(mensagemPlaceholder){
    
}
