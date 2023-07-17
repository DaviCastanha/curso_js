let section = document.getElementById('section')

function randomcor(){
    let vermelho = Math.floor(Math.random()*256);
    let verde = Math.floor(Math.random()*256);
    let azul = Math.floor(Math.random()*256);

    let cor = `rgb(${vermelho}, ${verde}, ${azul})`

    return cor
}

function colorir(){
    let cor_random = randomcor()

    section.style.backgroundColor = cor_random
}