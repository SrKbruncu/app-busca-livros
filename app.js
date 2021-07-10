const livros = require('./database')

var readlineSync = require('readline-sync');
const [id, nome, autor, categoria, paginas, recomenda, leu] = livros

while(true){
    let quest = readlineSync.question("Voce deseja encontrar um livro por categoria? S/N\n")
    if(quest.toLocaleUpperCase() === "S"){
        console.log("Essas são as categorias: ");
        livros.map(livro => console.log(livro.categoria));
        let flagResposta = null;
        while(flagResposta != true){
            quest = readlineSync.question("\nQual categoria voce deseja?\n");
            livros.find(livro => livro.categoria===quest) != undefined ? flagResposta = true : flagResposta = false;
        } 
        let categoriaEscolhida = livros.sort((a,b) => a.paginas-b.paginas);
        categoriaEscolhida = livros.filter(livro => quest===livro.categoria);
        console.table(categoriaEscolhida);
        break
    }else if(quest.toLocaleUpperCase() === "N"){
        console.log("Esses são todos os livros: ");
        let todosLivros = livros.sort((a,b) => a.paginas-b.paginas);
        console.table(todosLivros);
        break
    }else{
        console.log("Informe uma resposta válida!");
    }
    
    
    

}



