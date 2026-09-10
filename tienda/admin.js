const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));
const contenidoAdmin = document.getElementById('adminContent');
const tituloAdmin = document.getElementById('adminViewTitle');
const nombreAdmin = document.getElementById('adminUserName');
const avatarAdmin = document.getElementById('adminAvatar');

if (!usuarioActivo || usuarioActivo.rol !== 'Administrador') {
    window.location.href = 'home.html';
} else {
    const trabajadores = [
        { nombre: 'Camila Soto', cargo: 'Jefa de operaciones', correo: 'camila.soto@losmaestros.cl', telefono: '+56 9 5555 0101' },
        { nombre: 'Diego Morales', cargo: 'Encargado de bodega', correo: 'diego.morales@losmaestros.cl', telefono: '+56 9 5555 0102' }
    ];
    const titulos = {
        dashboard: 'Dashboard', orders: 'Órdenes', inventory: 'Inventario', reports: 'Reportes',
        workers: 'Trabajadores', customers: 'Customers', settings: 'Settings', profile: 'Perfil', search: 'Búsqueda', help: 'Ayuda'
    };

    nombreAdmin.textContent = usuarioActivo.nombre || usuarioActivo.correo;
    avatarAdmin.textContent = (usuarioActivo.nombre || 'AG').split(' ').map(parte => parte[0]).slice(0, 2).join('').toUpperCase();

    function obtenerOrdenes() {
        return JSON.parse(localStorage.getItem('ordenesFerreteria')) || [];
    }

    function obtenerCarrito() {
        return JSON.parse(localStorage.getItem('carritoFerreteria')) || [];
    }

    function guardarOrden(producto, cantidad, cliente = 'Compra manual') {
        const ordenes = obtenerOrdenes();
        ordenes.push({
            id: `ORD-${String(Date.now()).slice(-6)}`,
            productoId: producto.id,
            producto: producto.nombre,
            precio: producto.precio,
            cantidad,
            cliente,
            fecha: new Date().toLocaleDateString('es-CL'),
            estado: 'Pendiente'
        });
        localStorage.setItem('ordenesFerreteria', JSON.stringify(ordenes));
    }

    function formatoPrecio(valor) {
        return `$${Number(valor).toLocaleString('es-CL')}`;
    }

    function cardEstadistica(label, value, detail, accent = '') {
        return `<article class="admin-stat-card ${accent}"><span>${label}</span><strong>${value}</strong><small>${detail}</small></article>`;
    }

    function renderDashboard() {
        const carrito = obtenerCarrito();
        const ordenes = obtenerOrdenes();
        const ventasCarrito = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
        const ventasOrdenes = ordenes.reduce((total, item) => total + item.precio * item.cantidad, 0);
        contenidoAdmin.innerHTML = `
            <div class="admin-welcome"><div><span class="admin-eyebrow">Resumen del negocio</span><h2>Buenos días, ${usuarioActivo.nombre || 'Administrador'}</h2><p>Revisa el rendimiento de la ferretería y gestiona las operaciones del día.</p></div><button class="admin-primary-btn" data-view="orders">+ Nueva orden</button></div>
            <div class="admin-stat-grid">
                ${cardEstadistica('Ventas en carrito', formatoPrecio(ventasCarrito), `${carrito.length} productos distintos`, 'admin-stat-orange')}
                ${cardEstadistica('Órdenes registradas', ordenes.length, 'pedidos en seguimiento', 'admin-stat-blue')}
                ${cardEstadistica('Productos activos', productosTienda.length, 'en el catálogo', 'admin-stat-green')}
                ${cardEstadistica('Clientes', obtenerClientes().length, 'perfiles registrados', 'admin-stat-yellow')}
            </div>
            <div class="admin-two-columns"><section class="admin-panel"><div class="admin-panel-heading"><h3>Actividad reciente</h3><button class="admin-text-btn" data-view="reports">Ver reportes</button></div>${renderTablaVentas(ordenes.slice(-5).reverse(), carrito)}</section><section class="admin-panel admin-highlight-panel"><span class="admin-eyebrow">Total comercial</span><strong>${formatoPrecio(ventasCarrito + ventasOrdenes)}</strong><p>Valor acumulado entre el carrito actual y las órdenes agregadas.</p><button class="admin-secondary-btn" data-view="inventory">Revisar inventario</button></section></div>
        `;
    }

    function renderTablaVentas(ordenes, carrito) {
        if (!ordenes.length && !carrito.length) return '<div class="admin-empty">Todavía no hay ventas ni órdenes registradas.</div>';
        const filasOrdenes = ordenes.map(item => `<tr><td>${item.id}</td><td>${item.producto}</td><td>${item.cantidad}</td><td>${formatoPrecio(item.precio * item.cantidad)}</td><td><span class="admin-status">${item.estado}</span></td></tr>`).join('');
        const filasCarrito = carrito.map(item => `<tr><td>CAR-${item.id}</td><td>${item.nombre}</td><td>${item.cantidad}</td><td>${formatoPrecio(item.precio * item.cantidad)}</td><td><span class="admin-status admin-status-cart">En carrito</span></td></tr>`).join('');
        return `<div class="table-responsive"><table class="admin-table"><thead><tr><th>ID</th><th>Producto</th><th>Cantidad</th><th>Total</th><th>Estado</th></tr></thead><tbody>${filasOrdenes}${filasCarrito}</tbody></table></div>`;
    }

    function obtenerClientes() {
        const registrados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
        return registrados.length ? registrados : [
            { nombre: 'Sofía Ramírez', correo: 'sofia.ramirez@gmail.com', comuna: 'Santiago', rol: 'Cliente' },
            { nombre: 'Tomás Fuentes', correo: 'tomas.fuentes@gmail.com', comuna: 'Maipú', rol: 'Cliente' }
        ];
    }

    function renderOrders() {
        const ordenes = obtenerOrdenes();
        contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Operaciones</span><h2>Gestiona las órdenes</h2><p>Agrega productos al flujo de compra y revisa los pedidos registrados.</p></div><section class="admin-panel"><form id="formOrden" class="admin-order-form"><label>Producto<select id="productoOrden" required>${productosTienda.map(item => `<option value="${item.id}">${item.nombre} - ${formatoPrecio(item.precio)}</option>`).join('')}</select></label><label>Cantidad<input id="cantidadOrden" type="number" min="1" value="1" required></label><label>Cliente<input id="clienteOrden" value="Compra manual"></label><button class="admin-primary-btn" type="submit">Agregar orden</button></form></section><section class="admin-panel"><div class="admin-panel-heading"><h3>Órdenes registradas</h3><span class="admin-muted">${ordenes.length} total</span></div>${renderTablaVentas(ordenes, [])}</section>`;
        document.getElementById('formOrden').addEventListener('submit', event => { event.preventDefault(); const producto = productosTienda.find(item => item.id === document.getElementById('productoOrden').value); guardarOrden(producto, Number(document.getElementById('cantidadOrden').value), document.getElementById('clienteOrden').value || 'Compra manual'); renderOrders(); });
    }

    function renderInventory() {
        contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Catálogo</span><h2>Inventario</h2><p>Consulta los productos disponibles y sus precios actuales.</p></div><section class="admin-panel"><div class="admin-search-line"><input id="filtroInventario" placeholder="Buscar producto o código..."><span class="admin-muted">${productosTienda.length} productos</span></div><div id="tablaInventario">${tablaInventario(productosTienda)}</div></section>`;
        document.getElementById('filtroInventario').addEventListener('input', event => { const filtro = event.target.value.toLowerCase(); document.getElementById('tablaInventario').innerHTML = tablaInventario(productosTienda.filter(item => `${item.id} ${item.nombre}`.toLowerCase().includes(filtro))); });
    }

    function tablaInventario(productos) {
        return `<div class="table-responsive"><table class="admin-table"><thead><tr><th>Producto</th><th>Código</th><th>Precio</th><th>Estado</th></tr></thead><tbody>${productos.map(item => `<tr><td>${item.nombre}</td><td>${item.id}</td><td>${formatoPrecio(item.precio)}</td><td><span class="admin-status admin-status-ready">Disponible</span></td></tr>`).join('')}</tbody></table></div>`;
    }

    function renderReports() {
        const carrito = obtenerCarrito();
        const ordenes = obtenerOrdenes();
        const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0) + ordenes.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
        contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Análisis</span><h2>Reporte de ventas</h2><p>Los productos agregados al carrito aparecen como ventas en curso.</p></div><div class="admin-stat-grid">${cardEstadistica('Venta acumulada', formatoPrecio(total), 'carrito más órdenes', 'admin-stat-orange')}${cardEstadistica('Unidades en carrito', carrito.reduce((sum, item) => sum + item.cantidad, 0), 'pendientes de pago', 'admin-stat-blue')}${cardEstadistica('Órdenes manuales', ordenes.length, 'registradas en panel', 'admin-stat-green')}</div><section class="admin-panel"><div class="admin-panel-heading"><h3>Detalle de ventas</h3></div>${renderTablaVentas(ordenes, carrito)}</section>`;
    }

    function renderWorkers() {
        contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Equipo</span><h2>Trabajadores</h2><p>Personal ficticio de referencia para la administración interna.</p></div><div class="admin-person-grid">${trabajadores.map(persona => `<article class="admin-person-card"><div class="admin-person-avatar">${persona.nombre.split(' ').map(parte => parte[0]).join('')}</div><h3>${persona.nombre}</h3><strong>${persona.cargo}</strong><p>${persona.correo}</p><p>${persona.telefono}</p><button class="admin-secondary-btn">Ver perfil</button></article>`).join('')}</div>`;
    }

    function renderCustomers() {
        const clientes = obtenerClientes();
        contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Usuarios</span><h2>Customers</h2><p>Personas registradas en la tienda.</p></div><section class="admin-panel"><div class="admin-panel-heading"><h3>Clientes registrados</h3><span class="admin-muted">${clientes.length} perfiles</span></div><div class="table-responsive"><table class="admin-table"><thead><tr><th>Nombre</th><th>Correo</th><th>Comuna</th><th>Rol</th></tr></thead><tbody>${clientes.map(item => `<tr><td>${item.nombre || 'Sin nombre'} ${item.apellidos || ''}</td><td>${item.correo}</td><td>${item.comuna || 'No indicada'}</td><td><span class="admin-status admin-status-ready">${item.rol || 'Cliente'}</span></td></tr>`).join('')}</tbody></table></div></section>`;
    }

    function renderProfile() {
        contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Cuenta</span><h2>Perfil del administrador</h2><p>Información de la sesión actual.</p></div><section class="admin-panel admin-profile-panel"><div class="admin-large-avatar">${avatarAdmin.textContent}</div><div><h3>${usuarioActivo.nombre || 'Administrador General'}</h3><p class="admin-muted">${usuarioActivo.correo}</p><span class="admin-status admin-status-ready">${usuarioActivo.rol}</span></div><dl><dt>Correo</dt><dd>${usuarioActivo.correo}</dd><dt>Permisos</dt><dd>Acceso completo al panel</dd><dt>Estado</dt><dd>Sesión activa</dd></dl></section>`;
    }

    function renderSettings() { contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Preferencias</span><h2>Settings</h2><p>Configuración general de la cuenta administrativa.</p></div><section class="admin-panel admin-settings"><label><input type="checkbox" checked> Notificaciones de nuevas órdenes</label><label><input type="checkbox" checked> Mostrar productos sin stock</label><label><input type="checkbox"> Resumen semanal por correo</label><button class="admin-primary-btn">Guardar preferencias</button></section>`; }
    function renderHelp() { contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Soporte</span><h2>Ayuda</h2><p>¿Necesitas asistencia con el panel?</p></div><section class="admin-panel admin-help-panel"><div class="admin-help-icon">?</div><h3>Contacta a soporte</h3><p>Para recibir ayuda con órdenes, inventario o usuarios, llama al número de soporte de demostración:</p><a class="admin-help-phone" href="tel:+56225550199">+56 2 2555 0199</a><small>Número ficticio para esta demostración.</small></section>`; }
    function renderSearch() { contenidoAdmin.innerHTML = `<div class="admin-section-intro"><span class="admin-eyebrow">Consulta rápida</span><h2>Búsqueda</h2><p>Busca productos, clientes u órdenes.</p></div><section class="admin-panel"><input class="admin-global-search" id="busquedaGlobal" placeholder="Escribe un nombre, código o correo..."><div id="resultadosBusqueda" class="admin-search-results"><div class="admin-empty">Comienza a escribir para buscar.</div></div></section>`; document.getElementById('busquedaGlobal').addEventListener('input', event => { const query = event.target.value.toLowerCase(); const productos = productosTienda.filter(item => `${item.id} ${item.nombre}`.toLowerCase().includes(query)); const clientes = obtenerClientes().filter(item => `${item.nombre} ${item.correo}`.toLowerCase().includes(query)); document.getElementById('resultadosBusqueda').innerHTML = query ? [...productos.map(item => `<div><strong>Producto</strong><span>${item.id} · ${item.nombre}</span></div>`), ...clientes.map(item => `<div><strong>Cliente</strong><span>${item.nombre} · ${item.correo}</span></div>`)].join('') || '<div class="admin-empty">Sin resultados.</div>' : '<div class="admin-empty">Comienza a escribir para buscar.</div>'; }); }

    const renderizadores = { dashboard: renderDashboard, orders: renderOrders, inventory: renderInventory, reports: renderReports, workers: renderWorkers, customers: renderCustomers, settings: renderSettings, profile: renderProfile, search: renderSearch, help: renderHelp };
    function cambiarVista(view) { tituloAdmin.textContent = titulos[view]; document.querySelectorAll('.admin-nav-link[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === view)); renderizadores[view](); }
    document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => cambiarVista(button.dataset.view)));
    cambiarVista('dashboard');
}
