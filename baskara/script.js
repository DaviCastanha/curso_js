

function armazenar(){
    var a = Number(window.document.getElementById('a').value)
    var b = Number(window.document.getElementById('b').value)
    var c = Number(window.document.getElementById('c').value)
    var div = window.document.getElementById('div')
    var p = document.createElement('p') 
    
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    p.innerHTML = `Sua função é: ${a}x² + ${b}x + ${c} <br><br>`

    var delta = b * b - 4 * a * c;

    var x1, x2;

    if (delta > 0) {
        x1 = Math.round(-b + Math.sqrt(delta)) / (2 * a);
        x2 = Math.round(-b - Math.sqrt(delta)) / (2 * a);
        p.innerHTML += "As raízes são: " + x1 + " e " + x2;
      } else if (delta === 0) {
        x1 = -b / (2 * a);
        p.innerHTML += "A raiz dupla é: " + x1;
      } else {
        p.innerHTML += "A equação não possui raízes reais.";
      }
    div.appendChild(p)
}
