let array = []
let soma = 0
// Criei essa array para receber os valores do input da função add
// E poder manipular eles fora da função, pra depois criar a analisar()

function add(){
    let input = window.document.getElementById('num').value
    let selection = window.document.getElementById('list')
    let option = window.document.createElement('option')
    let log = window.document.getElementById('log')
    log.innerHTML = ''
    
    if (input <=0 || input >100 || input == ''){
        window.alert('Certifique-se de digitar corretamente.')
    } else {
        if (array.includes(Number(input))){
            window.alert(`O valor ${input} já está na lista.`)
        }else{
            array.push(Number(input))
            option.text = `Valor ${input} adicionado.`
            option.value = input
            // A linha de cima serve pra guardar valores do form e usar
            selection.add(option)
            soma += Number(input)
        }
    }
}

function log(){
    let log = window.document.getElementById('log')
    log.innerHTML = ''
    let max = Math.max(...array)
    let min = Math.min(...array)
    let p = window.document.createElement('p')
    p.innerHTML = `Quantidade de números na lista: ${array.length}<br><br>` 
    p.innerHTML += `O maior valor na lista é: ${max}<br><br>`
    p.innerHTML += `O menor valor na lista é: ${min}<br><br>`
    p.innerHTML += `A soma dos itens é de: ${soma}<br><br>`
    p.innerHTML += `A media dos itens é de: ${soma/(array.length)}<br><br>`
    log.appendChild(p)
}