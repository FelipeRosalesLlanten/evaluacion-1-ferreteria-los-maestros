
// 1. Seleccionamos el formulario usando su ID
const formulario = document.getElementById('MiFormulario');

// 2. Escuchamos el evento 'submit'
if (formulario) {
  formulario.addEventListener('submit', function(evento) {
    
    // 3. Evitamos que la página se recargue
    evento.preventDefault(); 

    // 4. Capturamos los valores
    const nombre = document.getElementById('NombreInput').value;
    const email = document.getElementById('EmailInput').value;
    const mensaje = document.getElementById('MensajeInput').value;

// Declaramos el contenedor de la alerta al inicio para usarlo en cualquier validación
    const contenedorAlerta = document.getElementById('mensajeAlerta');

// --- VALIDACIÓN 1: Formato general del correo (Regex) ---
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if (!regexCorreo.test(email)) {
      contenedorAlerta.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
          <strong>¡Error!</strong> El formato del correo electrónico no es válido. Asegúrate de incluir un "@" y un punto.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
      return; // Detenemos la ejecución
    }

    // --- VALIDACIÓN 2: Dominios permitidos (@duoc.cl, @profesor.duoc.cl, @gmail.com) ---
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const esValido = dominiosPermitidos.some(dominio => email.endsWith(dominio));

    if (!esValido) {
      contenedorAlerta.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
          <strong>¡Correo no permitido!</strong> Solo se aceptan correos institucionales (@duoc.cl, @profesor.duoc.cl) o de Gmail (@gmail.com).
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      `;
      return; // Detenemos la ejecución
    }

    // 5. Mostramos los datos en la consola y una alerta de prueba
    console.log("--- Datos Capturados ---");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    contenedorAlerta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
        <strong>¡Enviado!</strong> Gracias <strong>${nombre}</strong>, tus datos se registraron con éxito.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    
    // Limpiamos el formulario
    formulario.reset();
  });
}

