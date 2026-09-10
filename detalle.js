const contenedorDetalle = document.getElementById('detalleProducto');
const idProducto = new URLSearchParams(window.location.search).get('id');
const producto = productosTienda.find(item => item.id === idProducto);

if (contenedorDetalle && producto) {
	const precioFormateado = "$" + producto.precio.toLocaleString('es-CL');
	const categoriaProducto = producto.descripcion.match(/Categoría:\s*([^<]+)/)?.[1].trim();
	const productosRecomendados = productosTienda
		.filter(item => item.id !== producto.id && item.descripcion.includes(`Categoría: ${categoriaProducto}`))
		.slice(0, 4);
	const tarjetasRecomendadas = productosRecomendados.map(item => `
		<div class="col-12 col-sm-6 col-lg-3">
			<div class="card h-100 shadow-sm border-0">
				<img src="${obtenerRutaImagen(item)}" class="card-img-top producto-recomendado-imagen p-3" alt="${item.nombre}">
				<div class="card-body d-flex flex-column">
					<h3 class="h6 fw-bold">${item.nombre}</h3>
					<p class="text-primary fw-bold fs-5">$${item.precio.toLocaleString('es-CL')}</p>
					<a href="detalle.html?id=${encodeURIComponent(item.id)}" class="btn btn-outline-primary btn-sm mt-auto">Ver detalle</a>
				</div>
			</div>
		</div>
	`).join('');

	document.title = `${producto.nombre} - Ferretería Los Maestros`;
	contenedorDetalle.innerHTML = `
		<a href="productos.html" class="text-decoration-none text-secondary">&larr; Volver al catálogo</a>
		<section class="row g-5 bg-white shadow-sm rounded p-4 mt-3">
			<div class="col-12 col-md-6 text-center">
				<img src="${obtenerRutaImagen(producto)}" class="img-fluid detalle-imagen" alt="${producto.nombre}">
			</div>
			<div class="col-12 col-md-6">
				<p class="text-muted mb-2">Código: ${producto.id}</p>
				<h1 class="h2 fw-bold text-uppercase">${producto.nombre}</h1>
				<p class="precio-detalle">${precioFormateado}</p>
				<hr>
				<div class="detalle-descripcion">${producto.descripcion}</div>
				<div class="d-flex gap-2 align-items-center mt-4">
					<label class="fw-bold" for="cantidadProducto">Cantidad</label>
					<input id="cantidadProducto" class="form-control" type="number" min="1" value="1" style="max-width: 90px;">
				</div>
				<button class="btn btn-dark btn-lg mt-4 w-100" type="button" id="btnAgregarCarrito">
					Añadir al carrito
				</button>
				<p id="mensajeCarrito" class="text-success mt-3 mb-0" role="status"></p>
			</div>
		</section>
		<section class="mt-5">
			<h2 class="h3 fw-bold mb-4">Productos recomendados</h2>
			<div class="row g-4">
				${tarjetasRecomendadas || '<p class="text-muted">No hay productos recomendados disponibles.</p>'}
			</div>
		</section>
	`;

	document.getElementById('btnAgregarCarrito').addEventListener('click', () => {
		const cantidad = Number.parseInt(document.getElementById('cantidadProducto').value, 10);
		const mensaje = document.getElementById('mensajeCarrito');

		if (!Number.isInteger(cantidad) || cantidad < 1) {
			mensaje.textContent = 'La cantidad debe ser igual o mayor que 1.';
			mensaje.className = 'text-danger mt-3 mb-0';
			return;
		}

		const carrito = JSON.parse(localStorage.getItem('carritoFerreteria')) || [];
		const indiceProducto = carrito.findIndex(item => item.id === producto.id);

		if (indiceProducto >= 0) {
			carrito[indiceProducto].cantidad += cantidad;
		} else {
			carrito.push({
				id: producto.id,
				nombre: producto.nombre,
				precio: producto.precio,
				imagen: producto.imagen,
				cantidad
			});
		}

		localStorage.setItem('carritoFerreteria', JSON.stringify(carrito));
		mensaje.textContent = `${cantidad} unidad(es) agregada(s) al carrito.`;
		mensaje.className = 'text-success mt-3 mb-0';
	});
} else if (contenedorDetalle) {
	contenedorDetalle.innerHTML = `
		<div class="alert alert-warning text-center">
			No se encontró el producto solicitado. <a href="productos.html">Volver al catálogo</a>
		</div>
	`;
}
