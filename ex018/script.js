function conta(){
    let n1 = parseInt(window.document.getElementById('nstart').value)
    let n2 = Number(window.document.getElementById('nend').value)
    let nstep = Number(window.document.getElementById('nstep').value)
    let resp = window.document.getElementById('res')

    var soma = 0
    var resultado = ''
    
    var flag = '\u{1F3C1}'
    
    if (n1 === 0 || n2 === 0 || nstep === 0 || n1 === '' || n2 === '' || nstep === ''){
        window.alert("Nenhum dos valores pode ser zero ou vazio!")
    }else if (n1 < n2){
        for (soma = n1; soma <= n2; soma += nstep){
            resultado += `<p style="display:inline">\u{27A1}${soma} </p>`
            resp.innerHTML = resultado + `\u{1F3C1}`
        }
    }else if (n1 > n2){
        for (soma = n1; soma >= n2; soma -= nstep){
            resultado += `<p style="display:inline">\u{27A1}${soma} </p>`
            resp.innerHTML = resultado + `\u{1F3C1}`
        }
       
    }
}