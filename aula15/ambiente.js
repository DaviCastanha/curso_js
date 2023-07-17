let num = [3, 5, 7]
num[3] = 9
num.sort()
num.push(8)

console.log(`O vetor tem ${num.length} índices.`)
console.log(`Nosso vetor é o ${num}`)

let pos = num.indexOf(4)

if (pos == -1){
    console.log(`Valor não encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}