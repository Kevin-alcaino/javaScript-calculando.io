function restarclics() {
  var cantidad = document.querySelector("#cantidad");
  var actual = cantidad.innerHTML;
  var menos = (cantidad) - 1

  cantidad.innerHTML = menos
}

function sumarclics() {
    var cantidad = document.querySelector("#cantidad");
    var actual = cantidad.innerHTML;
    var mas = (cantidad) + 1
    cantidad.innerHTML = mas
}