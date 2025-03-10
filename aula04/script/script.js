const inputTarefa = document.getElementById("inputTarefa");
const inputApagaTarefa = document.getElementById("inputApagaTarefa");
const listaTarefas = document.getElementById("listaTarefas");


//instancia a array de tarefas
let arrayTarefas = [];


//verifica se há um conteúdo valido em window.name e atribui o valor á array de tarefas
if(window.name) {
    try {
        arrayTarefas = JSON.parse(window.name);
    } catch (err) {
        console.error("Erro ao carregar window.name = ", err);
        arrayTarefas = [];
    }
}


//Cria um li para cada tarefa existente no "arrayTarefas"
function renderizaTarefas(arrayTarefas){
    listaTarefas.innerHTML = "";


    arrayTarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;


        //cria o botão remover e adiciona ele ao list item
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        /*
        adiciona ao atributo onclick() do botão remover uma chamada á função 
        remover tarefas, passando por parâmetro o index, valor automático da função
        for each
        */
        botaoRemover.onclick = () => removerTarefa(index);
        li.appendChild(botaoRemover);


        //adiciona li para listaTarefas que irá alterar os elementos do DOM
        listaTarefas.appendChild(li);
    });


    inputTarefa.value = "";
    salvarTarefas();
}



function adicionaTarefa() {
    //declarando mensagens
    let mensagemSucesso = "Tarefa adicionada com sucesso.";
    let mensagemErro = "Não foi possível acidionar a tarefa!";

    const novaTarefa = inputTarefa.value.trim();    

    if(novaTarefa){
        arrayTarefas.push(novaTarefa);
        inputTarefa.value="";

        renderizaTarefas(arrayTarefas);
        alteraMensagem(mensagemSucesso, "black");

    } else {
        alteraMensagem(mensagemErro, "red");
    }
}



function removerTarefa(){
    //declarando mensages
    let mensagemSucesso = "Tarefa removida com sucesso!";
    let mensagemErro = "Falha ao remover tarefa, insira um valor válido";
    alert("Entrou")


    const tarefa = inputApagaTarefa.value.trim();

    
    if (tarefa){
        //utiliza do metodo filter para manipulação de array
        arrayTarefas = arrayTarefas.filter(item => item === value);
        renderizaTarefas(arrayTarefas);
        alteraMensagem(mensagemSucesso);

    } else {
        alteraMensagem(mensagemErro);
    }
}



function removerTarefa(index){
    let mensagemSucesso = "Tarefa removida com sucesso!";
    let mensagemErro = "A tarefa digitada não existe ou possui um valor inválido!"

    if (index !== undefined){
        arrayTarefas.splice(index, 1);
        renderizaTarefas(arrayTarefas);
        alteraMensagem(mensagemSucesso, "black")
        renderizaTarefas(arrayTarefas);
        return
    }


    const parametroTarefa = inputApagaTarefa.value.trim();


    if (parametroTarefa) {
        try {
            console.log("Excluindo a tarefa: ", parametroTarefa);

            let length_before = arrayTarefas.length;

            arrayTarefas = arrayTarefas.filter(tarefa => tarefa !== parametroTarefa);
        

            if (length_before === arrayTarefas.length){
                console.error("A tarefa digitada não existe ou possui um valor inválido!");
                alteraMensagem(mensagemErro, "red");    
                return
            }

            renderizaTarefas(arrayTarefas);
            alteraMensagem(mensagemSucesso, "black");

        } catch (err) {
            console.error(err);
            alteraMensagem(mensagemErro, "red");
        }
    }
}



function salvarTarefas(){
    window.name = JSON.stringify(arrayTarefas);
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