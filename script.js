function Converter() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var ValorEmQuilometros = parseFloat(valor)

  var ValorEmAnos = ValorEmQuilometros * 1.057e-13
  console.log(ValorEmAnos)

  var ElementovalorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O Resultado em Anos-Luz é ' + ValorEmAnos

  ElementovalorConvertido.innerHTML = valorConvertido
}
