function calcular(){
    var num = parseInt(document.getElementById('num').value);
    var select = document.getElementById('tabuada')

    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    if (num == 0 || num == ''|| isNaN(num)){
        alert("Digite um número válido")
    }else{
        for (i=1; i<10; i++){
    
            var option = document.createElement('option')
            option.text = `${num} x ${i} = ${num*i}`
            select.add(option)
        }
    }
}