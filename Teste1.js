const readline = require('readline-sync');
let projeto = [];
let valor = [];
let sistema = [];
opcao = 1;

do{
    console.log("+++++++++++++++ MENU +++++++++++++++")
    console.log("+++ MOBILIDADE URBANA SUSTENTAVEL +++")
    console.log("Digite 1 para Inserir seu Projetos")
    console.log("Digite 2 para Listar os seus Projetos")
    console.log("Digite 3 para Alterar seu Projetos")
    console.log("Digite 4 para Excluir seu Projetos")
    console.log("Digite 5 para Sair")

    situacao = readline.question("Digite a opcao desejada: ")

    if (situacao == 1){
        let valor = readline.question("Escreva seu projeto: ")
       projeto.push(valor)
       console.log("Escolha uma Organizacao:")
        sistema = (readline.question("Digite A, B , C: ")).toUpperCase();
       switch(sistema) {
        case "A" :
            console.log(`Nome do projeto: ${valor} , Nome da Organização: ${sistema}`)
            break;
        case "B" :
            console.log(`Nome do projeto: ${valor} , Nome da Organização: ${sistema}`)
            break;
        case "C" :
            console.log(`Nome do projeto: ${valor} , Nome da Organização: ${sistema}`)
            break;
            default:
            console.log("Opção inválida");

          }

    }else if(situacao == 2){
        console.log('Nome do projeto: ' +projeto)
        console.log('Tipo de organizacao: ' +sistema)
    }else if (situacao == 3) {
        let alterartarefa = readline.question('Escolha qual tarefa voce deseja alterar: ')
    novatarefa = readline.question('Digite a nova tarefa: ')
    if (alterartarefa >= 0 && alterartarefa < projeto.length) {
        projeto[alterartarefa] = novatarefa;
        console.log('Lista atualizada')
    }
    }else if (situacao == 4) {
        let excluirtarefa = readline.question('Escolha qual tarefa voce deseja remover: ')
    projeto.splice(excluirtarefa, 1)
    }else if (situacao == 5) {
        opcao = 6
    }

}while(opcao == 1)

console.log("Fim do programa.")