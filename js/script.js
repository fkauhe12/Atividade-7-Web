
function soma() {
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);
    let soma = n1 + n2;

    alert("Resultado:" + soma);
}


function sub() {
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);
    let sub = n1 - n2;

    alert("Resultado:" + sub);
}

function mult() {
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);
    let mult = n1 * n2;

    alert("Resultado:" + mult);
}

function div() {
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);
    let div = n1 / n2;

    alert("Resultado:" + div);
}