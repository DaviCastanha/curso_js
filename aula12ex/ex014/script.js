var msg = window.document.getElementById('msg')

function carregar(){
    var img = window.document.getElementById('imagem')
    var head = window.document.getElementById('head')
    var titulo = head.querySelector('h1')
    var secao = window.document.getElementById('secao')
    var data = new Date()
    var hora = data.getHours().toString().padStart(2, 0)
    var min = data.getMinutes().toString().padStart(2, 0)
    var sec = data.getSeconds().toString().padStart(2, 0)


// Bloco de testes
    // var hor = 1

    // var mint = 0
    // var sect = 30

    // var hora = hor.toString().padStart(2, 0)
    // var min = mint.toString().padStart(2, 0)
    // var sec = sect.toString().padStart(2, 0)
// Bloco de testes


    msg.innerHTML = ` ${hora}:${min}:${sec} `
    msg.style.fontFamily = 'Arial, sans-serif'
    msg.style.fontSize = '30px'
    msg.style.color = 'white'

    if (hora < 6){
        //Madrugada
        titulo.textContent = "Bons sonhos."
        img.src ='madruga.png'
        document.body.style.backgroundColor='#4E4E51'
        secao.style.background = "#535559"
    } else if (hora < 12){
        //Bom dia
        titulo.textContent = 'Sinta o cheiro do orvalho.'
        img.scr = 'manha.png'
        document.body.style.background = '#F6DBC2'
        secao.style.background = "#EBCDB5"
    } else if (hora < 18){
        //Boa tarde
        titulo.textContent = 'Toque a brisa da tarde.'
        img.src = 'tarde.png'
        document.body.style.background = '#FA8855'
        secao.style.background = "#DE7B51"
    } else{
        //Boa noite
        titulo.textContent = 'Contemple as estrelas.'
        img.src = 'noite.png'
        document.body.style.background = '#095DBD'
        secao.style.background = "#224CA0"

        
    }
}

function blinkMessage() {
    carregar()
    msg.classList.toggle('blink');
}
setInterval(blinkMessage, 1000);
