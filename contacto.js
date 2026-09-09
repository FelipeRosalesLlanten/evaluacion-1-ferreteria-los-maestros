// contacto.js

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

    // 5. Mostramos los datos en la consola y una alerta de prueba
    console.log("--- Datos Capturados ---");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

// --- NUEVO: Mostrar mensaje de éxito bonito en la página ---
    const contenedorAlerta = document.getElementById('mensajeAlerta');
    
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