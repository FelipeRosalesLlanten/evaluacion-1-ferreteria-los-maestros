const listaCarrito = document.getElementById('lista-carrito');
const totalCarritoElement = document.getElementById('total-carrito');
const btnPagar = document.getElementById('btn-pagar');

// Cargamos el carrito desde la memoria del navegador
let carrito = JSON.parse(localStorage.getItem('carritoFerreteria')) || [];

function renderizarCarrito() {
    
    // Si no hay productos:
    if (carrito.length === 0) {
        listaCarrito.innerHTML = `
            <div class="text-center py-5 bg-white rounded shadow-sm border">
                <h4 class="text-muted fw-bold">Tu carrito está vacío</h4>
                <p class="text-muted mb-4">¡Explora nuestro catálogo y añade lo que necesites para tus proyectos!</p>
                <a href="productos.html" class="btn btn-dark fw-bold">Ir al Catálogo</a>
            </div>
        `;
        totalCarritoElement.textContent = "$0";
        return;
    }

    listaCarrito.innerHTML = ''; 
    let total = 0;

    carrito.forEach((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const precioFormat = "$" + producto.precio.toLocaleString('es-CL');

        const itemHTML = `
            <div class="card shadow-sm border border-secondary mb-3">
                <div class="row g-0 align-items-center p-3">
                    
                    <!-- Imagen a la izquierda -->
                    <div class="col-4 col-md-3 text-center border-end pe-3">
                        <img src="${producto.imagen}" class="img-fluid rounded img-carrito-miniatura" alt="${producto.nombre}">
                    </div>
                    
                    <!-- Textos y controles -->
                    <div class="col-8 col-md-9">
                        <div class="card-body p-0 ps-3">
                            <div class="d-flex justify-content-between align-items-start flex-wrap">
                                
                                <div class="mb-2 mb-md-0 col-12 col-md-7">
                                    <h5 class="card-title fw-bold m-0 fs-6 fs-md-5">${producto.nombre}</h5>
                                    <small class="text-muted">Cod: ${producto.id}</small>
                                </div>
                                
                                <div class="d-flex flex-column align-items-end col-12 col-md-5 mt-2 mt-md-0">
                                    <p class="fw-bold mb-2 fs-5 text-dark">${precioFormat}</p>
                                    
                                    <div class="input-group input-group-sm ancho-cantidad">
                                        <button class="btn btn-outline-dark fw-bold" type="button" onclick="cambiarCantidad(${index}, -1)">-</button>
                                        <input type="text" class="form-control text-center fw-bold bg-white" value="${producto.cantidad}" readonly>
                                        <button class="btn btn-outline-dark fw-bold" type="button" onclick="cambiarCantidad(${index}, 1)">+</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        listaCarrito.innerHTML += itemHTML;
    });

    // Actualizamos el total
    totalCarritoElement.textContent = "$" + total.toLocaleString('es-CL');
}

// Función para sumar o restar cantidad
window.cambiarCantidad = function(index, cambio) {
    carrito[index].cantidad += cambio;
    
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    
    localStorage.setItem('carritoFerreteria', JSON.stringify(carrito));
    renderizarCarrito();
};

// Botón pagar no habilitado (Proxima entrega supongo, solo te avisa que no tienes nada en el carro)
if (btnPagar) {
    btnPagar.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert("No tienes productos en el carrito para pagar.");
            return;
        }
        alert("Botón no habilitado por el momento.");
    });
}

renderizarCarrito();