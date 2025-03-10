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
    
    inputApagaTarefa.value = "";
}