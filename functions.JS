function Converter() {
  var valorElemento = document.getElementById("valorEmReal");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5.11;
  var valorEmRealComp = valorEmReal.toFixed(2);
  console.log(valorEmReal);

  var valorEmBTC = valorEmReal * 198698;
  var valorEmBTCComp = valorEmBTC.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "o resultado em Real é R$ " + valorEmRealComp;
  elementoValorConvertido.innerHTML = valorConvertido;

  var elementoBitcoin1 = document.getElementById("ValorEmBitCoin1");
  var valorbitcoin1 = "o valor do Real em BitCoin é BTC " + valorEmBTCComp;
  elementoBitcoin1.innerHTML = valorbitcoin1;
}

function Descobrir() {
  var valorElemento = document.getElementById("valorEmDolar");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmDolar = valorEmRealNumerico / 5.11;
  var valorEmDolarComp = valorEmDolar.toFixed(2);
  console.log(valorEmDolar);

  var valorEmBTC = valorEmDolar * 38743;
  var valorEmBTCComp = valorEmBTC.toFixed(2);

  var elementoValorDescoberto = document.getElementById("valorDescoberto");
  var valorDescoberto = "o resultado em Dolar é US$ " + valorEmDolarComp;
  elementoValorDescoberto.innerHTML = valorDescoberto;

  var elementoBitcoin2 = document.getElementById("ValorEmBitCoin2");
  var valorbitcoin2 = "o valor do Dolar em BitCoin é BTC " + valorEmBTCComp;
  elementoBitcoin2.innerHTML = valorbitcoin2;
}

function Encontrar() {
  var valorElemento = document.getElementById("ValorEmEuro");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorEmEuro = valorEmRealNumerico * 5.44;
  var valorEmEuroComp = valorEmEuro.toFixed(2);
  console.log(valorEmEuro);

  var valorEmBTC = valorEmEuro * 35609;
  var valorEmBTCComp = valorEmBTC.toFixed(2);

  var elementoValorEncontrado = document.getElementById("valorEncontrado");
  var valorEncontrado = "o resultado em Euro é EUR$ " + valorEmEuroComp;
  elementoValorEncontrado.innerHTML = valorEncontrado;

  var elementoBitcoin3 = document.getElementById("ValorEmBitCoin3");
  var valorbitcoin3 = "o valor do Euro em BitCoin é BTC " + valorEmBTCComp;
  elementoBitcoin3.innerHTML = valorbitcoin3;
}
