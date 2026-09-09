// --- DATOS PARA REGIONES Y COMUNAS (NO TODAS POR EL MOMENTO) ---
const regionesYcomunas = {

    "Región de Coquimbo": [
        "Andacollo", "Canela", "Combarbalá", 
        "Coquimbo", "Illapel", "La Higuera", 
        "La Serena", "Los Vilos", "Monte Patria", 
        "Ovalle", "Paihuano", "Punitaqui", 
        "Río Hurtado", "Salamanca", "Vicuña"
    ],

    "Región Metropolitana": [
        "Buin", "Cerrillos", "Cerro Navia", 
        "Colina", "Conchalí", "El Bosque", 
        "Estación Central", "Huechuraba", "Independencia", 
        "La Cisterna", "La Florida", "La Granja", 
        "La Pintana", "La Reina", "Lampa", 
        "Las Condes", "Lo Barnechea", "Lo Espejo", 
        "Lo Prado", "Macul", "Maipú", 
        "Ñuñoa", "Pedro Aguirre Cerda", "Peñaflor", 
        "Peñalolén", "Providencia", "Pudahuel", 
        "Puente Alto", "Quilicura", "Quinta Normal", 
        "Recoleta", "Renca", "San Bernardo", 
        "San Joaquín", "San Miguel", "San Ramón", 
        "Santiago", "Vitacura"
    ],

    "Región de O'Higgins": [
        "Chépica", "Chimbarongo", "Codegua", 
        "Coinco", "Coltauco", "Doñihue", 
        "Graneros", "La Estrella", "Las Cabras", 
        "Litueche", "Lolol", "Machalí", 
        "Malloa", "Marchigüe", "Mostazal", 
        "Nancagua", "Navidad", "Olivar", 
        "Palmilla", "Paredones", "Peralillo", 
        "Peumo", "Pichidegua", "Pichilemu", 
        "Placilla", "Pumanque", "Quinta de Tilcoco", 
        "Rancagua", "Rengo", "Requínoa", 
        "San Fernando", "San Vicente de Tagua Tagua", "Santa Cruz"
    ],

    "Región de Valparaíso": [
        "Algarrobo", "Cabildo", "Calle Larga", 
        "Cartagena", "Casablanca", "Catemu", 
        "Concón", "El Quisco", "El Tabo", 
        "Hijuelas", "La Calera", "La Cruz", 
        "La Ligua", "Limache", "Llay-Llay", 
        "Los Andes", "Nogales", "Olmué", 
        "Panquehue", "Papudo", "Petorca", 
        "Puchuncaví", "Putaendo", "Quillota", 
        "Quilpué", "Quintero", "Rinconada", 
        "San Antonio", "San Esteban", "San Felipe", 
        "Santa María", "Santo Domingo", "Valparaíso", 
        "Villa Alemana", "Viña del Mar", "Zapallar"
    ]
};

// USUARIOS DE PRUEBA
const usuariosPrueba = [
    { correo: "profe@profesor.duoc.cl", clave: "1234", rol: "Administrador" },
    { correo: "vendedor@duoc.cl", clave: "1234", rol: "Vendedor" },
    { correo: "cliente@gmail.com", clave: "1234", rol: "Cliente" }
];


// FUNCIONES:

// DOMINIOS DE CORREO PERMITIDOS
function validarCorreo(correo) {
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    return dominiosPermitidos.some(dominio => correo.endsWith(dominio));
}

// VALIDAR RUT CHILENO
function validarRut(rutCompleto) {
    // Verificar formato inicial (solo números y K al final, sin guion ni puntos)
    if (!/^[0-9]+[0-9Kk]$/.test(rutCompleto)) {
        return false;
    }
    
    let rut = rutCompleto.slice(0, -1);
    let dvIngresado = rutCompleto.slice(-1).toUpperCase();
    
    let suma = 0;
    let multiplo = 2;
    
    for (let i = rut.length - 1; i >= 0; i--) {
        suma += parseInt(rut.charAt(i)) * multiplo;
        if (multiplo < 7) {
            multiplo++;
        } else {
            multiplo = 2;
        }
    }
    
    let dvEsperado = 11 - (suma % 11);
    dvEsperado = (dvEsperado === 11) ? 0 : ((dvEsperado === 10) ? "K" : dvEsperado);
    
    return dvEsperado.toString() === dvIngresado;
}


// INICIALIZAR SELECTS
document.addEventListener('DOMContentLoaded', () => {
    const selectRegion = document.getElementById('regionRegistro');
    const selectComuna = document.getElementById('comunaRegistro');

    // Cargar Regiones en el select
    if (selectRegion) {
        for (const region in regionesYcomunas) {
            let option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            selectRegion.appendChild(option);
        }

        // Al cambiar la región, cargar sus comunas
        selectRegion.addEventListener('change', function() {
            const regionSeleccionada = this.value;
            // Limpiar opciones anteriores
            selectComuna.innerHTML = '<option value="">Seleccione una comuna</option>'; 
            
            if (regionSeleccionada && regionesYcomunas[regionSeleccionada]) {
                regionesYcomunas[regionSeleccionada].forEach(comuna => {
                    let option = document.createElement('option');
                    option.value = comuna;
                    option.textContent = comuna;
                    selectComuna.appendChild(option);
                });
            }
        });
    }
});


// INICIO DE SESIÓN
const formularioLogin = document.getElementById('formLogin');

if (formularioLogin) {
  formularioLogin.addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    
    const correoInput = document.getElementById('correoLogin');
    const claveInput = document.getElementById('claveLogin');
    const errorCorreo = document.getElementById('errorCorreoLogin');
    
    const correo = correoInput.value;
    const clave = claveInput.value;

    // VALIDACIÓN DE CORREO
    if (!validarCorreo(correo)) {
        errorCorreo.textContent = "Sólo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com";
        errorCorreo.style.display = "block";
        correoInput.classList.add("is-invalid");
        return; // Detiene el envío
    } else {
        errorCorreo.style.display = "none";
        correoInput.classList.remove("is-invalid");
    }

    // 1. BUSCAR EL USUARIO EN LA BASE DE DATOS
    const usuarioEncontrado = usuariosPrueba.find(u => u.correo === correo && u.clave === clave);

    const contenedorAlerta = document.getElementById('alertaLogin');

    // 2. REDIRIGE SEGÚN EL ROL
    if (usuarioEncontrado) {
        // GUARDAMOS EN LA MEMORIA DEL NAVEGADOR QUIÉN INICIÓ SESIÓN
        localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));

        if (usuarioEncontrado.rol === "Administrador") {
            alert("¡Bienvenid@, Administrador! Redirigiendo...");
            window.location.href = "admin.html"; 
            
        } else if (usuarioEncontrado.rol === "Vendedor") {
            alert("¡Bienvenid@, Vendedor! Redirigiendo...");
            window.location.href = "vendedor.html";
            
        } else {
            alert("¡Bienvenid@ de vuelta!");
            window.location.href = "home.html"; 
        }
    } else {
        // CLAVE MALA O CORREO INEXISTENTE
        contenedorAlerta.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> Correo o contraseña incorrectos.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
    }
    
    formularioLogin.reset();
  });
}

// REGISTRO DE USUARIO
const formularioRegistro = document.getElementById('formRegistro');

if (formularioRegistro) {
  formularioRegistro.addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    const runInput = document.getElementById('runRegistro');
    const errorRun = document.getElementById('errorRun');
    const correoInput = document.getElementById('correoRegistro');
    const errorCorreo = document.getElementById('errorCorreoRegistro');
    
    let isValid = true;

    // Validar RUT
    if (!validarRut(runInput.value)) {
        errorRun.textContent = "El RUN ingresado no es válido.";
        errorRun.style.display = "block";
        runInput.classList.add("is-invalid");
        isValid = false;
    } else {
        errorRun.style.display = "none";
        runInput.classList.remove("is-invalid");
    }

    // Validar Correo
    if (!validarCorreo(correoInput.value)) {
        errorCorreo.textContent = "Solo correos @duoc.cl, @profesor.duoc.cl o @gmail.com";
        errorCorreo.style.display = "block";
        correoInput.classList.add("is-invalid");
        isValid = false;
    } else {
        errorCorreo.style.display = "none";
        correoInput.classList.remove("is-invalid");
    }

    if (!isValid) return; // Si hay errores, no envía el formulario

    const nombre = document.getElementById('nombreRegistro').value;

    const contenedorAlerta = document.getElementById('alertaRegistro');
    contenedorAlerta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>¡Cuenta creada con éxito!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    
    formularioRegistro.reset();
    document.getElementById('comunaRegistro').innerHTML = '<option value="">Seleccione una comuna</option>'; // Resetear comunas
  });
}