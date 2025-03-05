function adicionarTarefa() {

    //Declara o valor da variável "mensagemSucesso e da mensagemErro"
    let mensagemSucesso = "Tarefa adicionada com sucesso.";
    let mensagemErro = "Não foi possível acidionar a tarefa!"

    //Atribui à variável "inputTarefa" o elemento inputTarefa
    const inputTarefa = document.getElementById("inputTarefa");
    //Atribui à variavel "tarefa" o valor do elemento inputTarefa
    let tarefa = inputTarefa.value.trim();
    
    const mensagem = document.getElementById("mensagem");


    //Se houver algo no elemento inputTarefa
    if(tarefa){
        //console.log(tarefa);
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "black";

        let listaTarefas = document.getElementById("listaTarefas");
        //console.log(listaTarefas);
        
        //Cria um LI e atribui á variável "novaTarefa"
        let novaTarefa = document.createElement("li");

        //Atribui ao conteúdo de "novaTarefa" o valor de "tarefa"
        novaTarefa.textContent = tarefa;

        //Insere à UL "listaTarefas" a LI "novaTarefa"
        listaTarefas.appendChild(novaTarefa);

    } else {
        mudarPlaceholder("Não é possível adicionar uma tarefa vazia!")
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "red";
    }

    inputTarefa.value = ""
}

function mudarPlaceholder(mensagemPlaceholder){
    document.getElementById("inputTarefa").placeholder = mensagemPlaceholder;
}
