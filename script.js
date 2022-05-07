/*
function somar() {
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');

    if (tn1 !== "" && tn2 !== "") {

        var n1 = Number(tn1.value);
        var n2 = Number(tn2.value);

        if (n1 < 0 || n2 < 0 || n1 === "" || n2 === "") {
            window.alert('Não são permitidos valores vazios ou negativos nos campos Valor 1 e Valor 2');
        } else {
            res.value = n1 + n2;
        }

    } else {
        window.alert('Por favor, digite um número!');
    }


}
*/

function somar() {
  var tn1 = window.document.getElementById("txtn1");
  var tn2 = window.document.getElementById("txtn2");
  var n1 = parseFloat(tn1.value);
  var n2 = parseFloat(tn2.value);

  console.log(tn1);
  console.log(tn2);
  console.log(n1);
  console.log(n2);

  if (isNaN(n1) || isNaN(n2)) {
    window.alert("Digite um número inteiro positivo nos 2 campos de valor!");
  } else if (n1 < 0 || n2 < 0 || n1 === "" || n2 === "") {
    window.alert(
      "Não são permitidos valores vazios ou negativos"
    );
  } else {
    res.value = n1 + n2;
  }
}

/*
    var btnSum = document.getElementById('btnSum');
    btnSum.addEventListener('click', somar);
    
    function somar() {
        const firstValue = document.getElementById('txtn1').value;
        const secondValue = document.getElementById('txtn2').value;
        const res = document.getElementById('res');
    
    
        const isNull = firstValue === "" || secondValue === "";
        const isNotNumber = Number.isNaN(Number(firstValue)) || Number.isNaN(Number(secondValue))
        const lessThanZero = firstValue < 0 || secondValue < 0;
    
        if (isNull) {
            alert("Preencha todos os campos!");
            res.value = ""
        } else if (isNotNumber) {
            alert('Digite um número válido!');
            res.value = ""
        } else if (lessThanZero) {
            alert('Digite um valor Maior que zero!');
            res.value = ""
        } else {
            const firstValueNumber = Number(firstValue)
            const secondValueNumber = Number(secondValue)
    
    
            res.value = firstValueNumber + secondValueNumber
        }
    }
    */
