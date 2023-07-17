function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique se entrou o ano corretamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'

        if (fsex[0].checked){
            if (idade < 3){
                genero ='um bebê'
                img.setAttribute('src', 'bbh.png')
            } else if (idade < 10){
                genero ='uma criança'
                img.setAttribute('src', 'ch.png')
            } else if (idade < 19){
                genero ='um adolescente'
                img.setAttribute('src', 'ah.png')
            } else if (idade < 50){
                genero ='um adulto'
                img.setAttribute('src', 'h.png')
            } else if (idade > 50){
                genero ='uma lenda'
                img.setAttribute('src', 'vh.png')
            }
        } else if (fsex[1].checked){
            if (idade < 3){
                genero ='uma bebê'
                img.setAttribute('src', 'bbm.png')
            } else if (idade < 10){
                genero ='uma criança'
                img.setAttribute('src', 'cm.png')
            } else if (idade < 19){
                genero ='uma adolescente'
                img.setAttribute('src', 'am.png')
            } else if (idade < 50){
                genero ='uma adulta'
                img.setAttribute('src', 'm.png')
            } else if (idade > 50){
                genero ='uma lenda'
                img.setAttribute('src', 'vm.png')
            }
        } else {
            genero = 'alguém'
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}