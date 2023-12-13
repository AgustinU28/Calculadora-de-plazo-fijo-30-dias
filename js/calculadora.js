function calcular() {
    // Obtener los valores del formulario
    var monto = parseFloat(document.getElementById("monto").value);
    var tasa = parseFloat(document.getElementById("tasa").value);
    var periodo = parseFloat(document.getElementById("periodo").value);

    // Realizar el cálculo del interés
    var interes = (monto * tasa * periodo) / (365 * 100);

    // Mostrar el resultado en pantalla
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "El interés generado es de $" + interes.toFixed(2) + " para un plazo fijo de " + periodo + " días.";
}
