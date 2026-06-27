
function restarclics() {
  var cantidad = document.querySelector("#cantidad");
  var actual = cantidad.innerHTML;
  var menos = actual - 1
  if (actual > 0)
  cantidad.innerHTML = menos;
}

function sumarclics() {
    var cantidad = document.querySelector("#cantidad");
    var precio = document.querySelector("#precio")
    var actual = cantidad.innerHTML;
    var mas = (actual -0) + 1
    cantidad.innerHTML = mas;
    var total = mas * 16990;
    precio.innerHTML = "$" + total;
}

