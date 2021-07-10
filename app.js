var readlineSync = require('readline-sync');
const [id, nome, autor, categoria, paginas, recomenda, leu] = livros

while(true){
    let quest = readlineSync.question("Você deseja encontrar um livro por categoria? S/N\n")
    if(quest === "S" || quest === "s"){
        console.log("Essas são as categorias: ");
        console.log(livros.map(livro => console.log(livro.categoria)));
        quest = readlineSync.question("\nQual categoria você deseja?\n")
        let categoriaEscolhida = livros.filter(livro => quest==livro.categoria ? console.log(livro) : console.log(""))
    }
    
    
    break

}



