var agora = new Date()
var hora = agora.getHours()

if (hora >= 18 || hora <= 5){
    console.log('Boa noite!')
}else{
    if (hora >= 6 && hora <= 12){
        console.log ('Bom dia!')
    } else{
        console.log ('Boa tarde!')
    }
}