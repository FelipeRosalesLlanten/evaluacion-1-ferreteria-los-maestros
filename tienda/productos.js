const productosTienda = [
    {
        id: "MC001",
        nombre: "Cemento Polpaico gris 25 kg",
        precio: 5990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Polpaico</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Cementos</li>
            <li>Unidad de venta: Saco</li>
        </ul>
        `,
        imagen: "img/MC001.jpg"
    },
    {
        id: "MC002",
        nombre: "Cemento Melón blanco 25 kg",
        precio: 7490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Melón</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Cementos</li>
            <li>Unidad de venta: Saco</li>
        </ul> 
        `,
        imagen: "img/MC002.jpg"
    },
    {
        id: "MC003",
        nombre: "Mortero cola cerámica 25 kg",
        precio: 5200,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Volcán</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Morteros</li>
            <li>Unidad de venta: Saco</li>
        </ul>
        `,
        imagen: "img/MC003.jpg"
    },
    {
        id: "MC004",
        nombre: "Mortero nivelador piso 25 kg",
        precio: 6490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Weber</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Morteros</li>
            <li>Unidad de venta: Saco</li>
        </ul>
        `,
        imagen: "img/MC004.jpg"
    },
    {
        id: "MC005",
        nombre: "Arena fina construcción 25 kg",
        precio: 1800,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Granel</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Áridos</li>
            <li>Unidad de venta: Saco</li>
        </ul>
        `,
        imagen: "img/MC005.jpg"
    },
    {
        id: "MC006",
        nombre: "Ripio 25 kg",
        precio: 1500,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Granel</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Áridos</li>
            <li>Unidad de venta: Saco</li>
        </ul>
        `,
        imagen: "img/MC006.jpg"
    },
    {
        id: "MC007",
        nombre: "Ladrillo fiscal N°5",
        precio: 380,
        descripcion: `
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Local</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Ladrillos</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/MC007.jpg"
    },
    {
        id: "MC008",
        nombre: "Ladrillo prensado 6x14x29 cm",
        precio: 550,
        descripcion: `
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Melón</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Ladrillos</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/MC008.jpg"
    },
    {
        id: "MC009",
        nombre: "Bloque de hormigón 19x19x39 cm",
        precio: 1200,
        descripcion: `
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Volcán</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Bloques</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/MC009.jpg"
    },
    {
        id: "MC010",
        nombre: "Bloque liviano 10x20x40 cm",
        precio: 1690,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Ytong</li>
            <li>Categoría: Mat. Construcción</li>
            <li>Subcategoría: Bloques</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/MC010.jpg"
    },
    {
        id: "PT001",
        nombre: "Pintura látex interior 1 galón blanco",
        precio: 9990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Sipa</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Látex</li>
            <li>Unidad de venta: Galón</li>
        </ul>
        `,
        imagen: "img/PT001.jpg"
    },
    {
        id: "PT002",
        nombre: "Pintura látex interior 4 litros (varios col.)",
        precio: 12990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Sipa</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Látex</li>
            <li>Unidad de venta: Envase 4L</li>
        </ul>
        `,
        imagen: "img/PT002.jpg"
    },
    {
        id: "PT003",
        nombre: "Pintura látex exterior 1 galón blanco",
        precio: 13990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Kömex</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Látex</li>
            <li>Unidad de venta: Galón</li>
        </ul>
        `,
        imagen: "img/PT003.jpg"
    },
    {
        id: "PT004",
        nombre: "Esmalte sintético 1/4 litro (varios col.)",
        precio: 4290,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Sipa</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Esmalte</li>
            <li>Unidad de venta: 1/4 L</li>
        </ul>
        `,
        imagen: "img/PT004.jpg"
    },
    {
        id: "PT005",
        nombre: "Esmalte sintético 1 litro (varios col.)",
        precio: 9490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Sipa</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Esmalte</li>
            <li>Unidad de venta: 1 litro</li>
        </ul>
        `,
        imagen: "img/PT005.jpg"
    },
    {
        id: "PT006",
        nombre: "Pintura antihumedad 1 galón blanco",
        precio: 17990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Kömex</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Antihumedad</li>
            <li>Unidad de venta: Galón</li>
        </ul>
        `,
        imagen: "img/PT006.jpg"
    },
    {
        id: "PT007",
        nombre: "Rodillo lana 23 cm con mango",
        precio: 3990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Wurth</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Accesorios</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/PT007.jpg"
    },
    {
        id: "PT008",
        nombre: "Brocha cerda natural 3\"",
        precio: 1690,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Sipa</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Accesorios</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/PT008.jpg"
    },
    {
        id: "PT009",
        nombre: "Cinta de enmascarar 24mm x 50m",
        precio: 2490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: 3M</li>
            <li>Categoría: Pinturas</li>
            <li>Subcategoría: Accesorios</li>
            <li>Unidad de venta: Rollo</li>
        </ul>
        `,
        imagen: "img/PT009.jpg"
    },
    {
        id: "HM001",
        nombre: "Martillo carpintero 500g",
        precio: 7990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM001.jpg"
    },
    {
        id: "HM002",
        nombre: "Alicate universal 8\"",
        precio: 7290,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM002.jpg"
    },
    {
        id: "HM003",
        nombre: "Destornillador plano 6x100mm",
        precio: 1990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM003.jpg"
    },
    {
        id: "HM004",
        nombre: "Destornillador Phillips PH2 6x100mm",
        precio: 1990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM004.jpg"
    },
    {
        id: "HM005",
        nombre: "Llave ajustable 10\"",
        precio: 8490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Bahco</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM005.jpg"
    },
    {
        id: "HM006",
        nombre: "Juego llaves hexagonales métrico x9",
        precio: 5490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Set</li>
        </ul>
        `,
        imagen: "img/HM006.jpg"
    },
    {
        id: "HM007",
        nombre: "Serrucho 20\" 7 dientes por pulgada",
        precio: 9490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM007.jpg"
    },
    {
        id: "HM008",
        nombre: "Nivel de burbuja 60 cm",
        precio: 10490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM008.jpg"
    },
    {
        id: "HM009",
        nombre: "Metro de tela 5m",
        precio: 4290,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM009.jpg"
    },
    {
        id: "HM010",
        nombre: "Cinta métrica 8m autoblocante",
        precio: 6490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Stanley</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Manuales</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HM010.jpg"
    },
    {
        id: "HE001",
        nombre: "Taladro percutor 650W 13mm",
        precio: 79990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Makita</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Eléctricas</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HE001.jpg"
    },
    {
        id: "HE002",
        nombre: "Atornillador inalámbrico 12V (kit)",
        precio: 104990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Makita</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Eléctricas</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HE002.jpg"
    },
    {
        id: "HE003",
        nombre: "Amoladora angular 4.5\" 800W",
        precio: 54990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Makita</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Eléctricas</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HE003.jpg"
    },
    {
        id: "HE004",
        nombre: "Sierra circular 7-1/4\" 1200W",
        precio: 72990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Skil</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Eléctricas</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HE004.jpg"
    },
    {
        id: "HE005",
        nombre: "Lijadora orbital 180W",
        precio: 34990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Black+Decker</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Eléctricas</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HE005.jpg"
    },
    {
        id: "HE006",
        nombre: "Caladora 500W",
        precio: 42990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Skil</li>
            <li>Categoría: Herramientas</li>
            <li>Subcategoría: Eléctricas</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/HE006.jpg"
    },
    {
        id: "GS001",
        nombre: "Cañería PVC 1/2\" x 6m",
        precio: 5490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Tigre</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Tuberías</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS001.jpg"
    },
    {
        id: "GS002",
        nombre: "Cañería PVC 3/4\" x 6m",
        precio: 7490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Tigre</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Tuberías</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS002.jpg"
    },
    {
        id: "GS003",
        nombre: "Cañería cobre 1/2\" x 5m",
        precio: 17990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Codelco</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Tuberías</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS003.jpg"
    },
    {
        id: "GS004",
        nombre: "Codo PVC 1/2\" 90°",
        precio: 390,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Tigre</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Uniones</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS004.jpg"
    },
    {
        id: "GS005",
        nombre: "Te PVC 1/2\"",
        precio: 450,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Tigre</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Uniones</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS005.jpg"
    },
    {
        id: "GS006",
        nombre: "Unión doble PVC 1/2\"",
        precio: 320,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Tigre</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Uniones</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS006.jpg"
    },
    {
        id: "GS007",
        nombre: "Llave de paso esfera 1/2\" latón",
        precio: 3490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Emmeti</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Llaves</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS007.jpg"
    },
    {
        id: "GS008",
        nombre: "Llave de paso esfera 3/4\" latón",
        precio: 4990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Emmeti</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Llaves</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS008.jpg"
    },
    {
        id: "GS009",
        nombre: "Grifería lavamanos monocomando cromo",
        precio: 22990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Corona</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Grifería</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS009.jpg"
    },
    {
        id: "GS010",
        nombre: "Grifería cocina monocomando cuello alto",
        precio: 28990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Corona</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Grifería</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/GS010.jpg"
    },
    {
        id: "GS011",
        nombre: "Teflón 3/4\" x 12m",
        precio: 790,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: 3M</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Sellos</li>
            <li>Unidad de venta: Rollo</li>
        </ul>
        `,
        imagen: "img/GS011.jpg"
    },
    {
        id: "GS012",
        nombre: "Silicona transparente 280ml",
        precio: 5490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Wacker</li>
            <li>Categoría: Gasfitería</li>
            <li>Subcategoría: Sellos</li>
            <li>Unidad de venta: Cartucho</li>
        </ul>
        `,
        imagen: "img/GS012.jpg"
    },
    {
        id: "EL001",
        nombre: "Cable unipolar 1.5mm² (por metro)",
        precio: 590,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Condulac</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Conductores</li>
            <li>Unidad de venta: Metro</li>
        </ul>
        `,
        imagen: "img/EL001.jpg"
    },
    {
        id: "EL002",
        nombre: "Cable unipolar 2.5mm² (por metro)",
        precio: 790,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Condulac</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Conductores</li>
            <li>Unidad de venta: Metro</li>
        </ul>
        `,
        imagen: "img/EL002.jpg"
    },
    {
        id: "EL003",
        nombre: "Cable dúplex paralelo 2x1.5mm² (por metro)",
        precio: 990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Condulac</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Conductores</li>
            <li>Unidad de venta: Metro</li>
        </ul>
        `,
        imagen: "img/EL003.jpg"
    },
    {
        id: "EL004",
        nombre: "Enchufe empotrar 16A c/tierra (schuko)",
        precio: 3690,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Bticino</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Enchufes</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL004.jpg"
    },
    {
        id: "EL005",
        nombre: "Enchufe doble empotrar 16A c/tierra",
        precio: 5490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Bticino</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Enchufes</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL005.jpg"
    },
    {
        id: "EL006",
        nombre: "Interruptor simple empotrar",
        precio: 3190,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Bticino</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Interruptores</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL006.jpg"
    },
    {
        id: "EL007",
        nombre: "Interruptor doble empotrar",
        precio: 4290,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Bticino</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Interruptores</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL007.jpg"
    },
    {
        id: "EL008",
        nombre: "Tablero eléctrico 4 espacios DIN",
        precio: 22990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Legrand</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Tableros</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL008.jpg"
    },
    {
        id: "EL009",
        nombre: "Disyuntor termomagnético 16A unipolar",
        precio: 6490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Schneider</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Tableros</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL009.jpg"
    },
    {
        id: "EL010",
        nombre: "Disyuntor termomagnético 25A unipolar",
        precio: 6990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Schneider</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Tableros</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL010.jpg"
    },
    {
        id: "EL011",
        nombre: "Ampolleta LED 9W E27 luz fría",
        precio: 3990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Philips</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Iluminación</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL011.jpg"
    },
    {
        id: "EL012",
        nombre: "Ampolleta LED 12W E27 luz cálida",
        precio: 4490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Philips</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Iluminación</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL012.jpg"
    },
    {
        id: "EL013",
        nombre: "Panel LED empotrar 18W 22cm",
        precio: 11490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Ledvance</li>
            <li>Categoría: Electricidad</li>
            <li>Subcategoría: Iluminación</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/EL013.jpg"
    },
    {
        id: "TR001",
        nombre: "Tornillo autoperf. 8x1\" caja 100 unid.",
        precio: 2990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Hilti</li>
            <li>Categoría: Tornillería</li>
            <li>Subcategoría: Tornillos</li>
            <li>Unidad de venta: Caja</li>
        </ul>
        `,
        imagen: "img/TR001.jpg"
    },
    {
        id: "TR002",
        nombre: "Tornillo madera 4x40mm caja 100 unid.",
        precio: 2490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Hilti</li>
            <li>Categoría: Tornillería</li>
            <li>Subcategoría: Tornillos</li>
            <li>Unidad de venta: Caja</li>
        </ul>
        `,
        imagen: "img/TR002.jpg"
    },
    {
        id: "TR003",
        nombre: "Tornillo volcanita 3.5x25mm caja 200 unid.",
        precio: 3490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Hilti</li>
            <li>Categoría: Tornillería</li>
            <li>Subcategoría: Tornillos</li>
            <li>Unidad de venta: Caja</li>
        </ul>
        `,
        imagen: "img/TR003.jpg"
    },
    {
        id: "TR004",
        nombre: "Taco fisher S6 bolsa 100 unid.",
        precio: 3190,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Fischer</li>
            <li>Categoría: Tornillería</li>
            <li>Subcategoría: Tacos</li>
            <li>Unidad de venta: Bolsa</li>
        </ul>
        `,
        imagen: "img/TR004.jpg"
    },
    {
        id: "TR005",
        nombre: "Taco fisher S8 bolsa 50 unid.",
        precio: 2890,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Fischer</li>
            <li>Categoría: Tornillería</li>
            <li>Subcategoría: Tacos</li>
            <li>Unidad de venta: Bolsa</li>
        </ul>
        `,
        imagen: "img/TR005.jpg"
    },
    {
        id: "TR006",
        nombre: "Perno hex. 3/8\" x 2\" c/tuerca y golilla",
        precio: 290,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Granel</li>
            <li>Categoría: Tornillería</li>
            <li>Subcategoría: Pernos</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/TR006.jpg"
    },
    {
        id: "TR007",
        nombre: "Perno de anclaje 10x100mm",
        precio: 990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Hilti</li>
            <li>Categoría: Tornillería</li>
            <li>Subcategoría: Anclajes</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/TR007.jpg"
    },
    {
        id: "TR008",
        nombre: "Anclaje químico epoxi 300ml",
        precio: 15990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Fischer</li>
            <li>Categoría: Tornillería</li>
            <li>Subcategoría: Anclajes</li>
            <li>Unidad de venta: Cartucho</li>
        </ul>
        `,
        imagen: "img/TR008.jpg"
    },
    {
        id: "MD001",
        nombre: "Pino cepillado 1x3\" x 3m",
        precio: 4290,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Local</li>
            <li>Categoría: Madera</li>
            <li>Subcategoría: Pino cepillado</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/MD001.jpg"
    },
    {
        id: "MD002",
        nombre: "Pino cepillado 2x4\" x 3m",
        precio: 7490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Local</li>
            <li>Categoría: Madera</li>
            <li>Subcategoría: Pino cepillado</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/MD002.jpg"
    },
    {
        id: "MD003",
        nombre: "Terciado estructural 18mm 1.22x2.44m",
        precio: 34990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Arauco</li>
            <li>Categoría: Madera</li>
            <li>Subcategoría: Tableros</li>
            <li>Unidad de venta: Plancha</li>
        </ul>
        `,
        imagen: "img/MD003.jpg"
    },
    {
        id: "MD004",
        nombre: "MDF 15mm 1.22x2.44m",
        precio: 27990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Arauco</li>
            <li>Categoría: Madera</li>
            <li>Subcategoría: Tableros</li>
            <li>Unidad de venta: Plancha</li>
        </ul>
        `,
        imagen: "img/MD004.jpg"
    },
    {
        id: "MD005",
        nombre: "OSB 9mm 1.22x2.44m",
        precio: 18990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Arauco</li>
            <li>Categoría: Madera</li>
            <li>Subcategoría: Tableros</li>
            <li>Unidad de venta: Plancha</li>
        </ul>
        `,
        imagen: "img/MD005.jpg"
    },
    {
        id: "MD006",
        nombre: "Volcanita estándar 10mm 1.2x2.4m",
        precio: 8990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Volcán</li>
            <li>Categoría: Madera</li>
            <li>Subcategoría: Tableros</li>
            <li>Unidad de venta: Plancha</li>
        </ul>
        `,
        imagen: "img/MD006.jpg"
    },
    {
        id: "MD007",
        nombre: "Volcanita resistente humedad 10mm",
        precio: 11990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Volcán</li>
            <li>Categoría: Madera</li>
            <li>Subcategoría: Tableros</li>
            <li>Unidad de venta: Plancha</li>
        </ul>
        `,
        imagen: "img/MD007.jpg"
    },
    {
        id: "SE001",
        nombre: "Casco seguridad blanco",
        precio: 6990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: 3M</li>
            <li>Categoría: Seguridad</li>
            <li>Subcategoría: EPP</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/SE001.jpg"
    },
    {
        id: "SE002",
        nombre: "Guantes de cuero talla L",
        precio: 3690,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: 3M</li>
            <li>Categoría: Seguridad</li>
            <li>Subcategoría: EPP</li>
            <li>Unidad de venta: Par</li>
        </ul>
        `,
        imagen: "img/SE002.jpg"
    },
    {
        id: "SE003",
        nombre: "Antiparras de seguridad clear",
        precio: 2490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: 3M</li>
            <li>Categoría: Seguridad</li>
            <li>Subcategoría: EPP</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/SE003.jpg"
    },
    {
        id: "SE004",
        nombre: "Mascarilla respirador N95 (caja x10)",
        precio: 10990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: 3M</li>
            <li>Categoría: Seguridad</li>
            <li>Subcategoría: EPP</li>
            <li>Unidad de venta: Caja</li>
        </ul>
        `,
        imagen: "img/SE004.jpg"
    },
    {
        id: "SE005",
        nombre: "Arnés de seguridad 1 punto",
        precio: 34990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: 3M</li>
            <li>Categoría: Seguridad</li>
            <li>Subcategoría: EPP</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/SE005.jpg"
    },
    {
        id: "JA001",
        nombre: "Manguera riego 3/4\" x 25m",
        precio: 22990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Tigre</li>
            <li>Categoría: Jardín</li>
            <li>Subcategoría: Mangueras</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/JA001.jpg"
    },
    {
        id: "JA002",
        nombre: "Manguera expandible 30m",
        precio: 28990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Bestway</li>
            <li>Categoría: Jardín</li>
            <li>Subcategoría: Mangueras</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/JA002.jpg"
    },
    {
        id: "JA003",
        nombre: "Pistola de riego 8 modos",
        precio: 5490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Bestway</li>
            <li>Categoría: Jardín</li>
            <li>Subcategoría: Mangueras</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/JA003.jpg"
    },
    {
        id: "JA004",
        nombre: "Pala punta redonda #2 con mango",
        precio: 10990,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Corona</li>
            <li>Categoría: Jardín</li>
            <li>Subcategoría: Herramientas</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/JA004.jpg"
    },
    {
        id: "JA005",
        nombre: "Rastrillo 16 dientes con mango",
        precio: 9490,
        descripcion: `
        
        <h4>Especificaciones Técnicas:</h4>
        <ul>
            <li>Marca: Corona</li>
            <li>Categoría: Jardín</li>
            <li>Subcategoría: Herramientas</li>
            <li>Unidad de venta: Unidad</li>
        </ul>
        `,
        imagen: "img/JA005.jpg"
    }
];



// LÓGICA PARA MOSTRAR LOS PRODUCTOS SEGUN CATEGORIA

const contenedorProductos = document.getElementById('catalogoProductos');
const tituloCatalogo = document.getElementById('tituloCatalogo');

if (contenedorProductos) {
    
    const parametros = new URLSearchParams(window.location.search);
    const categoriaFiltro = parametros.get('cat');
    
    const categoriasValidas = {
        'construccion': 'Mat. Construcción',
        'pinturas': 'Pinturas',
        'herramientas': 'Herramientas',
        'gasfiteria': 'Gasfitería',
        'electricidad': 'Electricidad',
        'tornilleria': 'Tornillería',
        'madera': 'Madera',
        'seguridad': 'Seguridad',
        'jardin': 'Jardín'
    };

    let productosAMostrar = productosTienda; // Por defecto, mostramos todos
    
    if (categoriaFiltro && categoriasValidas[categoriaFiltro]) {
        const categoriaReal = categoriasValidas[categoriaFiltro];
        
        productosAMostrar = productosTienda.filter(prod => prod.descripcion.includes("Categoría: " + categoriaReal));
        
        if (tituloCatalogo) {
            tituloCatalogo.textContent = categoriaReal;
        }
    }

    let htmlTarjetas = '';
    
    productosAMostrar.forEach(producto => {

        const precioFormateado = "$" + producto.precio.toLocaleString('es-CL');

        htmlTarjetas += `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${producto.imagen}" class="card-img-top p-3" alt="${producto.nombre}" style="object-fit: contain; height: 200px;">
                    
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title fw-bold text-uppercase">${producto.nombre}</h6>
                        <p class="card-text text-primary fw-bold fs-4">${precioFormateado}</p>
                        
                        <!-- Botón colapsable para la descripción HTML que armaste -->
                        <button class="btn btn-outline-secondary btn-sm mb-3 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#desc-${producto.id}" aria-expanded="false" aria-controls="desc-${producto.id}">
                            Ver Especificaciones &#9660;
                        </button>
                        <div class="collapse mb-3" id="desc-${producto.id}">
                            <div class="card card-body bg-light text-muted p-2" style="font-size: 0.85rem;">
                                ${producto.descripcion}
                            </div>
                        </div>
                        
                        <!-- Botón de añadir al carrito que usaremos después -->
                        <button class="btn btn-dark w-100 mt-auto fw-bold" onclick="alert('Próximamente: Añadir ${producto.nombre} al carrito!')">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    contenedorProductos.innerHTML = htmlTarjetas;
}