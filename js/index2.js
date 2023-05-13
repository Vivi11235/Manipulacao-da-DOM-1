let cliques = 0;

let paragrafo = document.getElementById('paragrafo');

function adicionarClique(){
    cliques++

    paragrafo.innerText = `O contador está com ${cliques} cliques.`

    if(paragrafo.innerText === ``){
    cliques++

    paragrafo.innerText = `O contador está com ${cliques} cliques.`
    }
}

function zerarClique(){
    cliques = 0;

    paragrafo.innerText = ``

}
