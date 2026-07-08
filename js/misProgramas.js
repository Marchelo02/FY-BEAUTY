
/* ===== main.js ===== */
/* =============================================================
   main.js
   -------------------------------------------------------------
   Lógica de la plantilla dinámica de producto.html

   Flujo:
   1) Lee el parámetro "id" de la URL (ej: producto.html?id=101)
   2) Busca ese id dentro del arreglo "productos" (productos.js)
   3) Si lo encuentra -> pinta la info en el HTML
      Si NO lo encuentra -> muestra el mensaje "Producto no encontrado"

   Este archivo depende de que "productos.js" se cargue ANTES
   que este script (ver el orden de los <script> en producto.html).
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       1) LEER EL "id" DESDE LA URL
       --------------------------------------------------------- */

    const parametros = new URLSearchParams(window.location.search);

    // Ej: "producto.html?id=101" -> idParam = "101"
    const idParam = parametros.get("id");

    // Referencias a las secciones que vamos a mostrar u ocultar
    const seccionDetalle = document.getElementById("producto-detalle");
    const seccionNoEncontrado = document.getElementById("producto-no-encontrado");

    /* ---------------------------------------------------------
       2) VALIDAR QUE EL "id" EXISTA Y SEA UN NÚMERO VÁLIDO
       --------------------------------------------------------- */

    const idNumerico = Number(idParam);

    const idEsValido =
        idParam !== null &&
        idParam !== "" &&
        !Number.isNaN(idNumerico);

    if (!idEsValido) {
        mostrarProductoNoEncontrado();
        return;
    }

    /* ---------------------------------------------------------
       3) BUSCAR EL PRODUCTO EN LA "BASE DE DATOS" (productos.js)
       --------------------------------------------------------- */

    const producto = productos.find((item) => item.id === idNumerico);

    if (!producto) {
        mostrarProductoNoEncontrado();
        return;
    }

    /* ---------------------------------------------------------
       4) PINTAR LA INFORMACIÓN DEL PRODUCTO EN EL HTML
       --------------------------------------------------------- */

    pintarProducto(producto);


    /* ===========================================================
       FUNCIONES
       =========================================================== */

    // Rellena todos los elementos "producto-*" con los datos
    // del objeto encontrado.
    function pintarProducto(producto) {

        // Título de la pestaña del navegador
        document.title = `${producto.nombre} | FyBeauty`;

        // Imagen principal
        const imagen = document.getElementById("producto-imagen");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        // Nombre
        document.getElementById("producto-nombre").textContent = producto.nombre;

        // Precio (formateado como "S/ 39.90")
        const precioFormateado = producto.precio.toFixed(2);
        document.getElementById("producto-precio").textContent = `S/ ${precioFormateado}`;

        // Descripción
        document.getElementById("producto-descripcion").textContent = producto.descripcion;

        // Botón "Agregar al carrito": guardamos el id como data-attribute
        // para que el futuro script del carrito sepa qué producto agregar.
        const botonCarrito = document.getElementById("producto-agregar-carrito");
        botonCarrito.dataset.id = producto.id;

        // Migas de pan dinámicas (Inicio > Maquillaje > [Categoría] > [Producto])
        const migaCategoria = document.getElementById("miga-categoria");
        const migaProducto = document.getElementById("miga-producto");

        if (producto.categoria) {
            migaCategoria.innerHTML =
                `<a href="${producto.categoria.enlace}">${producto.categoria.nombre}</a>`;
        }

        migaProducto.textContent = producto.nombre;
    }

    // Oculta el detalle del producto y muestra el mensaje de error.
    function mostrarProductoNoEncontrado() {
        seccionDetalle.classList.add("d-none");
        seccionNoEncontrado.classList.remove("d-none");
        document.title = "Producto no encontrado | FyBeauty";
    }

});


/* ===== productos.js ===== */
/* =============================================================
   productos.js
   -------------------------------------------------------------
   Base de datos de productos de FyBeauty.

   Cada producto es un objeto con la siguiente forma:

   {
       id: number,              -> debe coincidir con "producto.html?id=..."
       nombre: string,
       precio: number,          -> en soles, sin el símbolo "S/"
       imagen: string,          -> ruta dentro de /img
       descripcion: string,
       categoria: {             -> se usa para pintar las migas de pan
           nombre: string,
           enlace: string
       }
   }

   NOTA PARA EL EQUIPO:
   Este archivo es solo un EJEMPLO con productos de la sección
   "Ojos" (máscaras, sombras, delineadores y cejas). Agreguen el
   resto de sus productos siguiendo exactamente esta misma
   estructura -> con eso, producto.html los mostrará automáticamente.
   ============================================================= */

const productos = [

    /* ---------------------------------------------------------
       MÁSCARAS DE PESTAÑAS (rímel)
       --------------------------------------------------------- */

    {
        id: 101,
        nombre: "Máscara",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Máscara de pestañas de uso diario que aporta volumen natural sin apelmazar. Fórmula ligera, fácil de retirar con agua tibia.",
        categoria: { nombre: "Rímel", enlace: "maquillaje-ojos-mascara.html" }
    },
    {
        id: 102,
        nombre: "Máscara Alargadora",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Cepillo de cerdas finas que separa y alarga pestaña por pestaña, logrando un efecto abanico sin grumos.",
        categoria: { nombre: "Rímel", enlace: "maquillaje-ojos-mascara.html" }
    },
    {
        id: 103,
        nombre: "Máscara A Prueba de Agua",
        precio: 59.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Fórmula resistente al agua y al sudor, ideal para el día a día. Larga duración sin manchar el párpado.",
        categoria: { nombre: "Rímel", enlace: "maquillaje-ojos-mascara.html" }
    },
    {
        id: 104,
        nombre: "Máscara Natural",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Efecto natural para looks de todos los días. Aporta definición sin recargar la mirada.",
        categoria: { nombre: "Rímel", enlace: "maquillaje-ojos-mascara.html" }
    },

    /* ---------------------------------------------------------
       SOMBRAS
       --------------------------------------------------------- */

    {
        id: 201,
        nombre: "Paleta Nude",
        precio: 53.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Paleta de 9 tonos nude de alta pigmentación, con acabados mate y satinado para crear looks versátiles.",
        categoria: { nombre: "Sombras", enlace: "maquillaje-ojos-sombras.html" }
    },
    {
        id: 202,
        nombre: "Paleta Warm",
        precio: 56.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Tonos cálidos inspirados en el atardecer. Textura sedosa y de larga duración.",
        categoria: { nombre: "Sombras", enlace: "maquillaje-ojos-sombras.html" }
    },
    {
        id: 203,
        nombre: "Paleta Ahumada",
        precio: 96.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Ideal para looks 'smoky eyes'. Combina mates profundos con toques metálicos para dar dimensión a la mirada.",
        categoria: { nombre: "Sombras", enlace: "maquillaje-ojos-sombras.html" }
    },
    {
        id: 204,
        nombre: "Paleta Colorida",
        precio: 46.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Colores vibrantes para looks llenos de personalidad, con excelente carga de color en una sola pasada.",
        categoria: { nombre: "Sombras", enlace: "maquillaje-ojos-sombras.html" }
    },

    /* ---------------------------------------------------------
       DELINEADORES
       --------------------------------------------------------- */

    {
        id: 301,
        nombre: "Delineador Líquido Negro",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Punta fina de precisión para trazos definidos. Fórmula de secado rápido y larga duración.",
        categoria: { nombre: "Delineadores", enlace: "maquillaje-ojos-delineador.html" }
    },
    {
        id: 302,
        nombre: "Delineador en Gel",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Textura en gel fácil de difuminar, perfecta para looks ahumados o trazos marcados.",
        categoria: { nombre: "Delineadores", enlace: "maquillaje-ojos-delineador.html" }
    },
    {
        id: 303,
        nombre: "Punta de Fieltro Precisión",
        precio: 69.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Punta de fieltro flexible que se adapta a la forma del ojo para un delineado simétrico en ambos lados.",
        categoria: { nombre: "Delineadores", enlace: "maquillaje-ojos-delineador.html" }
    },

    /* ---------------------------------------------------------
       CEJAS
       --------------------------------------------------------- */

    {
        id: 401,
        nombre: "Gel de Cejas Transparente",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Fija y peina las cejas durante todo el día sin dejar residuos ni sensación pegajosa.",
        categoria: { nombre: "Cejas", enlace: "maquillaje-ojos-cejas.html" }
    },
    {
        id: 402,
        nombre: "Gel de Cejas Con Color",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Aporta color y fijación en un solo paso, con cerdas que rellenan espacios vacíos de forma natural.",
        categoria: { nombre: "Cejas", enlace: "maquillaje-ojos-cejas.html" }
    },
    {
        id: 403,
        nombre: "Polvo para Cejas",
        precio: 69.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Dúo de tonos para diseñar y rellenar cejas con un acabado suave y muy natural.",
        categoria: { nombre: "Cejas", enlace: "maquillaje-ojos-cejas.html" }
    },

];


/* ===== misProgramas.js ===== */
document.addEventListener("DOMContentLoaded", () => {

    const paginaActual =
        window.location.pathname.split("/").pop() || "index.html";

    const enlaces =
        document.querySelectorAll(".menu-link");

    enlaces.forEach((enlace) => {

        enlace.classList.remove("active");

        const href = enlace.getAttribute("href");

        const seccion = enlace.getAttribute("data-seccion");

        const coincideExacto = href === paginaActual;

        const perteneceASeccion =
            seccion && paginaActual.startsWith(seccion + "-");

        if (coincideExacto || perteneceASeccion) {
            enlace.classList.add("active");
        }

    });

});


const tarjetas =
    document.querySelectorAll(".card-funciona");

const observador =
    new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0px)";

            }

        });

    });


tarjetas.forEach((tarjeta) => {

    tarjeta.style.opacity = "0";
    tarjeta.style.transform = "translateY(40px)";
    tarjeta.style.transition = ".7s";

    observador.observe(tarjeta);

});

document.querySelectorAll('.toggle-submenu').forEach(function (boton) {

    boton.addEventListener('click', function (e) {

        e.preventDefault();

        var submenu = boton.nextElementSibling;

        var abierto = submenu.classList.contains('abierto');

        submenu.classList.toggle('abierto', !abierto);

        boton.setAttribute('aria-expanded', String(!abierto));

    });

});

/* ===== filtros-productos-fybeauty ===== */
(function () {
    'use strict';

    const normalizar = (texto) => (texto || '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\(\d+\)/g, '')
        .replace(/[^a-z0-9\.\s/-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const obtenerPrecio = (producto) => {
        const directo = producto.dataset.precio;
        if (directo) return parseFloat(directo.replace(',', '.')) || 0;
        const texto = producto.textContent || '';
        const match = texto.match(/S\/\s*([0-9]+(?:[\.,][0-9]{1,2})?)/i);
        return match ? parseFloat(match[1].replace(',', '.')) : 0;
    };

    const itemProducto = (card) => card.closest('[data-producto-item="true"]') || card.closest('[class*="col-"]') || card;

    const cards = Array.from(document.querySelectorAll('.card-producto'));
    if (!cards.length) return;

    const productos = cards.map(card => {
        const item = itemProducto(card);
        const nombre = normalizar(card.dataset.nombre || card.querySelector('.nombre-producto')?.textContent || card.textContent);
        const precio = obtenerPrecio(card);
        const data = {
            card,
            item,
            nombre,
            precio,
            tipo: normalizar(card.dataset.tipo || item.dataset.tipo || ''),
            categoria: normalizar(card.dataset.categoria || item.dataset.categoria || ''),
            marca: normalizar(card.dataset.marca || item.dataset.marca || ''),
            acabado: normalizar(card.dataset.acabado || item.dataset.acabado || ''),
            tono: normalizar(card.dataset.tono || item.dataset.tono || ''),
            color: normalizar(card.dataset.color || item.dataset.color || '')
        };
        card.dataset.precio = precio.toFixed(2);
        item.dataset.precio = precio.toFixed(2);
        return data;
    });

    const filtros = Array.from(document.querySelectorAll('.filtro-lateral select, .filtro-lateral input, .filtro-lateral button[data-limpiar-filtros]'));
    if (!filtros.length) return;

    const precioMaximo = Math.ceil(Math.max(...productos.map(p => p.precio), 0));

    function actualizarFiltrosPrecio() {
        document.querySelectorAll('.filtro-lateral select[data-filtro="precio"]').forEach(select => {
            const actual = select.value;
            select.innerHTML = '';
            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.textContent = 'Precio';
            select.appendChild(placeholder);

            const paso = precioMaximo <= 60 ? 30 : precioMaximo <= 120 ? 50 : 100;
            for (let inicio = 0; inicio < precioMaximo; inicio += paso) {
                const fin = Math.min(inicio + paso, precioMaximo);
                const option = document.createElement('option');
                option.value = `${inicio}-${fin}`;
                option.textContent = `S/ ${inicio} – S/ ${fin}`;
                select.appendChild(option);
            }
            if ([...select.options].some(o => o.value === actual)) select.value = actual;
        });

        document.querySelectorAll('.filtro-lateral input[type="range"]').forEach(range => {
            range.min = 0;
            range.max = precioMaximo;
            if (!range.value || Number(range.value) > precioMaximo) range.value = precioMaximo;
            const grupo = range.closest('.filtro-grupo, .filtro-lateral');
            const valores = grupo?.querySelector('.filtro-precio-valores');
            if (valores) {
                const spans = valores.querySelectorAll('span');
                if (spans[0]) spans[0].textContent = 'S/ 0';
                if (spans[1]) spans[1].textContent = `S/ ${precioMaximo}`;
            }
        });
    }

    function campoDesdeGrupo(input) {
        const grupo = input.closest('.filtro-grupo');

        // Si el grupo declara explícitamente su campo (data-filtro="cobertura"),
        // esto tiene prioridad sobre la detección por título.
        if (grupo?.dataset.filtro) return normalizar(grupo.dataset.filtro);

        const titulo = normalizar(grupo?.querySelector('h2, h3, h4, p, strong, .filtro-titulo')?.textContent || grupo?.textContent || '');
        if (titulo.includes('tipo')) return 'tipo';
        if (titulo.includes('marca')) return 'marca';
        if (titulo.includes('acabado')) return 'acabado';
        if (titulo.includes('cobertura')) return 'cobertura';
        if (titulo.includes('formato')) return 'formato';
        if (titulo.includes('tono')) return 'tono';
        if (titulo.includes('color')) return 'color';
        return normalizar(input.dataset.filtro || input.name || '');
    }

    // Encuentra el texto del <label> asociado a un checkbox.
    // En el HTML de FyBeauty el label NO envuelve al input (son hermanos
    // dentro de .form-check, unidos por for="id"), así que check.closest('label')
    // nunca funciona: hay que buscarlo por el atributo "for" o como hermano.
    function etiquetaDeCheckbox(check) {
        if (check.id) {
            const porFor = document.querySelector(`label[for="${CSS.escape(check.id)}"]`);
            if (porFor) return porFor.textContent;
        }
        const contenedor = check.closest('.form-check') || check.parentElement;
        const hermano = contenedor?.querySelector('label');
        return hermano?.textContent || '';
    }

    function filtrosActivos() {
        const activos = {};

        document.querySelectorAll('.filtro-lateral select[data-filtro]').forEach(select => {
            // Un <option value=""> (el placeholder "Buscar marca", "Todos", etc.)
            // significa "sin filtro". Si no comprobamos esto aquí, el código de abajo
            // caía al textContent del placeholder (p.ej. "Buscar marca") y lo trataba
            // como un valor de filtro real, ocultando todos los productos desde el
            // primer render. Las opciones reales (Maybelline, CeraVe...) SÍ tienen
            // value propio porque el navegador usa su texto como value cuando no
            // se declara uno explícito, así que esta comprobación no las afecta.
            if (!select.value) return;

            const campo = normalizar(select.dataset.filtro);
            const valor = normalizar(select.value);
            if (!valor || ['todos','todas','tipo de producto','marca','precio','acabado','tono','color','orden','relevancia','mas vendidos','buscar marca'].includes(valor)) return;
            activos[campo] = valor;
        });

        document.querySelectorAll('.filtro-lateral input[type="checkbox"]:checked').forEach(check => {
            const campo = campoDesdeGrupo(check);
            const textoLabel = etiquetaDeCheckbox(check);
            // Solo usamos check.value si el HTML le puso un value real;
            // "on" es el valor por defecto de un checkbox sin value propio,
            // así que en ese caso siempre usamos el texto del label.
            const valor = normalizar(check.value && check.value !== 'on' ? check.value : textoLabel);
            if (!valor) return;
            activos[campo] ||= [];
            activos[campo].push(valor);
        });

        document.querySelectorAll('.filtro-lateral input[type="range"]').forEach(range => {
            const max = parseFloat(range.value || range.max || precioMaximo);
            if (max < precioMaximo) activos.precioRange = max;
        });

        return activos;
    }

    function coincideTexto(producto, campo, valor) {
        if (campo === 'categoria') return producto.categoria.includes(valor) || producto.tipo.includes(valor) || producto.nombre.includes(valor);
        if (campo === 'color') return producto.color.includes(valor) || producto.tono.includes(valor) || producto.nombre.includes(valor);
        if (campo === 'tono') return producto.tono.includes(valor) || producto.color.includes(valor) || producto.nombre.includes(valor);
        const base = producto[campo] || producto.nombre;
        return base.includes(valor) || producto.nombre.includes(valor);
    }

    function coincidePrecio(producto, valor) {
        if (!valor) return true;
        const nums = valor.match(/[0-9]+(?:\.[0-9]+)?/g)?.map(Number) || [];
        if (valor.includes('-') && nums.length >= 2) return producto.precio >= nums[0] && producto.precio <= nums[1];
        if (valor.includes('mas') && nums.length) return producto.precio >= nums[0];
        return true;
    }

    function aplicarFiltros() {
        const activos = filtrosActivos();
        let visibles = 0;

        productos.forEach(producto => {
            let mostrar = true;
            Object.entries(activos).forEach(([campo, valor]) => {
                if (!mostrar) return;
                if (campo === 'orden') return;
                if (campo === 'precio') mostrar = coincidePrecio(producto, valor);
                else if (campo === 'precioRange') mostrar = producto.precio <= Number(valor);
                else if (Array.isArray(valor)) mostrar = valor.some(v => coincideTexto(producto, campo, v));
                else mostrar = coincideTexto(producto, campo, valor);
            });
            producto.item.classList.toggle('producto-oculto', !mostrar);
            if (mostrar) visibles++;
        });

        ordenarProductos(activos.orden);
        mensajeResultados(visibles);
    }

    function ordenarProductos(orden) {
        if (!orden) return;
        const contenedores = Array.from(new Set(productos.map(p => p.item.parentElement).filter(Boolean)));
        contenedores.forEach(contenedor => {
            const items = productos.filter(p => p.item.parentElement === contenedor);
            if (orden.includes('menor')) items.sort((a, b) => a.precio - b.precio);
            else if (orden.includes('mayor')) items.sort((a, b) => b.precio - a.precio);
            else return;
            items.forEach(p => contenedor.appendChild(p.item));
        });
    }

    function mensajeResultados(visibles) {
        document.querySelectorAll('.mensaje-sin-resultados').forEach(m => m.remove());
        if (visibles > 0) return;
        const primerGrid = productos[0]?.item?.parentElement;
        if (!primerGrid) return;
        const msg = document.createElement('div');
        msg.className = 'col-12 mensaje-sin-resultados';
        msg.textContent = 'No hay productos que coincidan con los filtros seleccionados.';
        primerGrid.appendChild(msg);
    }

    document.querySelectorAll('.filtro-lateral select, .filtro-lateral input').forEach(el => {
        el.addEventListener('change', aplicarFiltros);
        el.addEventListener('input', aplicarFiltros);
    });

    document.querySelectorAll('[data-limpiar-filtros]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filtro-lateral select').forEach(s => s.selectedIndex = 0);
            document.querySelectorAll('.filtro-lateral input[type="checkbox"]').forEach(c => c.checked = false);
            document.querySelectorAll('.filtro-lateral input[type="range"]').forEach(r => r.value = r.max);
            aplicarFiltros();
        });
    });

    actualizarFiltrosPrecio();
    aplicarFiltros();
})();
