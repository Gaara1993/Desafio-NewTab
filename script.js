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