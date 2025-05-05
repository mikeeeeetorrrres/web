lucide.createIcons();

function mostrarSeccion(seccion) {
  document.querySelectorAll('.section').forEach(div => div.classList.remove('active'));
  document.getElementById('seccion-' + seccion).classList.add('active');
  document.getElementById('titulo').textContent =
    seccion === 'una' ? 'Generador de Código de Barras' : 'Generador Doble de Códigos de Barras';
}

function generarUno() {
  const texto = document.getElementById("text-solo").value.trim() || " ";
  JsBarcode("#barcode-solo", texto);
}

function generarCodigos() {
  const texto1 = document.getElementById("text1").value.trim() || " ";
  const texto2 = document.getElementById("text2").value.trim() || " ";
  JsBarcode("#barcode1", texto1);
  JsBarcode("#barcode2", texto2);
}
