// Obtener el formulario de contacto
const formulario = document.getElementById('formularioContacto');

// Agregar event listener al formulario
formulario.addEventListener('submit', function(evento) {
  // Prevenir el envío por defecto del formulario
  evento.preventDefault();

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Obtener el elemento donde mostrar el mensaje
  const mensajeResultado = document.getElementById('mensajeResultado');

  // Validar que los campos no estén vacíos
  if (nombre === '' || email === '' || mensaje === '') {
    // Mostrar mensaje de error
    mensajeResultado.innerHTML = '<div class="alert alert-danger" role="alert">Error: Todos los campos son obligatorios. Por favor, completa el formulario.</div>';
    mensajeResultado.style.display = 'block';
  } else {
    // Mostrar mensaje de agradecimiento
    mensajeResultado.innerHTML = '<div class="alert alert-success" role="alert">¡Gracias por tu mensaje, ' + nombre + '! Pronto nos pondremos en contacto contigo.</div>';
    mensajeResultado.style.display = 'block';

    // Limpiar el formulario después de enviar exitosamente
    formulario.reset();
  }
});
