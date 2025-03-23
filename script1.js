document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener las horas ingresadas
  const hora1 = document.getElementById("hora1").value;
  const hora2 = document.getElementById("hora2").value;

  // Validar el formato de las horas
  const formatoValido = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hora1) && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(hora2);

  if (!formatoValido) {
    mostrarResultado("Formato de hora inválido. Usa el formato HH:MM.", "error");
    return;
  }

  // Calcular la diferencia
  const { horas, minutos } = calcularDiferenciaHoras(hora1, hora2);

  // Mostrar el resultado
  mostrarResultado(`La diferencia entre ${hora1} y ${hora2} es de ${horas} horas y ${minutos} minutos.`, "exito");
});

// Función para calcular la diferencia entre dos horas
function calcularDiferenciaHoras(hora1, hora2) {
  const [h1, m1] = hora1.split(":").map(Number);
  const [h2, m2] = hora2.split(":").map(Number);

  const minutos1 = h1 * 60 + m1;
  const minutos2 = h2 * 60 + m2;

  let diferenciaMinutos = Math.abs(minutos2 - minutos1);

  const horas = Math.floor(diferenciaMinutos / 60);
  const minutos = diferenciaMinutos % 60;

  return { horas, minutos };
}

// Función para mostrar el resultado
function mostrarResultado(mensaje, tipo) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = mensaje;
  resultadoDiv.className = "resultado " + tipo; // Agregar clase para estilos
}