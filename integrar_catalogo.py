from pathlib import Path
import html
import re
import shutil

CATEGORIAS = {
    "base": "datos/catalogo/base.txt",
    "contorno": "datos/catalogo/contorno.txt",
    "corrector": "datos/catalogo/corrector.txt",
    "iluminador": "datos/catalogo/iluminador.txt",
    "polvo": "datos/catalogo/polvo.txt",
    "rubor": "datos/catalogo/rubor.txt",
    "sombras": "datos/catalogo/sombras.txt",
    "mascara": "datos/catalogo/mascara.txt",
    "delineador-ojos": "datos/catalogo/delineador-ojos.txt",
    "cejas": "datos/catalogo/cejas.txt",
    "labiales": "datos/catalogo/labiales.txt",
    "gloss": "datos/catalogo/gloss.txt",
    "delineadores-labios": "datos/catalogo/delineadores-labios.txt",
    "tintas": "datos/catalogo/tintas.txt",
    "balsamos": "datos/catalogo/balsamos.txt",
}


def buscar(texto, patron, nombre):
    resultado = re.search(patron, texto, re.S | re.I)
    if not resultado:
        raise RuntimeError(f"No se encontro {nombre}")
    return resultado.group(1).strip()


def crear_plantillas():
    plantillas = []

    for categoria, ruta in CATEGORIAS.items():
        fuente = Path(ruta).read_text(encoding="utf-8")
        titulo = buscar(fuente, r"<title>(.*?)</title>", f"title de {categoria}")
        descripcion = buscar(
            fuente,
            r'<meta\s+content="(.*?)"\s+name="description"\s*/?>',
            f"description de {categoria}",
        )

        inicio_breadcrumb = fuente.find('<div class="container-xl breadcrumb-contenedor">')
        inicio_main = fuente.find("<main>", inicio_breadcrumb)
        fin_main = fuente.find("</main>", inicio_main)

        if inicio_breadcrumb < 0 or inicio_main < 0 or fin_main < 0:
            raise RuntimeError(f"Estructura principal invalida en {categoria}")

        breadcrumb = fuente[inicio_breadcrumb:inicio_main].strip()
        contenido_main = fuente[inicio_main + len("<main>"):fin_main]

        inicio_newsletter = contenido_main.find('<section class="newsletter">')
        if inicio_newsletter >= 0:
            contenido_main = contenido_main[:inicio_newsletter]

        contenido = f"{breadcrumb}\n{contenido_main.strip()}"

        plantillas.append(
            f'''    <template id="catalogo-{categoria}" data-title="{html.escape(titulo, quote=True)}" data-description="{html.escape(descripcion, quote=True)}">\n{contenido}\n    </template>'''
        )

    return "\n\n".join(plantillas)


def actualizar_catalogo():
    ruta = Path("catalogo.html")
    catalogo = ruta.read_text(encoding="utf-8")
    inicio = "    <!-- CATALOGOS INTERNOS: INICIO -->"
    fin = "    <!-- CATALOGOS INTERNOS: FIN -->"

    if inicio in catalogo and fin in catalogo:
        catalogo = re.sub(
            re.escape(inicio) + r".*?" + re.escape(fin) + r"\n?",
            "",
            catalogo,
            flags=re.S,
        )

    bloque = f"{inicio}\n{crear_plantillas()}\n{fin}\n\n"
    marcador = '    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"'

    if marcador not in catalogo:
        raise RuntimeError("No se encontro el script de Bootstrap en catalogo.html")

    catalogo = catalogo.replace(marcador, bloque + marcador, 1)
    ruta.write_text(catalogo, encoding="utf-8")


def reemplazar_uno(texto, patron, reemplazo, nombre):
    nuevo, cantidad = re.subn(patron, reemplazo, texto, count=1, flags=re.S)
    if cantidad != 1:
        raise RuntimeError(f"No se pudo reemplazar {nombre}")
    return nuevo


def actualizar_javascript():
    ruta = Path("js/misProgramas.js")
    js = ruta.read_text(encoding="utf-8")

    js = reemplazar_uno(
        js,
        r"const fuentesCatalogo = \{.*?\n\};\n\nconst paginaActual",
        "const categoriasCatalogo = new Set(Object.values(rutasCatalogo));\n\nconst paginaActual",
        "fuentesCatalogo",
    )

    menu_activo = r'''function inicializarMenuActivo() {
    const categoria = new URLSearchParams(window.location.search).get("categoria");
    const esCatalogoMaquillaje = categoriasCatalogo.has(categoria);

    document.querySelectorAll(".menu-link").forEach((enlace) => {
        enlace.classList.remove("active");
        enlace.removeAttribute("aria-current");

        const href = enlace.getAttribute("href");
        const seccion = enlace.dataset.seccion;
        const coincideExacto = href === paginaActual;
        const perteneceASeccion =
            seccion === "maquillaje" && esCatalogoMaquillaje
                ? true
                : Boolean(seccion && paginaActual.startsWith(`${seccion}-`));

        if (coincideExacto || perteneceASeccion) {
            enlace.classList.add("active");
            enlace.setAttribute("aria-current", "page");
        }
    });
}'''

    js = reemplazar_uno(
        js,
        r"function inicializarMenuActivo\(\) \{.*?\n\}\n\nfunction inicializarAnimaciones",
        menu_activo + "\n\nfunction inicializarAnimaciones",
        "inicializarMenuActivo",
    )

    cargar_catalogo = r'''function cargarCatalogo() {
    const catalogoMain = document.getElementById("catalogo-main");
    if (!catalogoMain) return false;

    const categoria = new URLSearchParams(window.location.search).get("categoria");
    const plantilla = categoria
        ? document.getElementById(`catalogo-${categoria}`)
        : null;

    if (!plantilla) {
        mostrarErrorCatalogo(catalogoMain, "La categoría solicitada no existe.");
        return false;
    }

    catalogoMain.replaceChildren(plantilla.content.cloneNode(true));

    if (plantilla.dataset.title) {
        document.title = plantilla.dataset.title;
    }

    const metaDescripcion = document.querySelector('meta[name="description"]');
    if (plantilla.dataset.description && metaDescripcion) {
        metaDescripcion.content = plantilla.dataset.description;
    }

    ejecutarSeguro("enlaces del catálogo", reescribirEnlacesCatalogo);
    ejecutarSeguro("filtros de productos", inicializarFiltrosProductos);
    ejecutarSeguro("buscador de productos", inicializarBuscadorProductos);
    ejecutarSeguro("animaciones del catálogo", inicializarAnimaciones);

    return true;
}'''

    js = reemplazar_uno(
        js,
        r"async function cargarCatalogo\(\) \{.*?\n\}\n\nfunction mostrarErrorCatalogo",
        cargar_catalogo + "\n\nfunction mostrarErrorCatalogo",
        "cargarCatalogo",
    )

    filtros = r'''function inicializarFiltrosProductos() {
    const cards = Array.from(document.querySelectorAll(".card-producto"));
    const filtroLateral = document.querySelector(".filtro-lateral");

    if (!cards.length || !filtroLateral) return;
    if (filtroLateral.dataset.filtrosInicializados === "true") return;

    filtroLateral.dataset.filtrosInicializados = "true";

    function obtenerItem(card) {
        return card.closest('[data-producto-item="true"]') ||
            card.closest('[class*="col-"]') ||
            card;
    }

    function obtenerPrecio(card, item) {
        const directo = card.dataset.precio || item.dataset.precio;

        if (directo) {
            return parseFloat(directo.replace(",", ".")) || 0;
        }

        const match = (card.textContent || "").match(
            /S\/\s*([0-9]+(?:[.,][0-9]{1,2})?)/i
        );

        return match ? parseFloat(match[1].replace(",", ".")) : 0;
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
            nombre: normalizar(card.dataset.nombre || item.dataset.nombre || nombreVisible),
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

    const precioMaximo = Math.ceil(
        Math.max(...listaProductos.map((producto) => producto.precio), 0)
    );

    document.querySelectorAll('.filtro-lateral input[type="range"]').forEach((range) => {
        range.min = "0";
        range.max = String(precioMaximo);
        range.value = String(precioMaximo);

        const grupo = range.closest(".filtro-grupo, .filtro-lateral");
        const spans = grupo?.querySelectorAll(".filtro-precio-valores span") || [];

        if (spans[0]) spans[0].textContent = "S/ 0";
        if (spans[1]) spans[1].textContent = `S/ ${precioMaximo}`;
    });

    function campoDesdeGrupo(elemento) {
        const grupo = elemento.closest(".filtro-grupo");

        if (grupo?.dataset.filtro) {
            return normalizar(grupo.dataset.filtro);
        }

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

        return normalizar(elemento.dataset.filtro || elemento.name || titulo);
    }

    function obtenerEtiquetaCheckbox(check) {
        if (check.id) {
            const label = Array.from(document.querySelectorAll("label[for]")).find(
                (elemento) => elemento.getAttribute("for") === check.id
            );

            if (label) return label.textContent || "";
        }

        return check.closest(".form-check")?.querySelector("label")?.textContent || "";
    }

    function leerFiltrosLaterales() {
        const activos = {};

        document.querySelectorAll(".filtro-lateral select").forEach((select) => {
            if (!select.value) return;

            const campo = normalizar(select.dataset.filtro) || campoDesdeGrupo(select);
            const valor = normalizar(select.value);
            const placeholders = [
                "todos", "todas", "tipo de producto", "marca", "buscar marca",
                "precio", "acabado", "tono", "color", "formato", "cobertura"
            ];

            if (!campo || !valor || placeholders.includes(valor)) return;
            activos[campo] = valor;
        });

        document
            .querySelectorAll('.filtro-lateral input[type="checkbox"]:checked')
            .forEach((check) => {
                const campo = campoDesdeGrupo(check);
                const valorOriginal =
                    check.value && check.value !== "on"
                        ? check.value
                        : obtenerEtiquetaCheckbox(check);
                const valor = normalizar(valorOriginal);

                if (!campo || !valor) return;

                if (!activos[campo]) activos[campo] = [];
                activos[campo].push(valor);
            });

        const tonosActivos = Array.from(
            document.querySelectorAll(
                '.filtro-lateral .tono-swatch[aria-pressed="true"]'
            )
        )
            .map((boton) => normalizar(boton.getAttribute("aria-label")))
            .filter(Boolean);

        if (tonosActivos.length) activos.tono = tonosActivos;

        document
            .querySelectorAll('.filtro-lateral input[type="range"]')
            .forEach((range) => {
                const maximo = parseFloat(
                    range.value || range.max || String(precioMaximo)
                );

                if (maximo < precioMaximo) {
                    activos.precioRange = maximo;
                }
            });

        return activos;
    }

    let filtrosAplicados = {};

    function obtenerFiltrosActivos() {
        const activos = { ...filtrosAplicados };
        const selectOrden = document.querySelector(".barra-orden select");
        const buscador = document.getElementById("buscador-principal");
        const busqueda = normalizar(buscador?.value);

        if (selectOrden) activos.orden = normalizar(selectOrden.value);
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
        return typeof dato === "string" && dato
            ? dato.includes(valor) || producto.texto.includes(valor)
            : producto.texto.includes(valor);
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
                (producto) => producto.item.parentElement === contenedor
            );

            if (orden?.includes("menor")) {
                items.sort((a, b) => a.precio - b.precio);
            } else if (orden?.includes("mayor")) {
                items.sort((a, b) => b.precio - a.precio);
            } else {
                items.sort((a, b) => a.indiceOriginal - b.indiceOriginal);
            }

            items.forEach((producto) => contenedor.appendChild(producto.item));
        });
    }

    function actualizarContador(visibles) {
        document.querySelectorAll(".contador-resultados").forEach((contador) => {
            contador.textContent =
                `${visibles} ${visibles === 1 ? "producto encontrado" : "productos encontrados"}`;
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
                    mostrar = producto.precio <= Number(valor);
                } else if (campo === "precio") {
                    mostrar = coincidePrecio(producto, valor);
                } else if (Array.isArray(valor)) {
                    mostrar = valor.some(
                        (opcion) => coincide(producto, campo, opcion)
                    );
                } else {
                    mostrar = coincide(producto, campo, valor);
                }
            });

            producto.item.classList.toggle("producto-oculto", !mostrar);
            if (mostrar) visibles += 1;
        });

        ordenarProductos(activos.orden);
        actualizarContador(visibles);
        actualizarMensajeSinResultados(visibles);
    }

    document.querySelectorAll(".filtro-lateral .tono-swatch").forEach((boton) => {
        boton.setAttribute("aria-pressed", "false");

        boton.addEventListener("click", () => {
            const activo = boton.getAttribute("aria-pressed") !== "true";
            boton.setAttribute("aria-pressed", String(activo));
            boton.classList.toggle("border-dark", activo);
            boton.classList.toggle("border-3", activo);
        });
    });

    document.querySelectorAll(".btn-filtrar").forEach((boton) => {
        boton.addEventListener("click", () => {
            filtrosAplicados = leerFiltrosLaterales();
            aplicarFiltros();
        });
    });

    document.querySelectorAll(".barra-orden select").forEach((select) => {
        select.addEventListener("change", aplicarFiltros);
    });

    const buscador = document.getElementById("buscador-principal");
    if (buscador) buscador.addEventListener("input", aplicarFiltros);

    aplicarFiltros();
}'''

    js = reemplazar_uno(
        js,
        r"function inicializarFiltrosProductos\(\) \{.*?\n\}\n\nfunction inicializarBuscadorProductos",
        filtros + "\n\nfunction inicializarBuscadorProductos",
        "inicializarFiltrosProductos",
    )

    inicio_general = r'''document.addEventListener("DOMContentLoaded", () => {
    ejecutarSeguro("enlaces de catálogo", reescribirEnlacesCatalogo);
    ejecutarSeguro("submenús", inicializarSubmenus);
    ejecutarSeguro("menú activo", inicializarMenuActivo);
    ejecutarSeguro("detalle de producto", inicializarDetalleProducto);
    ejecutarSeguro("animaciones", inicializarAnimaciones);

    if (document.getElementById("catalogo-main")) {
        cargarCatalogo();
    } else {
        ejecutarSeguro("filtros de productos", inicializarFiltrosProductos);
        ejecutarSeguro("buscador de productos", inicializarBuscadorProductos);
    }
});'''

    js = reemplazar_uno(
        js,
        r'document\.addEventListener\("DOMContentLoaded", async \(\) => \{.*?\n\}\);\s*$',
        inicio_general + "\n",
        "DOMContentLoaded",
    )

    ruta.write_text(js, encoding="utf-8")


def limpiar_temporales():
    shutil.rmtree("datos")
    Path(".catalogo-run").unlink(missing_ok=True)
    Path(".github/workflows/integrar-catalogo-master.yml").unlink(missing_ok=True)
    Path(__file__).unlink(missing_ok=True)


actualizar_catalogo()
actualizar_javascript()
limpiar_temporales()
