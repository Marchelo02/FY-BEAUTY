/* =============================================================
   FYBEAUTY - JAVASCRIPT GENERAL
   Un único archivo para funciones generales, detalle de producto
   y catálogo dinámico.
   ============================================================= */

/* =============================================================
   RUTAS DEL CATÁLOGO
   Cada categoría usa catalogo.html; la página antigua queda como
   fuente del contenido específico: hero, filtros y productos.
   ============================================================= */
const rutasCatalogo = {
    "maquillaje-rostro-base.html": "base",
    "maquillaje-rostro-contorno.html": "contorno",
    "maquillaje-rostro-corrector.html": "corrector",
    "maquillaje-rostro-iluminador.html": "iluminador",
    "maquillaje-rostro-polvo.html": "polvo",
    "maquillaje-rostro-rubor.html": "rubor",
    "maquillaje-ojos-sombras.html": "sombras",
    "maquillaje-ojos-mascara.html": "mascara",
    "maquillaje-ojos-delineador.html": "delineador-ojos",
    "maquillaje-ojos-cejas.html": "cejas",
    "maquillaje-labios-labiales.html": "labiales",
    "maquillaje-labios-gloss.html": "gloss",
    "maquillaje-labios-delineadores.html": "delineadores-labios",
    "maquillaje-labios-tintas.html": "tintas",
    "maquillaje-labios-balsamos.html": "balsamos",
    "skincare-limpiadores.html": "limpiadores",
    "skincare-hidratantes.html": "hidratantes",
    "skincare-bloqueadores.html": "bloqueadores",
    "skincare-piel-seca.html": "piel-seca",
    "skincare-piel-grasa.html": "piel-grasa",
    "skincare-piel-sensible.html": "piel-sensible",
    "skincare-piel-normal.html": "piel-normal",
    "accesorios-brochas.html": "brochas",
    "accesorios-rizadores.html": "rizadores",
    "accesorios-esponjas.html": "esponjas"
};

const fuentesCatalogo = Object.fromEntries(
    Object.entries(rutasCatalogo).map(([archivo, categoria]) => [categoria, archivo])
);

const paginaActual = window.location.pathname.split("/").pop() || "index.html";
const catalogoDisponible = window.location.protocol !== "file:";

/* Las URLs antiguas siguen funcionando, pero muestran la plantilla única.
   En file:// se mantienen para no romper la vista sin servidor local. */
if (catalogoDisponible && rutasCatalogo[paginaActual]) {
    window.location.replace(`catalogo.html?categoria=${encodeURIComponent(rutasCatalogo[paginaActual])}`);
}

/* =============================================================
   PRODUCTOS DEL DETALLE producto.html
   Se conserva en el mismo archivo JS por indicación del proyecto.
   ============================================================= */
const productos = [
    {
        id: 101,
        nombre: "Máscara",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Máscara de pestañas de uso diario que aporta volumen natural sin apelmazar. Fórmula ligera, fácil de retirar con agua tibia.",
        categoria: { nombre: "Rímel", enlace: "catalogo.html?categoria=mascara" }
    },
    {
        id: 102,
        nombre: "Máscara Alargadora",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Cepillo de cerdas finas que separa y alarga pestaña por pestaña, logrando un efecto abanico sin grumos.",
        categoria: { nombre: "Rímel", enlace: "catalogo.html?categoria=mascara" }
    },
    {
        id: 103,
        nombre: "Máscara A Prueba de Agua",
        precio: 59.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Fórmula resistente al agua y al sudor, ideal para el día a día. Larga duración sin manchar el párpado.",
        categoria: { nombre: "Rímel", enlace: "catalogo.html?categoria=mascara" }
    },
    {
        id: 104,
        nombre: "Máscara Natural",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Efecto natural para looks de todos los días. Aporta definición sin recargar la mirada.",
        categoria: { nombre: "Rímel", enlace: "catalogo.html?categoria=mascara" }
    },
    {
        id: 201,
        nombre: "Paleta Nude",
        precio: 53.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Paleta de 9 tonos nude de alta pigmentación, con acabados mate y satinado para crear looks versátiles.",
        categoria: { nombre: "Sombras", enlace: "catalogo.html?categoria=sombras" }
    },
    {
        id: 202,
        nombre: "Paleta Warm",
        precio: 56.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Tonos cálidos inspirados en el atardecer. Textura sedosa y de larga duración.",
        categoria: { nombre: "Sombras", enlace: "catalogo.html?categoria=sombras" }
    },
    {
        id: 203,
        nombre: "Paleta Ahumada",
        precio: 96.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Ideal para looks smoky eyes. Combina mates profundos con toques metálicos para dar dimensión a la mirada.",
        categoria: { nombre: "Sombras", enlace: "catalogo.html?categoria=sombras" }
    },
    {
        id: 204,
        nombre: "Paleta Colorida",
        precio: 46.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Colores vibrantes para looks llenos de personalidad, con excelente carga de color en una sola pasada.",
        categoria: { nombre: "Sombras", enlace: "catalogo.html?categoria=sombras" }
    },
    {
        id: 301,
        nombre: "Delineador Líquido Negro",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Punta fina de precisión para trazos definidos. Fórmula de secado rápido y larga duración.",
        categoria: { nombre: "Delineadores", enlace: "catalogo.html?categoria=delineador-ojos" }
    },
    {
        id: 302,
        nombre: "Delineador en Gel",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Textura en gel fácil de difuminar, perfecta para looks ahumados o trazos marcados.",
        categoria: { nombre: "Delineadores", enlace: "catalogo.html?categoria=delineador-ojos" }
    },
    {
        id: 303,
        nombre: "Punta de Fieltro Precisión",
        precio: 69.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Punta de fieltro flexible que se adapta a la forma del ojo para un delineado simétrico en ambos lados.",
        categoria: { nombre: "Delineadores", enlace: "catalogo.html?categoria=delineador-ojos" }
    },
    {
        id: 401,
        nombre: "Gel de Cejas Transparente",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Fija y peina las cejas durante todo el día sin dejar residuos ni sensación pegajosa.",
        categoria: { nombre: "Cejas", enlace: "catalogo.html?categoria=cejas" }
    },
    {
        id: 402,
        nombre: "Gel de Cejas Con Color",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Aporta color y fijación en un solo paso, con cerdas que rellenan espacios vacíos de forma natural.",
        categoria: { nombre: "Cejas", enlace: "catalogo.html?categoria=cejas" }
    },
    {
        id: 403,
        nombre: "Polvo para Cejas",
        precio: 69.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Dúo de tonos para diseñar y rellenar cejas con un acabado suave y muy natural.",
        categoria: { nombre: "Cejas", enlace: "catalogo.html?categoria=cejas" }
    }
];

/* =============================================================
   FUNCIONES GENERALES
   ============================================================= */
const normalizar = (texto) => (texto || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\(\d+\)/g, "")
    .replace(/[^a-z0-9\.\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function reescribirEnlacesCatalogo() {
    if (!catalogoDisponible) return;

    document.querySelectorAll("a[href]").forEach((enlace) => {
        const href = enlace.getAttribute("href");
        if (rutasCatalogo[href]) {
            enlace.setAttribute("href", `catalogo.html?categoria=${encodeURIComponent(rutasCatalogo[href])}`);
        }
    });
}

function inicializarSubmenus() {
    document.querySelectorAll(".toggle-submenu").forEach((boton) => {
        if (boton.dataset.inicializado === "true") return;
        boton.dataset.inicializado = "true";

        boton.addEventListener("click", (evento) => {
            evento.preventDefault();
            const submenu = boton.nextElementSibling;
            if (!submenu) return;
            const abierto = submenu.classList.contains("abierto");
            submenu.classList.toggle("abierto", !abierto);
            boton.setAttribute("aria-expanded", String(!abierto));
        });
    });
}

function inicializarMenuActivo() {
    const categoria = new URLSearchParams(window.location.search).get("categoria");
    const fuente = categoria ? fuentesCatalogo[categoria] : "";

    document.querySelectorAll(".menu-link").forEach((enlace) => {
        enlace.classList.remove("active");
        enlace.removeAttribute("aria-current");

        const href = enlace.getAttribute("href");
        const seccion = enlace.dataset.seccion;
        const coincideExacto = href === paginaActual;
        const perteneceASeccion = seccion && (
            paginaActual.startsWith(`${seccion}-`) || fuente.startsWith(`${seccion}-`)
        );

        if (coincideExacto || perteneceASeccion) {
            enlace.classList.add("active");
            enlace.setAttribute("aria-current", "page");
        }
    });
}

function inicializarAnimaciones() {
    const tarjetas = document.querySelectorAll(".card-funciona");
    if (!tarjetas.length || !("IntersectionObserver" in window)) return;

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0px)";
                observador.unobserve(entrada.target);
            }
        });
    });

    tarjetas.forEach((tarjeta) => {
        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(40px)";
        tarjeta.style.transition = ".7s";
        observador.observe(tarjeta);
    });
}

/* =============================================================
   DETALLE DINÁMICO DE PRODUCTO
   ============================================================= */
function inicializarDetalleProducto() {
    const seccionDetalle = document.getElementById("producto-detalle");
    const seccionNoEncontrado = document.getElementById("producto-no-encontrado");
    if (!seccionDetalle || !seccionNoEncontrado) return;

    const idParam = new URLSearchParams(window.location.search).get("id");
    const idNumerico = Number(idParam);
    const idEsValido = idParam !== null && idParam !== "" && !Number.isNaN(idNumerico);
    const producto = idEsValido ? productos.find((item) => item.id === idNumerico) : null;

    if (!producto) {
        seccionDetalle.classList.add("d-none");
        seccionNoEncontrado.classList.remove("d-none");
        document.title = "Producto no encontrado | FyBeauty";
        return;
    }

    document.title = `${producto.nombre} | FyBeauty`;

    const imagen = document.getElementById("producto-imagen");
    const nombre = document.getElementById("producto-nombre");
    const precio = document.getElementById("producto-precio");
    const descripcion = document.getElementById("producto-descripcion");
    const botonCarrito = document.getElementById("producto-agregar-carrito");
    const migaCategoria = document.getElementById("miga-categoria");
    const migaProducto = document.getElementById("miga-producto");

    if (imagen) {
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
    }
    if (nombre) nombre.textContent = producto.nombre;
    if (precio) precio.textContent = `S/ ${producto.precio.toFixed(2)}`;
    if (descripcion) descripcion.textContent = producto.descripcion;
    if (botonCarrito) botonCarrito.dataset.id = producto.id;
    if (migaCategoria && producto.categoria) {
        migaCategoria.innerHTML = `<a href="${producto.categoria.enlace}">${producto.categoria.nombre}</a>`;
    }
    if (migaProducto) migaProducto.textContent = producto.nombre;
}

/* =============================================================
   CATÁLOGO ÚNICO
   catalogo.html?categoria=cejas
   ============================================================= */
async function cargarCatalogo() {
    const catalogoMain = document.getElementById("catalogo-main");
    if (!catalogoMain) return;

    const categoria = new URLSearchParams(window.location.search).get("categoria");
    const fuente = categoria ? fuentesCatalogo[categoria] : null;

    if (!fuente) {
        mostrarErrorCatalogo(catalogoMain, "La categoría solicitada no existe.");
        return;
    }

    try {
        const respuesta = await fetch(fuente);
        if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

        const html = await respuesta.text();
        const documentoFuente = new DOMParser().parseFromString(html, "text/html");
        const breadcrumb = documentoFuente.querySelector(".breadcrumb-contenedor");
        const mainFuente = documentoFuente.querySelector("main");

        if (!mainFuente) throw new Error("La página fuente no contiene un elemento main.");

        const contenidoPrincipal = Array.from(mainFuente.children)
            .filter((elemento) => !elemento.matches(".newsletter"))
            .map((elemento) => elemento.outerHTML)
            .join("");

        catalogoMain.innerHTML = `${breadcrumb ? breadcrumb.outerHTML : ""}${contenidoPrincipal}`;

        if (documentoFuente.title) document.title = documentoFuente.title;
        const descripcionFuente = documentoFuente.querySelector('meta[name="description"]')?.content;
        const metaDescripcion = document.querySelector('meta[name="description"]');
        if (descripcionFuente && metaDescripcion) metaDescripcion.content = descripcionFuente;

        reescribirEnlacesCatalogo();
        inicializarFiltrosProductos();
        inicializarBuscadorProductos();
        inicializarAnimaciones();
    } catch (error) {
        console.error("No se pudo cargar el catálogo:", error);
        mostrarErrorCatalogo(
            catalogoMain,
            "No se pudo cargar el catálogo. Abre el proyecto con Live Server o desde un servidor web."
        );
    }
}

function mostrarErrorCatalogo(contenedor, mensaje) {
    contenedor.innerHTML = `
        <div class="container-xl py-5 text-center">
            <h1 class="titulo-principal">CATÁLOGO</h1>
            <p>${mensaje}</p>
            <a class="btn btn-ver-mas" href="inicio.html">VOLVER AL INICIO</a>
        </div>`;
}

/* =============================================================
   FILTROS DINÁMICOS
   Lee los filtros presentes en cada categoría. Por eso Cejas,
   Sombras, Base, Skincare o Accesorios pueden tener filtros distintos.
   ============================================================= */
function inicializarFiltrosProductos() {
    const cards = Array.from(document.querySelectorAll(".card-producto"));
    const filtroLateral = document.querySelector(".filtro-lateral");
    if (!cards.length || !filtroLateral) return;

    const itemProducto = (card) =>
        card.closest('[data-producto-item="true"]') || card.closest('[class*="col-"]') || card;

    const obtenerPrecio = (card) => {
        const directo = card.dataset.precio || itemProducto(card).dataset.precio;
        if (directo) return parseFloat(directo.replace(",", ".")) || 0;
        const match = (card.textContent || "").match(/S\/\s*([0-9]+(?:[\.,][0-9]{1,2})?)/i);
        return match ? parseFloat(match[1].replace(",", ".")) : 0;
    };

    const listaProductos = cards.map((card) => {
        const item = itemProducto(card);
        const datasets = { ...item.dataset, ...card.dataset };
        const textoDatos = Object.values(datasets).join(" ");
        const nombreVisible = card.querySelector(".nombre-producto")?.textContent || card.textContent;
        const precio = obtenerPrecio(card);

        card.dataset.precio = precio.toFixed(2);
        item.dataset.precio = precio.toFixed(2);

        return {
            card,
            item,
            precio,
            nombre: normalizar(card.dataset.nombre || nombreVisible),
            texto: normalizar(`${nombreVisible} ${textoDatos}`),
            tipo: normalizar(card.dataset.tipo || item.dataset.tipo),
            categoria: normalizar(card.dataset.categoria || item.dataset.categoria),
            marca: normalizar(card.dataset.marca || item.dataset.marca),
            acabado: normalizar(card.dataset.acabado || item.dataset.acabado),
            cobertura: normalizar(card.dataset.cobertura || item.dataset.cobertura),
            formato: normalizar(card.dataset.formato || item.dataset.formato),
            tono: normalizar(card.dataset.tono || item.dataset.tono),
            color: normalizar(card.dataset.color || item.dataset.color)
        };
    });

    const precioMaximo = Math.ceil(Math.max(...listaProductos.map((producto) => producto.precio), 0));

    document.querySelectorAll('.filtro-lateral input[type="range"]').forEach((range) => {
        range.min = 0;
        range.max = precioMaximo;
        range.value = precioMaximo;
        const grupo = range.closest(".filtro-grupo, .filtro-lateral");
        const spans = grupo?.querySelectorAll(".filtro-precio-valores span");
        if (spans?.[0]) spans[0].textContent = "S/ 0";
        if (spans?.[1]) spans[1].textContent = `S/ ${precioMaximo}`;
    });

    function campoDesdeGrupo(elemento) {
        const grupo = elemento.closest(".filtro-grupo");
        if (grupo?.dataset.filtro) return normalizar(grupo.dataset.filtro);

        const titulo = normalizar(
            grupo?.querySelector("h2, h3, h4, p, strong, .filtro-titulo")?.textContent || ""
        );

        if (titulo.includes("marca")) return "marca";
        if (titulo.includes("acabado") || titulo.includes("textura") || titulo.includes("efecto")) return "acabado";
        if (titulo.includes("cobertura")) return "cobertura";
        if (titulo.includes("formato")) return "formato";
        if (titulo.includes("tono")) return "tono";
        if (titulo.includes("color")) return "color";
        if (titulo.includes("categoria")) return "categoria";
        if (titulo.includes("tipo")) return "tipo";
        return titulo || normalizar(elemento.dataset.filtro || elemento.name);
    }

    function etiquetaCheckbox(check) {
        if (check.id) {
            const label = document.querySelector(`label[for="${CSS.escape(check.id)}"]`);
            if (label) return label.textContent;
        }
        return check.closest(".form-check")?.querySelector("label")?.textContent || "";
    }

    function filtrosActivos() {
        const activos = {};

        document.querySelectorAll('.filtro-lateral select').forEach((select) => {
            if (!select.value) return;
            const campo = normalizar(select.dataset.filtro) || campoDesdeGrupo(select);
            const valor = normalizar(select.value);
            const valoresSinFiltro = [
                "todos", "todas", "tipo de producto", "marca", "buscar marca",
                "precio", "acabado", "tono", "color", "formato", "cobertura"
            ];
            if (!campo || !valor || valoresSinFiltro.includes(valor)) return;
            activos[campo] = valor;
        });

        document.querySelectorAll('.filtro-lateral input[type="checkbox"]:checked').forEach((check) => {
            const campo = campoDesdeGrupo(check);
            const valor = normalizar(check.value && check.value !== "on" ? check.value : etiquetaCheckbox(check));
            if (!campo || !valor) return;
            activos[campo] ||= [];
            activos[campo].push(valor);
        });

        const tonosActivos = Array.from(document.querySelectorAll('.filtro-lateral .tono-swatch[aria-pressed="true"]'))
            .map((boton) => normalizar(boton.getAttribute("aria-label")))
            .filter(Boolean);
        if (tonosActivos.length) activos.tono = tonosActivos;

        document.querySelectorAll('.filtro-lateral input[type="range"]').forEach((range) => {
            const maximo = parseFloat(range.value || range.max || precioMaximo);
            if (maximo < precioMaximo) activos.precioRange = maximo;
        });

        const selectOrden = document.querySelector(".barra-orden select");
        if (selectOrden) activos.orden = normalizar(selectOrden.value || selectOrden.options[selectOrden.selectedIndex]?.textContent);

        const buscador = document.getElementById("buscador-principal");
        const busqueda = normalizar(buscador?.value);
        if (busqueda) activos.busqueda = busqueda;

        return activos;
    }

    function coincidePrecio(producto, valor) {
        const numeros = valor.match(/[0-9]+(?:\.[0-9]+)?/g)?.map(Number) || [];
        if (valor.includes("-") && numeros.length >= 2) {
            return producto.precio >= numeros[0] && producto.precio <= numeros[1];
        }
        if (valor.includes("mas") && numeros.length) return producto.precio >= numeros[0];
        if (valor.includes("menos") && numeros.length) return producto.precio <= numeros[0];
        return true;
    }

    function coincide(producto, campo, valor) {
        if (campo === "busqueda") return producto.texto.includes(valor);
        if (campo === "color") return producto.color.includes(valor) || producto.tono.includes(valor) || producto.texto.includes(valor);
        if (campo === "tono") return producto.tono.includes(valor) || producto.color.includes(valor) || producto.texto.includes(valor);
        if (campo === "categoria") return producto.categoria.includes(valor) || producto.tipo.includes(valor) || producto.texto.includes(valor);

        const dato = producto[campo];
        if (typeof dato === "string" && dato) return dato.includes(valor) || producto.texto.includes(valor);
        return producto.texto.includes(valor);
    }

    function ordenar(orden) {
        if (!orden) return;
        const contenedores = Array.from(new Set(listaProductos.map((producto) => producto.item.parentElement).filter(Boolean)));

        contenedores.forEach((contenedor) => {
            const items = listaProductos.filter((producto) => producto.item.parentElement === contenedor);
            if (orden.includes("menor")) items.sort((a, b) => a.precio - b.precio);
            else if (orden.includes("mayor")) items.sort((a, b) => b.precio - a.precio);
            else return;
            items.forEach((producto) => contenedor.appendChild(producto.item));
        });
    }

    function actualizarContador(visibles) {
        document.querySelectorAll(".contador-resultados").forEach((contador) => {
            contador.textContent = `${visibles} ${visibles === 1 ? "producto encontrado" : "productos encontrados"}`;
        });
    }

    function mostrarMensajeSinResultados(visibles) {
        document.querySelectorAll(".mensaje-sin-resultados").forEach((mensaje) => mensaje.remove());
        if (visibles > 0) return;

        const grid = listaProductos[0]?.item.parentElement;
        if (!grid) return;
        const mensaje = document.createElement("div");
        mensaje.className = "col-12 mensaje-sin-resultados";
        mensaje.textContent = "No hay productos que coincidan con los filtros seleccionados.";
        grid.appendChild(mensaje);
    }

    function aplicarFiltros() {
        const activos = filtrosActivos();
        let visibles = 0;

        listaProductos.forEach((producto) => {
            let mostrar = true;

            Object.entries(activos).forEach(([campo, valor]) => {
                if (!mostrar || campo === "orden") return;
                if (campo === "precioRange") mostrar = producto.precio <= Number(valor);
                else if (campo === "precio") mostrar = coincidePrecio(producto, valor);
                else if (Array.isArray(valor)) mostrar = valor.some((opcion) => coincide(producto, campo, opcion));
                else mostrar = coincide(producto, campo, valor);
            });

            producto.item.classList.toggle("producto-oculto", !mostrar);
            if (mostrar) visibles += 1;
        });

        ordenar(activos.orden);
        actualizarContador(visibles);
        mostrarMensajeSinResultados(visibles);
    }

    document.querySelectorAll(".filtro-lateral select, .filtro-lateral input, .barra-orden select").forEach((elemento) => {
        elemento.addEventListener("change", aplicarFiltros);
        elemento.addEventListener("input", aplicarFiltros);
    });

    document.querySelectorAll(".filtro-lateral .tono-swatch").forEach((boton) => {
        boton.setAttribute("aria-pressed", "false");
        boton.addEventListener("click", () => {
            const activo = boton.getAttribute("aria-pressed") !== "true";
            boton.setAttribute("aria-pressed", String(activo));
            boton.classList.toggle("border-dark", activo);
            boton.classList.toggle("border-3", activo);
            aplicarFiltros();
        });
    });

    document.querySelectorAll(".btn-filtrar").forEach((boton) => boton.addEventListener("click", aplicarFiltros));

    const buscador = document.getElementById("buscador-principal");
    if (buscador) buscador.addEventListener("input", aplicarFiltros);

    aplicarFiltros();
}

function inicializarBuscadorProductos() {
    const buscador = document.getElementById("buscador-principal");
    if (!buscador) return;
    buscador.placeholder = "Buscar productos";
}

/* =============================================================
   INICIO GENERAL
   ============================================================= */
document.addEventListener("DOMContentLoaded", async () => {
    reescribirEnlacesCatalogo();
    inicializarSubmenus();
    inicializarMenuActivo();
    inicializarDetalleProducto();
    inicializarAnimaciones();

    if (document.getElementById("catalogo-main")) {
        await cargarCatalogo();
    } else {
        inicializarFiltrosProductos();
        inicializarBuscadorProductos();
    }
});
