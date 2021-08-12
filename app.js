const mangas = require('./database.js')
// Selecionar categorias
const readline = require('readline-sync')

const input = readline.question('Deseja buscar um livro? S/N: ')
// Se for Sim, mostra as cagegorias disponiveis e pergunta qual ela escolhe
// Se for não, mostra todos os mangas em ordem crescente de capitulos

if(input.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log('terror/comédia/ação')
    const categoryInput = readline.question('Qual categoria voce escolhe?: ')
    const retorno = mangas.filter(manga => manga.genero === categoryInput)
    console.table(retorno)
}
else{
    const mangasCresc = mangas.sort((a,b) => a.capitulos - b.capitulos)
    console.log('Todos os mangas')
    console.table(mangasCresc)
}



