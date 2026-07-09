/* =============================================================
   FYBEAUTY - JAVASCRIPT GENERAL
   Un único archivo JS para las funciones del proyecto.
   ============================================================= */

const paginaActual =
    window.location.pathname.split("/").pop() || "index.html";

/* =============================================================
   PRODUCTOS PARA producto.html
   ============================================================= */
const productos = [
    {
        id: 101,
        nombre: "Máscara",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Máscara de pestañas de uso diario que aporta volumen natural sin apelmazar. Fórmula ligera, fácil de retirar con agua tibia.",
        categoria: {
            nombre: "Rímel",
            enlace: "maquillaje-ojos-mascara.html"
        }
    },
    {
        id: 102,
        nombre: "Máscara Alargadora",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Cepillo de cerdas finas que separa y alarga pestaña por pestaña, logrando un efecto abanico sin grumos.",
        categoria: {
            nombre: "Rímel",
            enlace: "maquillaje-ojos-mascara.html"
        }
    },
    {
        id: 103,
        nombre: "Máscara A Prueba de Agua",
        precio: 59.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Fórmula resistente al agua y al sudor, ideal para el día a día. Larga duración sin manchar el párpado.",
        categoria: {
            nombre: "Rímel",
            enlace: "maquillaje-ojos-mascara.html"
        }
    },
    {
        id: 104,
        nombre: "Máscara Natural",
        precio: 39.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Efecto natural para looks de todos los días. Aporta definición sin recargar la mirada.",
        categoria: {
            nombre: "Rímel",
            enlace: "maquillaje-ojos-mascara.html"
        }
    },
    {
        id: 201,
        nombre: "Paleta Nude",
        precio: 53.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Paleta de 9 tonos nude de alta pigmentación, con acabados mate y satinado para crear looks versátiles.",
        categoria: {
            nombre: "Sombras",
            enlace: "maquillaje-ojos-sombras.html"
        }
    },
    {
        id: 202,
        nombre: "Paleta Warm",
        precio: 56.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Tonos cálidos inspirados en el atardecer. Textura sedosa y de larga duración.",
        categoria: {
            nombre: "Sombras",
            enlace: "maquillaje-ojos-sombras.html"
        }
    },
    {
        id: 203,
        nombre: "Paleta Ahumada",
        precio: 96.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Ideal para looks smoky eyes. Combina mates profundos con toques metálicos para dar dimensión a la mirada.",
        categoria: {
            nombre: "Sombras",
            enlace: "maquillaje-ojos-sombras.html"
        }
    },
    {
        id: 204,
        nombre: "Paleta Colorida",
        precio: 46.00,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Colores vibrantes para looks llenos de personalidad, con excelente carga de color en una sola pasada.",
        categoria: {
            nombre: "Sombras",
            enlace: "maquillaje-ojos-sombras.html"
        }
    },
    {
        id: 301,
        nombre: "Delineador Líquido Negro",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Punta fina de precisión para trazos definidos. Fórmula de secado rápido y larga duración.",
        categoria: {
            nombre: "Delineadores",
            enlace: "maquillaje-ojos-delineador.html"
        }
    },
    {
        id: 302,
        nombre: "Delineador en Gel",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Textura en gel fácil de difuminar, perfecta para looks ahumados o trazos marcados.",
        categoria: {
            nombre: "Delineadores",
            enlace: "maquillaje-ojos-delineador.html"
        }
    },
    {
        id: 303,
        nombre: "Punta de Fieltro Precisión",
        precio: 69.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Punta de fieltro flexible que se adapta a la forma del ojo para un delineado simétrico en ambos lados.",
        categoria: {
            nombre: "Delineadores",
            enlace: "maquillaje-ojos-delineador.html"
        }
    },
    {
        id: 401,
        nombre: "Gel de Cejas Transparente",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Fija y peina las cejas durante todo el día sin dejar residuos ni sensación pegajosa.",
        categoria: {
            nombre: "Cejas",
            enlace: "maquillaje-ojos-cejas.html"
        }
    },
    {
        id: 402,
        nombre: "Gel de Cejas Con Color",
        precio: 34.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Aporta color y fijación en un solo paso, con cerdas que rellenan espacios vacíos de forma natural.",
        categoria: {
            nombre: "Cejas",
            enlace: "maquillaje-ojos-cejas.html"
        }
    },
    {
        id: 403,
        nombre: "Polvo para Cejas",
        precio: 69.90,
        imagen: "img/producto-marcador.jpg",
        descripcion: "Dúo de tonos para diseñar y rellenar cejas con un acabado suave y muy natural.",
        categoria: {
            nombre: "Cejas",
            enlace: "maquillaje-ojos-cejas.html"
        }
    }
];

/* =============================================================
   UTILIDAD PARA COMPARAR TEXTOS DE LOS FILTROS
   ============================================================= */
function normalizar(texto) {
    return (texto || "")
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\(\d+\)/g, "")
        .replace(/[^a-z0-9.\s/-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

/* =============================================================
   MENÚ ACTIVO
   ============================================================= */
function inicializarMenuActivo() {
    document.querySelectorAll(".menu-link").forEach((enlace) => {
        enlace.classList.remove("active");
        enlace.removeAttribute("aria-current");

        const href = enlace.getAttribute("href");
        const seccion = enlace.dataset.seccion;
        const coincideExacto = href === paginaActual;
        const perteneceASeccion =
            seccion && paginaActual.startsWith(`${seccion}-`);

        if (coincideExacto || perteneceASeccion) {
            enlace.classList.add("active");
            enlace.setAttribute("aria-current", "page");
        }
    });
}

/* =============================================================
   SUBMENÚS
   ============================================================= */
function inicializarSubmenus() {
    document.querySelectorAll(".toggle-submenu").forEach((boton) => {
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

/* =============================================================
   ANIMACIONES DE TARJETAS INFORMATIVAS
   ============================================================= */
function inicializarAnimaciones() {
    const tarjetas = document.querySelectorAll(".card-funciona");

    if (!tarjetas.length || !("IntersectionObserver" in window)) return;

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0px)";
            observador.unobserve(entrada.target);
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
   DETALLE DINÁMICO DE producto.html
   ============================================================= */
function inicializarDetalleProducto() {
    const seccionDetalle = document.getElementById("producto-detalle");
    const seccionNoEncontrado =
        document.getElementById("producto-no-encontrado");

    if (!seccionDetalle || !seccionNoEncontrado) return;

    const idParam =
        new URLSearchParams(window.location.search).get("id");
    const idNumerico = Number(idParam);

    const producto =
        idParam !== null &&
        idParam !== "" &&
        !Number.isNaN(idNumerico)
            ? productos.find((item) => item.id === idNumerico)
            : null;

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
    const botonCarrito =
        document.getElementById("producto-agregar-carrito");
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
        migaCategoria.innerHTML =
            `<a href="${producto.categoria.enlace}">${producto.categoria.nombre}</a>`;
    }

    if (migaProducto) {
        migaProducto.textContent = producto.nombre;
    }
}

/* =============================================================
   FILTROS DE PRODUCTOS

   IMPORTANTE:
   - Los checkbox, tonos, marca y precio NO filtran al cambiar.
   - Esos controles se aplican solamente al presionar "Filtrar".
   - El buscador y el orden funcionan inmediatamente, pero respetan
     la última selección confirmada con el botón "Filtrar".
   ============================================================= */
function inicializarFiltrosProductos() {
    const cards =
        Array.from(document.querySelectorAll(".card-producto"));
    const filtroLateral = document.querySelector(".filtro-lateral");

    if (!cards.length || !filtroLateral) return;

    function obtenerItem(card) {
        return card.closest('[data-producto-item="true"]') ||
            card.closest('[class*="col-"]') ||
            card;
    }

    function obtenerPrecio(card, item) {
        const precioData =
            card.dataset.precio || item.dataset.precio;

        if (precioData) {
            return parseFloat(precioData.replace(",", ".")) || 0;
        }

        const texto = card.textContent || "";
        const resultado = texto.match(
            /S\/\s*([0-9]+(?:[.,][0-9]{1,2})?)/i
        );

        return resultado
            ? parseFloat(resultado[1].replace(",", "."))
            : 0;
    }

    const listaProductos = cards.map((card, indiceOriginal) => {
        const item = obtenerItem(card);
        const precio = obtenerPrecio(card, item);
        const nombreVisible =
            card.querySelector(".nombre-producto")?.textContent ||
            card.textContent ||
            "";

        const textoDatos = [
            ...Object.values(item.dataset),
            ...Object.values(card.dataset)
        ].join(" ");

        card.dataset.precio = precio.toFixed(2);
        item.dataset.precio = precio.toFixed(2);

        return {
            card,
            item,
            precio,
            indiceOriginal,
            nombre: normalizar(
                card.dataset.nombre ||
                item.dataset.nombre ||
                nombreVisible
            ),
            texto: normalizar(`${nombreVisible} ${textoDatos}`),
            tipo: normalizar(
                card.dataset.tipo || item.dataset.tipo
            ),
            categoria: normalizar(
                card.dataset.categoria || item.dataset.categoria
            ),
            marca: normalizar(
                card.dataset.marca || item.dataset.marca
            ),
            acabado: normalizar(
                card.dataset.acabado || item.dataset.acabado
            ),
            cobertura: normalizar(
                card.dataset.cobertura || item.dataset.cobertura
            ),
            formato: normalizar(
                card.dataset.formato || item.dataset.formato
            ),
            tono: normalizar(
                card.dataset.tono || item.dataset.tono
            ),
            color: normalizar(
                card.dataset.color || item.dataset.color
            )
        };
    });

    const precioMaximo = Math.ceil(
        Math.max(
            ...listaProductos.map((producto) => producto.precio),
            0
        )
    );

    document
        .querySelectorAll('.filtro-lateral input[type="range"]')
        .forEach((range) => {
            range.min = "0";
            range.max = String(precioMaximo);
            range.value = String(precioMaximo);

            const grupo =
                range.closest(".filtro-grupo, .filtro-lateral");
            const valores =
                grupo?.querySelector(".filtro-precio-valores");
            const spans = valores
                ? valores.querySelectorAll("span")
                : [];

            if (spans[0]) spans[0].textContent = "S/ 0";
            if (spans[1]) {
                spans[1].textContent = `S/ ${precioMaximo}`;
            }
        });

    function campoDesdeGrupo(elemento) {
        const grupo = elemento.closest(".filtro-grupo");

        if (grupo?.dataset.filtro) {
            return normalizar(grupo.dataset.filtro);
        }

        const titulo = normalizar(
            grupo?.querySelector(
                "h2, h3, h4, p, strong, .filtro-titulo"
            )?.textContent || ""
        );

        if (titulo.includes("marca")) return "marca";
        if (
            titulo.includes("acabado") ||
            titulo.includes("textura") ||
            titulo.includes("efecto")
        ) {
            return "acabado";
        }
        if (titulo.includes("cobertura")) return "cobertura";
        if (titulo.includes("formato")) return "formato";
        if (titulo.includes("tono")) return "tono";
        if (titulo.includes("color")) return "color";
        if (titulo.includes("categoria")) return "categoria";
        if (titulo.includes("tipo")) return "tipo";

        return normalizar(
            elemento.dataset.filtro || elemento.name || titulo
        );
    }

    function obtenerEtiquetaCheckbox(check) {
        if (check.id) {
            const label = Array.from(
                document.querySelectorAll("label[for]")
            ).find(
                (elemento) =>
                    elemento.getAttribute("for") === check.id
            );

            if (label) return label.textContent || "";
        }

        return check
            .closest(".form-check")
            ?.querySelector("label")
            ?.textContent || "";
    }

    function leerFiltrosLaterales() {
        const activos = {};

        document
            .querySelectorAll(".filtro-lateral select")
            .forEach((select) => {
                if (!select.value) return;

                const campo =
                    normalizar(select.dataset.filtro) ||
                    campoDesdeGrupo(select);
                const valor = normalizar(select.value);

                const opcionesSinFiltro = [
                    "todos",
                    "todas",
                    "tipo de producto",
                    "marca",
                    "buscar marca",
                    "precio",
                    "acabado",
                    "tono",
                    "color",
                    "formato",
                    "cobertura"
                ];

                if (
                    !campo ||
                    !valor ||
                    opcionesSinFiltro.includes(valor)
                ) {
                    return;
                }

                activos[campo] = valor;
            });

        document
            .querySelectorAll(
                '.filtro-lateral input[type="checkbox"]:checked'
            )
            .forEach((check) => {
                const campo = campoDesdeGrupo(check);
                const valorOriginal =
                    check.value && check.value !== "on"
                        ? check.value
                        : obtenerEtiquetaCheckbox(check);
                const valor = normalizar(valorOriginal);

                if (!campo || !valor) return;

                if (!activos[campo]) {
                    activos[campo] = [];
                }

                activos[campo].push(valor);
            });

        const tonosActivos = Array.from(
            document.querySelectorAll(
                '.filtro-lateral .tono-swatch[aria-pressed="true"]'
            )
        )
            .map((boton) =>
                normalizar(boton.getAttribute("aria-label"))
            )
            .filter(Boolean);

        if (tonosActivos.length) {
            activos.tono = tonosActivos;
        }

        document
            .querySelectorAll('.filtro-lateral input[type="range"]')
            .forEach((range) => {
                const maximoSeleccionado = parseFloat(
                    range.value ||
                    range.max ||
                    String(precioMaximo)
                );

                if (maximoSeleccionado < precioMaximo) {
                    activos.precioRange = maximoSeleccionado;
                }
            });

        return activos;
    }

    /* Solo cambia cuando el usuario presiona el botón Filtrar. */
    let filtrosAplicados = {};

    function obtenerFiltrosActivos() {
        const activos = { ...filtrosAplicados };
        const ordenar = document.querySelector(".barra-orden select");
        const buscador = document.getElementById("buscador-principal");
        const busqueda = normalizar(buscador?.value);

        if (ordenar) {
            activos.orden = normalizar(ordenar.value);
        }

        if (busqueda) {
            activos.busqueda = busqueda;
        }

        return activos;
    }

    function coincidePrecio(producto, valor) {
        const numeros =
            valor.match(/[0-9]+(?:\.[0-9]+)?/g)?.map(Number) || [];

        if (valor.includes("-") && numeros.length >= 2) {
            return producto.precio >= numeros[0] &&
                producto.precio <= numeros[1];
        }

        if (valor.includes("mas") && numeros.length) {
            return producto.precio >= numeros[0];
        }

        if (valor.includes("menos") && numeros.length) {
            return producto.precio <= numeros[0];
        }

        return true;
    }

    function coincide(producto, campo, valor) {
        if (campo === "busqueda") {
            return producto.texto.includes(valor);
        }

        if (campo === "color") {
            return producto.color.includes(valor) ||
                producto.tono.includes(valor) ||
                producto.texto.includes(valor);
        }

        if (campo === "tono") {
            return producto.tono.includes(valor) ||
                producto.color.includes(valor) ||
                producto.texto.includes(valor);
        }

        if (campo === "categoria") {
            return producto.categoria.includes(valor) ||
                producto.tipo.includes(valor) ||
                producto.texto.includes(valor);
        }

        const dato = producto[campo];

        if (typeof dato === "string" && dato) {
            return dato.includes(valor) ||
                producto.texto.includes(valor);
        }

        return producto.texto.includes(valor);
    }

    function ordenarProductos(orden) {
        const contenedores = Array.from(
            new Set(
                listaProductos
                    .map((producto) => producto.item.parentElement)
                    .filter(Boolean)
            )
        );

        contenedores.forEach((contenedor) => {
            const items = listaProductos.filter(
                (producto) =>
                    producto.item.parentElement === contenedor
            );

            if (orden?.includes("menor")) {
                items.sort((a, b) => a.precio - b.precio);
            } else if (orden?.includes("mayor")) {
                items.sort((a, b) => b.precio - a.precio);
            } else {
                items.sort(
                    (a, b) => a.indiceOriginal - b.indiceOriginal
                );
            }

            items.forEach((producto) => {
                contenedor.appendChild(producto.item);
            });
        });
    }

    function actualizarContador(visibles) {
        document
            .querySelectorAll(".contador-resultados")
            .forEach((contador) => {
                contador.textContent =
                    `${visibles} ${
                        visibles === 1
                            ? "producto encontrado"
                            : "productos encontrados"
                    }`;
            });
    }

    function actualizarMensajeSinResultados(visibles) {
        document
            .querySelectorAll(".mensaje-sin-resultados")
            .forEach((mensaje) => mensaje.remove());

        if (visibles > 0) return;

        const grid = listaProductos[0]?.item.parentElement;
        if (!grid) return;

        const mensaje = document.createElement("div");
        mensaje.className = "col-12 mensaje-sin-resultados";
        mensaje.textContent =
            "No hay productos que coincidan con los filtros seleccionados.";

        grid.appendChild(mensaje);
    }

    function aplicarFiltros() {
        const activos = obtenerFiltrosActivos();
        let visibles = 0;

        listaProductos.forEach((producto) => {
            let mostrar = true;

            Object.entries(activos).forEach(([campo, valor]) => {
                if (!mostrar || campo === "orden") return;

                if (campo === "precioRange") {
                    mostrar =
                        producto.precio <= Number(valor);
                } else if (campo === "precio") {
                    mostrar = coincidePrecio(producto, valor);
                } else if (Array.isArray(valor)) {
                    mostrar = valor.some((opcion) =>
                        coincide(producto, campo, opcion)
                    );
                } else {
                    mostrar = coincide(producto, campo, valor);
                }
            });

            producto.item.classList.toggle(
                "producto-oculto",
                !mostrar
            );

            if (mostrar) {
                visibles += 1;
            }
        });

        ordenarProductos(activos.orden);
        actualizarContador(visibles);
        actualizarMensajeSinResultados(visibles);
    }

    /* El tono solo cambia visualmente. No filtra todavía. */
    document
        .querySelectorAll(".filtro-lateral .tono-swatch")
        .forEach((boton) => {
            boton.setAttribute("aria-pressed", "false");

            boton.addEventListener("click", () => {
                const activo =
                    boton.getAttribute("aria-pressed") !== "true";

                boton.setAttribute(
                    "aria-pressed",
                    String(activo)
                );

                boton.classList.toggle("border-dark", activo);
                boton.classList.toggle("border-3", activo);
            });
        });

    /* Los filtros laterales se confirman aquí. */
    document.querySelectorAll(".btn-filtrar").forEach((boton) => {
        boton.addEventListener("click", () => {
            filtrosAplicados = leerFiltrosLaterales();
            aplicarFiltros();
        });
    });

    /* Orden y búsqueda son controles independientes. */
    document
        .querySelectorAll(".barra-orden select")
        .forEach((select) => {
            select.addEventListener("change", aplicarFiltros);
        });

    const buscador = document.getElementById("buscador-principal");

    if (buscador) {
        buscador.addEventListener("input", aplicarFiltros);
    }

    aplicarFiltros();
}

function inicializarBuscadorProductos() {
    const buscador = document.getElementById("buscador-principal");

    if (!buscador) return;
    buscador.placeholder = "Buscar productos";
}

/* =============================================================
   INICIO
   ============================================================= */
document.addEventListener("DOMContentLoaded", () => {
    inicializarMenuActivo();
    inicializarSubmenus();
    inicializarAnimaciones();
    inicializarDetalleProducto();
    inicializarFiltrosProductos();
    inicializarBuscadorProductos();
});
