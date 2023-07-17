var idade = 15
if (idade < 16){
    console.log('Não vota')
} else {
    if (idade >= 16 && idade <18){
        console.log('Seu voto é permitido, porém opcional.')
    } else{
        console.log('Seu voto é mandatório.')
    }
}