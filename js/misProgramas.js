/* =============================================================
   FYBEAUTY - JAVASCRIPT GENERAL
   Menú, filtros, producto dinámico y carrito.
   ============================================================= */

const paginaActual = window.location.pathname.split("/").pop() || "index.html";

const productos = [
    {
        "id": 101,
        "nombre": "Máscara Catrice Curl It Volume & Curl 010 Catrice",
        "precio": 39.9,
        "imagen": "img/Mascara/máscara catrice curl it volume & curl masc. 010.webp",
        "descripcion": "Máscara Catrice Curl It Volume & Curl 010 Catrice es un mascara de catrice con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 102,
        "nombre": "Máscara Catrice Glam & Doll Endless Lash Catrice",
        "precio": 42.9,
        "imagen": "img/Mascara/máscara de pestañas catrice glam & doll endless lash mascara.webp",
        "descripcion": "Máscara Catrice Glam & Doll Endless Lash Catrice es un mascara de catrice con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 103,
        "nombre": "Máscara Catrice Perfect Duo XXL Effect 010 Catrice",
        "precio": 44.9,
        "imagen": "img/Mascara/máscara de pestañas catrice perfect duo xxl effect mascara 010.webp",
        "descripcion": "Máscara Catrice Perfect Duo XXL Effect 010 Catrice es un mascara de catrice con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 104,
        "nombre": "Máscara Clinique High Impact Zero Gravity 8ml Clinique",
        "precio": 89.9,
        "imagen": "img/Mascara/máscara de pestañas clinique high impact zero gravity 8ml.webp",
        "descripcion": "Máscara Clinique High Impact Zero Gravity 8ml Clinique es un mascara de fybeauty con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 105,
        "nombre": "Máscara Petrizzio Extreme Extend 12ml Petrizzio",
        "precio": 32.9,
        "imagen": "img/Mascara/máscara de pestañas extreme extend 12 ml petrizzio.webp",
        "descripcion": "Máscara Petrizzio Extreme Extend 12ml Petrizzio es un mascara de fybeauty con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 106,
        "nombre": "Máscara Essence I Love Extreme Volumen 12ml Essence",
        "precio": 24.9,
        "imagen": "img/Mascara/máscara de pestañas i love extreme volumen 12ml essence.webp",
        "descripcion": "Máscara Essence I Love Extreme Volumen 12ml Essence es un mascara de essence con acabado volumen. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 107,
        "nombre": "Máscara Essence Lash Princess Waterproof 12ml Essence",
        "precio": 26.9,
        "imagen": "img/Mascara/máscara de pestañas lash princess waterproof color 12ml essence.webp",
        "descripcion": "Máscara Essence Lash Princess Waterproof 12ml Essence es un mascara de essence con acabado waterproof. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 108,
        "nombre": "Máscara Sheglam All-In-One Volume & Length 2 en 1 Sheglam",
        "precio": 45.9,
        "imagen": "img/Mascara/máscara de pestañas lavable sheglam all-in-one volume & length mascara 2 in 1 wsh.webp",
        "descripcion": "Máscara Sheglam All-In-One Volume & Length 2 en 1 Sheglam es un mascara de fybeauty con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 109,
        "nombre": "Máscara Maybelline Lash Sensational Firework Maybelline",
        "precio": 39.9,
        "imagen": "img/Mascara/máscara de pestañas maybelline lash sensational firework wtp.webp",
        "descripcion": "Máscara Maybelline Lash Sensational Firework Maybelline es un mascara de maybelline con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 110,
        "nombre": "Máscara Maybelline Sky High Cosmic Black Maybelline",
        "precio": 41.9,
        "imagen": "img/Mascara/máscara de pestañas maybelline sky high cosmic black lavable.webp",
        "descripcion": "Máscara Maybelline Sky High Cosmic Black Maybelline es un mascara de maybelline con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 111,
        "nombre": "Máscara Essence Call Me Queen Resistente al Agua 11.5ml Essence",
        "precio": 27.9,
        "imagen": "img/Mascara/máscara efecto pestañas artificiales resistente al agua essence call me queen 11.5ml.webp",
        "descripcion": "Máscara Essence Call Me Queen Resistente al Agua 11.5ml Essence es un mascara de essence con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 112,
        "nombre": "Máscara Petrizzio Volume & Twist 9ml Petrizzio",
        "precio": 34.9,
        "imagen": "img/Mascara/PETRIZZIO Máscara de Pestañas Volume & Twist 9 ml.webp",
        "descripcion": "Máscara Petrizzio Volume & Twist 9ml Petrizzio es un mascara de fybeauty con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-mascara.html"
        }
    },
    {
        "id": 201,
        "nombre": "Paleta Nude Classic Nude",
        "precio": 53.0,
        "imagen": "img/Sombras/paleta de sombras de ojos foreplay x 9 colores l.a girl.webp",
        "descripcion": "Paleta Nude Classic Nude es un sombra de classic nude con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-sombras.html"
        }
    },
    {
        "id": 202,
        "nombre": "Paleta Warm Sunset Vives",
        "precio": 56.0,
        "imagen": "img/Sombras/paleta de sombras de ojos playmate x 9 colores l.a girl.webp",
        "descripcion": "Paleta Warm Sunset Vives es un sombra de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-sombras.html"
        }
    },
    {
        "id": 203,
        "nombre": "Paleta Ahumada Sunset Vives",
        "precio": 96.0,
        "imagen": "img/Sombras/paleta de sombras de ojos playtime x 9 colores l.a girl.webp",
        "descripcion": "Paleta Ahumada Sunset Vives es un sombra de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-sombras.html"
        }
    },
    {
        "id": 204,
        "nombre": "Paleta Colorida Bright Palette",
        "precio": 46.0,
        "imagen": "img/Sombras/paleta de sombras de ojos pro artistry l.a girl.webp",
        "descripcion": "Paleta Colorida Bright Palette es un sombra de bright palette con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-sombras.html"
        }
    },
    {
        "id": 205,
        "nombre": "Sombra Individual Sunset Vives",
        "precio": 70.0,
        "imagen": "img/Sombras/paleta de sombras mini eye palette nude petrizzio.webp",
        "descripcion": "Sombra Individual Sunset Vives es un sombra de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-sombras.html"
        }
    },
    {
        "id": 206,
        "nombre": "Sombra en Crema Sunset Vives",
        "precio": 56.0,
        "imagen": "img/Sombras/paleta de sombras x9 grey 4.5 gr petrizzio.webp",
        "descripcion": "Sombra en Crema Sunset Vives es un sombra de sunset vives con acabado crema. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-sombras.html"
        }
    },
    {
        "id": 207,
        "nombre": "Sombra Líquida Sunset Vives",
        "precio": 76.0,
        "imagen": "img/Sombras/sombras catrice the electric rose eyeshadow palette 76g.webp",
        "descripcion": "Sombra Líquida Sunset Vives es un sombra de sunset vives con acabado liquida. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-sombras.html"
        }
    },
    {
        "id": 208,
        "nombre": "Paleta Warm Sunset Vives",
        "precio": 86.0,
        "imagen": "img/Sombras/sombras catrice the pure nude eyeshadow palette 76g.webp",
        "descripcion": "Paleta Warm Sunset Vives es un sombra de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-sombras.html"
        }
    },
    {
        "id": 301,
        "nombre": "Delineador Líquido Negro Sunset Vives",
        "precio": 34.9,
        "imagen": "img/Delineador/delineador de ojos a prueba de agua line & define black sheglam.webp",
        "descripcion": "Delineador Líquido Negro Sunset Vives es un delineador de sunset vives con acabado liquido. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-delineador.html"
        }
    },
    {
        "id": 302,
        "nombre": "Delineador en Gel Classic Nude",
        "precio": 34.9,
        "imagen": "img/Delineador/delineador de ojos glitter silver petrizzio.webp",
        "descripcion": "Delineador en Gel Classic Nude es un delineador de classic nude con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-delineador.html"
        }
    },
    {
        "id": 303,
        "nombre": "Punta de Fieltro Precisión Bright Palette",
        "precio": 69.9,
        "imagen": "img/Delineador/delineador de ojos kajal negro 2.48 gr petrizzio.webp",
        "descripcion": "Punta de Fieltro Precisión Bright Palette es un delineador de bright palette con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-delineador.html"
        }
    },
    {
        "id": 304,
        "nombre": "Lápiz Delineador Azul Sunset Vives",
        "precio": 79.9,
        "imagen": "img/Delineador/delineador de ojos longlasting azul larga duración 0.28gr essence.webp",
        "descripcion": "Lápiz Delineador Azul Sunset Vives es un delineador de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-delineador.html"
        }
    },
    {
        "id": 305,
        "nombre": "Delineador Líquido Marrón Classic Nude",
        "precio": 45.9,
        "imagen": "img/Delineador/delineador de ojos longlasting negro larga duración 0.28gr essence.webp",
        "descripcion": "Delineador Líquido Marrón Classic Nude es un delineador de classic nude con acabado liquido. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-delineador.html"
        }
    },
    {
        "id": 306,
        "nombre": "Sello Delineado Winged Bright Palette",
        "precio": 69.9,
        "imagen": "img/Delineador/delineador en gel negro 3 gr petrizzio.webp",
        "descripcion": "Sello Delineado Winged Bright Palette es un delineador de bright palette con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-delineador.html"
        }
    },
    {
        "id": 307,
        "nombre": "Larga Duración 24h Sunset Vives",
        "precio": 69.9,
        "imagen": "img/Delineador/delineador líquido perfect line 3 ml petrizzio.webp",
        "descripcion": "Larga Duración 24h Sunset Vives es un delineador de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-delineador.html"
        }
    },
    {
        "id": 308,
        "nombre": "Resistente al Agua Classic Nude",
        "precio": 99.9,
        "imagen": "img/Delineador/delineador líquido perfect line waterproof 3 ml petrizzio.webp",
        "descripcion": "Resistente al Agua Classic Nude es un delineador de classic nude con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-delineador.html"
        }
    },
    {
        "id": 401,
        "nombre": "Gel de Cejas Transparente Sunset Vives",
        "precio": 34.9,
        "imagen": "img/Cejas/fijador de cejas catrice brow fix soap stick 010.webp",
        "descripcion": "Gel de Cejas Transparente Sunset Vives es un cejas de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-cejas.html"
        }
    },
    {
        "id": 402,
        "nombre": "Gel de Cejas Con Color Classic Nude",
        "precio": 34.9,
        "imagen": "img/Cejas/delineador de cejas catrice all in one brow perfector 010.webp",
        "descripcion": "Gel de Cejas Con Color Classic Nude es un cejas de classic nude con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-cejas.html"
        }
    },
    {
        "id": 403,
        "nombre": "Polvo para Cejas Bright Palette",
        "precio": 69.9,
        "imagen": "img/Cejas/delineador para cejas y aplicador 1 gr petrizzio.webp",
        "descripcion": "Polvo para Cejas Bright Palette es un cejas de bright palette con acabado polvo. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-cejas.html"
        }
    },
    {
        "id": 404,
        "nombre": "Lápiz Doble Punta Sunset Vives",
        "precio": 79.9,
        "imagen": "img/Cejas/fijador de cejas catrice brow fix soap stick 010.webp",
        "descripcion": "Lápiz Doble Punta Sunset Vives es un cejas de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-cejas.html"
        }
    },
    {
        "id": 405,
        "nombre": "Pomada para Cejas Classic Nude",
        "precio": 45.9,
        "imagen": "img/Cejas/delineador de cejas catrice all in one brow perfector 010.webp",
        "descripcion": "Pomada para Cejas Classic Nude es un cejas de classic nude con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-cejas.html"
        }
    },
    {
        "id": 406,
        "nombre": "Kit de Diseño de Cejas Bright Palette",
        "precio": 69.9,
        "imagen": "img/Cejas/delineador para cejas y aplicador 1 gr petrizzio.webp",
        "descripcion": "Kit de Diseño de Cejas Bright Palette es un cejas de bright palette con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-cejas.html"
        }
    },
    {
        "id": 407,
        "nombre": "Máscara Fijadora Sunset Vives",
        "precio": 69.9,
        "imagen": "img/Cejas/fijador de cejas catrice brow fix soap stick 010.webp",
        "descripcion": "Máscara Fijadora Sunset Vives es un mascara de sunset vives con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-cejas.html"
        }
    },
    {
        "id": 408,
        "nombre": "Set de Plantillas Classic Nude",
        "precio": 99.9,
        "imagen": "img/Cejas/delineador de cejas catrice all in one brow perfector 010.webp",
        "descripcion": "Set de Plantillas Classic Nude es un cejas de classic nude con acabado natural. Ideal para completar tu rutina de ojos con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Ojos",
            "enlace": "maquillaje-ojos-cejas.html"
        }
    },
    {
        "id": 1001,
        "nombre": "The Super Peptide Glossy The Ordinary",
        "precio": 34.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "The Super Peptide Glossy The Ordinary es un balsamo de fybeauty con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1002,
        "nombre": "TheBalm Little Red TheBalm",
        "precio": 34.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "TheBalm Little Red TheBalm es un balsamo de fybeauty con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1003,
        "nombre": "Supreme Platinium Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Supreme Platinium Beauty Creations es un balsamo de beauty creations con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1004,
        "nombre": "Tint One In A Melon Beauty Beauty Creations",
        "precio": 79.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Tint One In A Melon Beauty Beauty Creations es un balsamo de beauty creations con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1005,
        "nombre": "Bálsamo Hidratante Manteca de Karité Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Bálsamo Hidratante Manteca de Karité Maybelline es un balsamo de maybelline con acabado hidratante. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1006,
        "nombre": "Bálsamo Reparador Nocturno L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Bálsamo Reparador Nocturno L.A. Girl es un balsamo de l.a. girl con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1007,
        "nombre": "Bálsamo con Color Rosa Catrice",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Bálsamo con Color Rosa Catrice es un balsamo de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1008,
        "nombre": "Bálsamo Nutritivo Coco Beauty Creations",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Bálsamo Nutritivo Coco Beauty Creations es un balsamo de beauty creations con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1009,
        "nombre": "Bálsamo Protector SPF15 Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Bálsamo Protector SPF15 Maybelline es un balsamo de maybelline con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1010,
        "nombre": "Bálsamo Hidratante Vainilla L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Bálsamo Hidratante Vainilla L.A. Girl es un balsamo de l.a. girl con acabado hidratante. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1011,
        "nombre": "Bálsamo con Color Durazno Catrice",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Bálsamo con Color Durazno Catrice es un balsamo de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1012,
        "nombre": "Bálsamo Nutritivo Almendras Beauty Creations",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Bálsamo Nutritivo Almendras Beauty Creations es un balsamo de beauty creations con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-balsamos.html"
        }
    },
    {
        "id": 1013,
        "nombre": "Delineador Labial Mate Nude Maybelline",
        "precio": 34.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Delineador Labial Mate Nude Maybelline es un delineador de maybelline con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1014,
        "nombre": "Delineador Waterproof Rojo L.A. Girl",
        "precio": 34.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Delineador Waterproof Rojo L.A. Girl es un delineador de l.a. girl con acabado waterproof. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1015,
        "nombre": "Delineador Automático Vino Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Delineador Automático Vino Beauty Creations es un delineador de beauty creations con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1016,
        "nombre": "Delineador de Precisión Rosa Catrice",
        "precio": 79.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Delineador de Precisión Rosa Catrice es un delineador de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1017,
        "nombre": "Delineador Labial Mate Coral Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Delineador Labial Mate Coral Maybelline es un delineador de maybelline con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1018,
        "nombre": "Delineador Waterproof Ciruela L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Delineador Waterproof Ciruela L.A. Girl es un delineador de l.a. girl con acabado waterproof. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1019,
        "nombre": "Delineador Automático Terracota Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Delineador Automático Terracota Beauty Creations es un delineador de beauty creations con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1020,
        "nombre": "Delineador de Precisión Berry Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Delineador de Precisión Berry Catrice es un delineador de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1021,
        "nombre": "Delineador Labial Mate Durazno Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Delineador Labial Mate Durazno Maybelline es un delineador de maybelline con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1022,
        "nombre": "Delineador Waterproof Marrón L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Delineador Waterproof Marrón L.A. Girl es un delineador de l.a. girl con acabado waterproof. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1023,
        "nombre": "Delineador Automático Fucsia Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Delineador Automático Fucsia Beauty Creations es un delineador de beauty creations con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1024,
        "nombre": "Delineador de Precisión Salmón Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Delineador de Precisión Salmón Catrice es un delineador de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-delineadores.html"
        }
    },
    {
        "id": 1025,
        "nombre": "Gloss Transparente Brillo Cristal Maybelline",
        "precio": 34.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Gloss Transparente Brillo Cristal Maybelline es un gloss de maybelline con acabado brillo con brillo. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1026,
        "nombre": "Gloss Volumen Labial L.A. Girl",
        "precio": 34.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Gloss Volumen Labial L.A. Girl es un gloss de l.a. girl con acabado volumen. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1027,
        "nombre": "Gloss Hidratante Vitamina E Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Gloss Hidratante Vitamina E Beauty Creations es un gloss de beauty creations con acabado hidratante. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1028,
        "nombre": "Gloss con Color Rosa Catrice",
        "precio": 79.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Gloss con Color Rosa Catrice es un gloss de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1029,
        "nombre": "Gloss Efecto Plumping Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Gloss Efecto Plumping Maybelline es un gloss de maybelline con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1030,
        "nombre": "Gloss Brillo Diamante L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Gloss Brillo Diamante L.A. Girl es un gloss de l.a. girl con acabado brillo con brillo. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1031,
        "nombre": "Gloss Hidratante Coral Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Gloss Hidratante Coral Beauty Creations es un gloss de beauty creations con acabado hidratante. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1032,
        "nombre": "Gloss con Color Durazno Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Gloss con Color Durazno Catrice es un gloss de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1033,
        "nombre": "Gloss Transparente Natural Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Gloss Transparente Natural Maybelline es un gloss de maybelline con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1034,
        "nombre": "Gloss Volumen Extremo L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Gloss Volumen Extremo L.A. Girl es un gloss de l.a. girl con acabado volumen. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1035,
        "nombre": "Gloss Hidratante Frutal Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Gloss Hidratante Frutal Beauty Creations es un gloss de beauty creations con acabado hidratante. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1036,
        "nombre": "Gloss con Color Berry Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Gloss con Color Berry Catrice es un gloss de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-gloss.html"
        }
    },
    {
        "id": 1037,
        "nombre": "Labial Mate Rojo Pasión Maybelline",
        "precio": 34.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Labial Mate Rojo Pasión Maybelline es un labial de maybelline con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1038,
        "nombre": "Labial Cremoso Nude L.A. Girl",
        "precio": 34.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Labial Cremoso Nude L.A. Girl es un labial de l.a. girl con acabado cremoso. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1039,
        "nombre": "Labial Líquido Mate Berry Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Labial Líquido Mate Berry Beauty Creations es un labial de beauty creations con acabado mate liquido. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1040,
        "nombre": "Labial Satinado Coral Catrice",
        "precio": 79.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Labial Satinado Coral Catrice es un labial de catrice con acabado satinado. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1041,
        "nombre": "Labial Mate Ciruela Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Labial Mate Ciruela Maybelline es un labial de maybelline con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1042,
        "nombre": "Labial Cremoso Terracota L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Labial Cremoso Terracota L.A. Girl es un labial de l.a. girl con acabado cremoso. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1043,
        "nombre": "Labial Líquido Mate Fucsia Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Labial Líquido Mate Fucsia Beauty Creations es un labial de beauty creations con acabado mate liquido. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1044,
        "nombre": "Labial Satinado Durazno Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Labial Satinado Durazno Catrice es un labial de catrice con acabado satinado. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1045,
        "nombre": "Labial Mate Vino Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Labial Mate Vino Maybelline es un labial de maybelline con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1046,
        "nombre": "Labial Cremoso Rosa Pastel L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Labial Cremoso Rosa Pastel L.A. Girl es un labial de l.a. girl con acabado cremoso. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1047,
        "nombre": "Labial Líquido Mate Chocolate Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Labial Líquido Mate Chocolate Beauty Creations es un labial de beauty creations con acabado mate liquido. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1048,
        "nombre": "Labial Satinado Salmón Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Labial Satinado Salmón Catrice es un labial de catrice con acabado satinado. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-labiales.html"
        }
    },
    {
        "id": 1049,
        "nombre": "Tinta Labial Larga Duración Rojo Maybelline",
        "precio": 34.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Tinta Labial Larga Duración Rojo Maybelline es un tinta de maybelline con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1050,
        "nombre": "Tinta Labial Mate Berry L.A. Girl",
        "precio": 34.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Tinta Labial Mate Berry L.A. Girl es un tinta de l.a. girl con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1051,
        "nombre": "Tinta Labial Waterproof Coral Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Tinta Labial Waterproof Coral Beauty Creations es un tinta de beauty creations con acabado waterproof. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1052,
        "nombre": "Tinta Labial Efecto Velvet Vino Catrice",
        "precio": 79.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Tinta Labial Efecto Velvet Vino Catrice es un tinta de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1053,
        "nombre": "Tinta Labial Larga Duración Rosa Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Tinta Labial Larga Duración Rosa Maybelline es un tinta de maybelline con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1054,
        "nombre": "Tinta Labial Mate Ciruela L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Tinta Labial Mate Ciruela L.A. Girl es un tinta de l.a. girl con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1055,
        "nombre": "Tinta Labial Waterproof Fucsia Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Tinta Labial Waterproof Fucsia Beauty Creations es un tinta de beauty creations con acabado waterproof. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1056,
        "nombre": "Tinta Labial Efecto Velvet Terracota Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Tinta Labial Efecto Velvet Terracota Catrice es un tinta de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1057,
        "nombre": "Tinta Labial Larga Duración Durazno Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Tinta Labial Larga Duración Durazno Maybelline es un tinta de maybelline con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1058,
        "nombre": "Tinta Labial Mate Salmón L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Tinta Labial Mate Salmón L.A. Girl es un tinta de l.a. girl con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1059,
        "nombre": "Tinta Labial Waterproof Chocolate Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Tinta Labial Waterproof Chocolate Beauty Creations es un tinta de beauty creations con acabado waterproof. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1060,
        "nombre": "Tinta Labial Efecto Velvet Nude Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Tinta Labial Efecto Velvet Nude Catrice es un tinta de catrice con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios-tintas.html"
        }
    },
    {
        "id": 1061,
        "nombre": "Labial Mate",
        "precio": 39.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Labial Mate es un labial de fybeauty con acabado mate. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios.html"
        }
    },
    {
        "id": 1062,
        "nombre": "Labial Cremoso",
        "precio": 42.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Labial Cremoso es un labial de fybeauty con acabado cremoso. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios.html"
        }
    },
    {
        "id": 1063,
        "nombre": "Labial Líquido Mate",
        "precio": 59.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Labial Líquido Mate es un labial de fybeauty con acabado mate liquido. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios.html"
        }
    },
    {
        "id": 1064,
        "nombre": "Labial Satinado",
        "precio": 39.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Labial Satinado es un labial de fybeauty con acabado satinado. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios.html"
        }
    },
    {
        "id": 1065,
        "nombre": "Gloss Transparente",
        "precio": 29.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Gloss Transparente es un gloss de fybeauty con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios.html"
        }
    },
    {
        "id": 1066,
        "nombre": "Gloss Volumen",
        "precio": 29.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Gloss Volumen es un gloss de fybeauty con acabado volumen. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios.html"
        }
    },
    {
        "id": 1067,
        "nombre": "Gloss Hidratante",
        "precio": 32.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Gloss Hidratante es un gloss de fybeauty con acabado hidratante. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios.html"
        }
    },
    {
        "id": 1068,
        "nombre": "Gloss con Color",
        "precio": 52.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Gloss con Color es un gloss de fybeauty con acabado natural. Ideal para completar tu rutina de labios con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Labios",
            "enlace": "maquillaje-labios.html"
        }
    },
    {
        "id": 1069,
        "nombre": "Crema Hidratante Neutrogena Hydro Boost Neutrogena",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Crema Hidratante Neutrogena Hydro Boost Neutrogena es un base de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1070,
        "nombre": "Gel Crema Hidratante Pond’s Pond's",
        "precio": 34.9,
        "imagen": "img/Bases/base maybelline fit me matte pore fdn 125 nude beige.webp",
        "descripcion": "Gel Crema Hidratante Pond’s Pond's es un base de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1071,
        "nombre": "Hidratante Facial CeraVe CeraVe",
        "precio": 69.9,
        "imagen": "img/Bases/Base Hidratante Skinfinite Golden Sheglam.webp",
        "descripcion": "Hidratante Facial CeraVe CeraVe es un base de fybeauty con acabado hidratante. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1072,
        "nombre": "Water Cream Toniden Toniden",
        "precio": 79.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Water Cream Toniden Toniden es un base de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1073,
        "nombre": "Crema Hidratante The Ordinary The Ordinary",
        "precio": 45.9,
        "imagen": "img/Bases/base maybelline fit me matte pore fdn 125 nude beige.webp",
        "descripcion": "Crema Hidratante The Ordinary The Ordinary es un base de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1074,
        "nombre": "Sérum Hydrating Vichy Mineral 89 Vichy",
        "precio": 69.9,
        "imagen": "img/Bases/Base Hidratante Skinfinite Golden Sheglam.webp",
        "descripcion": "Sérum Hydrating Vichy Mineral 89 Vichy es un base de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1075,
        "nombre": "Crema Hidratante Embryolisse Embryolisse",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Crema Hidratante Embryolisse Embryolisse es un base de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1076,
        "nombre": "Loción Hidratante Curel Curel",
        "precio": 99.9,
        "imagen": "img/Bases/base maybelline fit me matte pore fdn 125 nude beige.webp",
        "descripcion": "Loción Hidratante Curel Curel es un base de fybeauty con acabado hidratante. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1077,
        "nombre": "Crema Hidratante The Ordinary Neutrogena",
        "precio": 45.9,
        "imagen": "img/Bases/Base Hidratante Skinfinite Golden Sheglam.webp",
        "descripcion": "Crema Hidratante The Ordinary Neutrogena es un base de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1078,
        "nombre": "Sérum Hydrating Vichy Mineral 89 Pond's",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Sérum Hydrating Vichy Mineral 89 Pond's es un base de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1079,
        "nombre": "Crema Hidratante Embryolisse CeraVe",
        "precio": 69.9,
        "imagen": "img/Bases/base maybelline fit me matte pore fdn 125 nude beige.webp",
        "descripcion": "Crema Hidratante Embryolisse CeraVe es un base de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1080,
        "nombre": "Loción Hidratante Curel Toniden",
        "precio": 99.9,
        "imagen": "img/Bases/Base Hidratante Skinfinite Golden Sheglam.webp",
        "descripcion": "Loción Hidratante Curel Toniden es un base de fybeauty con acabado hidratante. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-base.html"
        }
    },
    {
        "id": 1081,
        "nombre": "Crema Hidratante Neutrogena Hydro Boost Neutrogena",
        "precio": 34.9,
        "imagen": "img/Contorno/Corrector Under Eye Brightener Liquid 020 Catrice.webp",
        "descripcion": "Crema Hidratante Neutrogena Hydro Boost Neutrogena es un contorno de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-contorno.html"
        }
    },
    {
        "id": 1082,
        "nombre": "Gel Crema Hidratante Pond’s Pond's",
        "precio": 34.9,
        "imagen": "img/Contorno/Contorno Líquido Flawless Stay Sculpt Up Brown Sugar Beauty Creations.webp",
        "descripcion": "Gel Crema Hidratante Pond’s Pond's es un contorno de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-contorno.html"
        }
    },
    {
        "id": 1083,
        "nombre": "Hidratante Facial CeraVe CeraVe",
        "precio": 69.9,
        "imagen": "img/Contorno/Contorno En Barra Chubby Stick So Sunkissed Clinique.webp",
        "descripcion": "Hidratante Facial CeraVe CeraVe es un contorno de fybeauty con acabado hidratante. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-contorno.html"
        }
    },
    {
        "id": 1084,
        "nombre": "Water Cream Toniden Toniden",
        "precio": 79.9,
        "imagen": "img/Contorno/Corrector Under Eye Brightener Liquid 020 Catrice.webp",
        "descripcion": "Water Cream Toniden Toniden es un contorno de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-contorno.html"
        }
    },
    {
        "id": 1085,
        "nombre": "Crema Hidratante The Ordinary The Ordinary",
        "precio": 45.9,
        "imagen": "img/Contorno/Contorno Líquido Flawless Stay Sculpt Up Brown Sugar Beauty Creations.webp",
        "descripcion": "Crema Hidratante The Ordinary The Ordinary es un contorno de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-contorno.html"
        }
    },
    {
        "id": 1086,
        "nombre": "Sérum Hydrating Vichy Mineral 89 Vichy",
        "precio": 69.9,
        "imagen": "img/Contorno/Contorno En Barra Chubby Stick So Sunkissed Clinique.webp",
        "descripcion": "Sérum Hydrating Vichy Mineral 89 Vichy es un contorno de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-contorno.html"
        }
    },
    {
        "id": 1087,
        "nombre": "Crema Hidratante Embryolisse Embryolisse",
        "precio": 69.9,
        "imagen": "img/Contorno/Corrector Under Eye Brightener Liquid 020 Catrice.webp",
        "descripcion": "Crema Hidratante Embryolisse Embryolisse es un contorno de fybeauty con acabado hidratante crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-contorno.html"
        }
    },
    {
        "id": 1088,
        "nombre": "Loción Hidratante Curel Curel",
        "precio": 99.9,
        "imagen": "img/Contorno/Contorno Líquido Flawless Stay Sculpt Up Brown Sugar Beauty Creations.webp",
        "descripcion": "Loción Hidratante Curel Curel es un contorno de fybeauty con acabado hidratante. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-contorno.html"
        }
    },
    {
        "id": 1089,
        "nombre": "Corrector Líquido Fit Me Maybelline Maybelline",
        "precio": 34.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Corrector Líquido Fit Me Maybelline Maybelline es un corrector de maybelline con acabado liquido. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1090,
        "nombre": "Pro Filt’r Instant Retouch Concealer Fenty Beauty",
        "precio": 34.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Pro Filt’r Instant Retouch Concealer Fenty Beauty es un corrector de fenty beauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1091,
        "nombre": "ColorStay 5-In-1 Concealer Revlon",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector catrice magic shaper stick 060 - liquidación.webp",
        "descripcion": "ColorStay 5-In-1 Concealer Revlon es un corrector de revlon con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1092,
        "nombre": "Shape Tape Contour Concealer Tarte",
        "precio": 79.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Shape Tape Contour Concealer Tarte es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1093,
        "nombre": "HD Pro Conceal High-Definition e.l.f.",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "HD Pro Conceal High-Definition e.l.f. es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1094,
        "nombre": "HD Photogenic Concealer Wand e.l.f.",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector catrice magic shaper stick 060 - liquidación.webp",
        "descripcion": "HD Photogenic Concealer Wand e.l.f. es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1095,
        "nombre": "Instant Age Rewind Eraser Maybelline",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Instant Age Rewind Eraser Maybelline es un corrector de maybelline con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1096,
        "nombre": "Radiant Creamy Concealer NARS",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Radiant Creamy Concealer NARS es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1097,
        "nombre": "16HR Camo Concealer Matte e.l.f.",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector catrice magic shaper stick 060 - liquidación.webp",
        "descripcion": "16HR Camo Concealer Matte e.l.f. es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1098,
        "nombre": "Born This Way Super Coverage Too Faced",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Born This Way Super Coverage Too Faced es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1099,
        "nombre": "Studio Fix 24-Hour Smooth Wear MAC",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Studio Fix 24-Hour Smooth Wear MAC es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1100,
        "nombre": "Liquid Touch Brightening Concealer Kosas",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector catrice magic shaper stick 060 - liquidación.webp",
        "descripcion": "Liquid Touch Brightening Concealer Kosas es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-corrector.html"
        }
    },
    {
        "id": 1101,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 34.9,
        "imagen": "img/Iluminador/lápiz iluminador sheglam fairy wand precision highlighter pencil ethereal.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1102,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 34.9,
        "imagen": "img/Iluminador/iluminador petrizzio maxi highlighter pinktastic song.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1103,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 69.9,
        "imagen": "img/Iluminador/iluminador baby got glow highlighter stick 10 essence.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1104,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 79.9,
        "imagen": "img/Iluminador/lápiz iluminador sheglam fairy wand precision highlighter pencil ethereal.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1105,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 45.9,
        "imagen": "img/Iluminador/iluminador petrizzio maxi highlighter pinktastic song.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1106,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 69.9,
        "imagen": "img/Iluminador/iluminador baby got glow highlighter stick 10 essence.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1107,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 69.9,
        "imagen": "img/Iluminador/lápiz iluminador sheglam fairy wand precision highlighter pencil ethereal.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1108,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 99.9,
        "imagen": "img/Iluminador/iluminador petrizzio maxi highlighter pinktastic song.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1109,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 45.9,
        "imagen": "img/Iluminador/iluminador baby got glow highlighter stick 10 essence.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1110,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 69.9,
        "imagen": "img/Iluminador/lápiz iluminador sheglam fairy wand precision highlighter pencil ethereal.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1111,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 69.9,
        "imagen": "img/Iluminador/iluminador petrizzio maxi highlighter pinktastic song.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1112,
        "nombre": "Becca Shimmering Skin Perfector Becca",
        "precio": 99.9,
        "imagen": "img/Iluminador/iluminador baby got glow highlighter stick 10 essence.webp",
        "descripcion": "Becca Shimmering Skin Perfector Becca es un iluminador de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-iluminador.html"
        }
    },
    {
        "id": 1113,
        "nombre": "Polvo Compacto Fit Me Maybelline Maybelline",
        "precio": 34.9,
        "imagen": "img/Polvo/polvos sueltos vanilla anastasia beverly hills.webp",
        "descripcion": "Polvo Compacto Fit Me Maybelline Maybelline es un polvo de maybelline con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1114,
        "nombre": "Polvo Suelto Translúcido RCMA RCMA",
        "precio": 34.9,
        "imagen": "img/Polvo/dúo de polvos sueltos y compactos insta-ready face & under bubblegum sheglam.webp",
        "descripcion": "Polvo Suelto Translúcido RCMA RCMA es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1115,
        "nombre": "Setting Powder Laura Mercier Laura Mercier",
        "precio": 69.9,
        "imagen": "img/Polvo/polvo pro setting powder banana yellow larga duración 5gr l.a girl.webp",
        "descripcion": "Setting Powder Laura Mercier Laura Mercier es un polvo de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1116,
        "nombre": "Polvo Compacto HD Studio Fix MAC",
        "precio": 79.9,
        "imagen": "img/Polvo/polvos sueltos vanilla anastasia beverly hills.webp",
        "descripcion": "Polvo Compacto HD Studio Fix MAC es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1117,
        "nombre": "Polvo Matificante Neutrogena Neutrogena",
        "precio": 45.9,
        "imagen": "img/Polvo/dúo de polvos sueltos y compactos insta-ready face & under bubblegum sheglam.webp",
        "descripcion": "Polvo Matificante Neutrogena Neutrogena es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1118,
        "nombre": "Polvo Bronceador Physicians Formula Physicians Formula",
        "precio": 69.9,
        "imagen": "img/Polvo/polvo pro setting powder banana yellow larga duración 5gr l.a girl.webp",
        "descripcion": "Polvo Bronceador Physicians Formula Physicians Formula es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1119,
        "nombre": "Polvo Compacto Double Wear Estée Lauder Estée Lauder",
        "precio": 69.9,
        "imagen": "img/Polvo/polvos sueltos vanilla anastasia beverly hills.webp",
        "descripcion": "Polvo Compacto Double Wear Estée Lauder Estée Lauder es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1120,
        "nombre": "Polvo Suelto Banana Ben Nye Ben Nye",
        "precio": 99.9,
        "imagen": "img/Polvo/dúo de polvos sueltos y compactos insta-ready face & under bubblegum sheglam.webp",
        "descripcion": "Polvo Suelto Banana Ben Nye Ben Nye es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1121,
        "nombre": "Polvo Matificante Neutrogena Neutrogena",
        "precio": 45.9,
        "imagen": "img/Polvo/polvo pro setting powder banana yellow larga duración 5gr l.a girl.webp",
        "descripcion": "Polvo Matificante Neutrogena Neutrogena es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1122,
        "nombre": "Polvo Bronceador Physicians Formula Physicians Formula",
        "precio": 69.9,
        "imagen": "img/Polvo/polvos sueltos vanilla anastasia beverly hills.webp",
        "descripcion": "Polvo Bronceador Physicians Formula Physicians Formula es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1123,
        "nombre": "Polvo Compacto Double Wear Estée Lauder Estée Lauder",
        "precio": 69.9,
        "imagen": "img/Polvo/dúo de polvos sueltos y compactos insta-ready face & under bubblegum sheglam.webp",
        "descripcion": "Polvo Compacto Double Wear Estée Lauder Estée Lauder es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1124,
        "nombre": "Polvo Suelto Vanilla Anastasia Beverly Hills Anastasia Beverly Hills",
        "precio": 99.9,
        "imagen": "img/Polvo/polvo pro setting powder banana yellow larga duración 5gr l.a girl.webp",
        "descripcion": "Polvo Suelto Vanilla Anastasia Beverly Hills Anastasia Beverly Hills es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-polvo.html"
        }
    },
    {
        "id": 1125,
        "nombre": "Rubor en Gel Rosa Maybelline",
        "precio": 34.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Rubor en Gel Rosa Maybelline es un rubor de maybelline con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1126,
        "nombre": "Rubor en Polvo Durazno L.A. Girl",
        "precio": 34.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Rubor en Polvo Durazno L.A. Girl es un polvo de l.a. girl con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1127,
        "nombre": "Rubor Líquido Coral Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Rubor Líquido Coral Beauty Creations es un rubor de beauty creations con acabado liquido. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1128,
        "nombre": "Rubor en Crema Vino Catrice",
        "precio": 79.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Rubor en Crema Vino Catrice es un rubor de catrice con acabado crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1129,
        "nombre": "Rubor en Bálsamo Melocotón Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Rubor en Bálsamo Melocotón Maybelline es un balsamo de maybelline con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1130,
        "nombre": "Rubor en Espuma Coral L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Rubor en Espuma Coral L.A. Girl es un rubor de l.a. girl con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1131,
        "nombre": "Rubor en Aceite Rosa Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Rubor en Aceite Rosa Beauty Creations es un rubor de beauty creations con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1132,
        "nombre": "Paleta de Rubores Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Paleta de Rubores Catrice es un sombra de catrice con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1133,
        "nombre": "Rubor en Polvo Coral Maybelline",
        "precio": 45.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Rubor en Polvo Coral Maybelline es un polvo de maybelline con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1134,
        "nombre": "Rubor en Crema Rosa L.A. Girl",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Rubor en Crema Rosa L.A. Girl es un rubor de l.a. girl con acabado crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1135,
        "nombre": "Rubor Líquido Durazno Beauty Creations",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Rubor Líquido Durazno Beauty Creations es un rubor de beauty creations con acabado liquido. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1136,
        "nombre": "Rubor en Bálsamo Vino Catrice",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Rubor en Bálsamo Vino Catrice es un balsamo de catrice con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro-rubor.html"
        }
    },
    {
        "id": 1137,
        "nombre": "Base Líquida",
        "precio": 89.0,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Base Líquida es un base de fybeauty con acabado liquida. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro.html"
        }
    },
    {
        "id": 1138,
        "nombre": "Base Hidratante",
        "precio": 89.0,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Base Hidratante es un base de fybeauty con acabado hidratante. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro.html"
        }
    },
    {
        "id": 1139,
        "nombre": "Base en Polvo",
        "precio": 89.0,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Base en Polvo es un base de fybeauty con acabado polvo. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro.html"
        }
    },
    {
        "id": 1140,
        "nombre": "Base Serum",
        "precio": 89.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Base Serum es un base de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro.html"
        }
    },
    {
        "id": 1141,
        "nombre": "Corrector Líquido",
        "precio": 49.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Corrector Líquido es un corrector de fybeauty con acabado liquido. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro.html"
        }
    },
    {
        "id": 1142,
        "nombre": "Corrector en Barra",
        "precio": 45.0,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Corrector en Barra es un corrector de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro.html"
        }
    },
    {
        "id": 1143,
        "nombre": "Corrector en Crema",
        "precio": 49.0,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Corrector en Crema es un corrector de fybeauty con acabado crema. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro.html"
        }
    },
    {
        "id": 1144,
        "nombre": "Paleta de Correctores",
        "precio": 99.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Paleta de Correctores es un sombra de fybeauty con acabado natural. Ideal para completar tu rutina de rostro con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Rostro",
            "enlace": "maquillaje-rostro.html"
        }
    },
    {
        "id": 1145,
        "nombre": "Base Líquida Mate",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Base Líquida Mate es un base de fybeauty con acabado mate liquida. Ideal para completar tu rutina de maquillaje con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Maquillaje",
            "enlace": "maquillaje.html"
        }
    },
    {
        "id": 1146,
        "nombre": "Corrector Líquido",
        "precio": 59.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Corrector Líquido es un corrector de fybeauty con acabado liquido. Ideal para completar tu rutina de maquillaje con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Maquillaje",
            "enlace": "maquillaje.html"
        }
    },
    {
        "id": 1147,
        "nombre": "Polvo Compacto",
        "precio": 59.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Polvo Compacto es un polvo de fybeauty con acabado polvo. Ideal para completar tu rutina de maquillaje con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Maquillaje",
            "enlace": "maquillaje.html"
        }
    },
    {
        "id": 1148,
        "nombre": "Iluminador Líquido",
        "precio": 69.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Iluminador Líquido es un iluminador de fybeauty con acabado liquido. Ideal para completar tu rutina de maquillaje con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Maquillaje",
            "enlace": "maquillaje.html"
        }
    },
    {
        "id": 1149,
        "nombre": "Máscara de Pestañas",
        "precio": 59.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Máscara de Pestañas es un mascara de fybeauty con acabado natural. Ideal para completar tu rutina de maquillaje con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Maquillaje",
            "enlace": "maquillaje.html"
        }
    },
    {
        "id": 1150,
        "nombre": "Paleta de Sombras Nude",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector líquido petrizzio wonder skin light 01.webp",
        "descripcion": "Paleta de Sombras Nude es un sombra de fybeauty con acabado natural. Ideal para completar tu rutina de maquillaje con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Maquillaje",
            "enlace": "maquillaje.html"
        }
    },
    {
        "id": 1151,
        "nombre": "Delineador Líquido",
        "precio": 49.9,
        "imagen": "img/Bases/base foundation stick 111 essence.webp",
        "descripcion": "Delineador Líquido es un delineador de fybeauty con acabado liquido. Ideal para completar tu rutina de maquillaje con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Maquillaje",
            "enlace": "maquillaje.html"
        }
    },
    {
        "id": 1152,
        "nombre": "Fortalecedor de Pestañas",
        "precio": 69.9,
        "imagen": "img/Corrector/corrector fit me 0.23 fl oz tono deep maybelline.webp",
        "descripcion": "Fortalecedor de Pestañas es un mascara de fybeauty con acabado natural. Ideal para completar tu rutina de maquillaje con una aplicación práctica y un resultado uniforme.",
        "categoria": {
            "nombre": "Maquillaje",
            "enlace": "maquillaje.html"
        }
    }
];

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

function inicializarMenuActivo() {
    document.querySelectorAll(".menu-link").forEach((enlace) => {
        enlace.classList.remove("active");
        enlace.removeAttribute("aria-current");
        const href = enlace.getAttribute("href");
        const seccion = enlace.dataset.seccion;
        const activo = href === paginaActual ||
            Boolean(seccion && paginaActual.startsWith(`${seccion}-`));
        if (activo) {
            enlace.classList.add("active");
            enlace.setAttribute("aria-current", "page");
        }
    });
}

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

function inicializarDetalleProducto() {
    const detalle = document.getElementById("producto-detalle");
    const noEncontrado = document.getElementById("producto-no-encontrado");
    if (!detalle || !noEncontrado) return;

    const id = Number(new URLSearchParams(window.location.search).get("id"));
    const producto = productos.find((item) => item.id === id);
    if (!producto) {
        detalle.classList.add("d-none");
        noEncontrado.classList.remove("d-none");
        document.title = "Producto no encontrado | FyBeauty";
        return;
    }

    document.title = `${producto.nombre} | FyBeauty`;
    const imagen = document.getElementById("producto-imagen");
    const nombre = document.getElementById("producto-nombre");
    const precio = document.getElementById("producto-precio");
    const descripcion = document.getElementById("producto-descripcion");
    const boton = document.getElementById("producto-agregar-carrito");
    const migaCategoria = document.getElementById("miga-categoria");
    const migaProducto = document.getElementById("miga-producto");

    if (imagen) {
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
    }
    if (nombre) nombre.textContent = producto.nombre;
    if (precio) precio.textContent = `S/ ${producto.precio.toFixed(2)}`;
    if (descripcion) descripcion.textContent = producto.descripcion;
    if (boton) boton.dataset.id = producto.id;
    if (migaCategoria) {
        migaCategoria.innerHTML = `<a href="${producto.categoria.enlace}">${producto.categoria.nombre}</a>`;
    }
    if (migaProducto) migaProducto.textContent = producto.nombre;
}

function campoDesdeControl(control) {
    if (control.dataset.filtro) return normalizar(control.dataset.filtro);
    const grupo = control.closest(".filtro-grupo") || control.parentElement;
    const titulo = normalizar(
        grupo?.querySelector("h2, h3, h4, label, strong, .filtro-titulo")?.textContent || ""
    );
    if (titulo.includes("tipo de piel")) return "piel";
    if (titulo.includes("tipo")) return "tipo";
    if (titulo.includes("marca")) return "marca";
    if (titulo.includes("acabado") || titulo.includes("textura") || titulo.includes("efecto")) return "acabado";
    if (titulo.includes("cobertura")) return "cobertura";
    if (titulo.includes("formato")) return "formato";
    if (titulo.includes("tono")) return "tono";
    if (titulo.includes("color")) return "color";
    if (titulo.includes("categoria")) return "categoria";
    if (titulo.includes("precio")) return "precio";
    if (titulo.includes("ordenar")) return "orden";
    return normalizar(control.name || "");
}

function inicializarFiltrosProductos() {
    const cards = Array.from(document.querySelectorAll(".card-producto"));
    const filtros = document.querySelector(".filtro-lateral");
    if (!cards.length || !filtros) return;

    const lista = cards.map((card, indiceOriginal) => {
        const item = card.closest('[data-producto-item="true"]') || card.parentElement || card;
        const precioTexto = card.dataset.precio || item.dataset.precio ||
            card.querySelector(".precio-producto")?.textContent || "0";
        const precio = parseFloat(String(precioTexto).replace(/[^0-9.,]/g, "").replace(",", ".")) || 0;
        const nombreVisible = card.querySelector(".nombre-producto")?.textContent || "";
        const textoData = [...Object.values(item.dataset), ...Object.values(card.dataset)].join(" ");
        const dato = (campo) => normalizar(card.dataset[campo] || item.dataset[campo]);
        return {
            card,
            item,
            precio,
            indiceOriginal,
            texto: normalizar(`${nombreVisible} ${textoData}`),
            tipo: dato("tipo"),
            piel: dato("piel"),
            categoria: dato("categoria"),
            marca: dato("marca"),
            acabado: dato("acabado"),
            cobertura: dato("cobertura"),
            formato: dato("formato"),
            tono: dato("tono"),
            color: dato("color")
        };
    });

    const precioMaximo = Math.ceil(Math.max(...lista.map((p) => p.precio), 0));
    let filtrosAplicados = {};
    let precioSlider = precioMaximo;
    const ranges = filtros.querySelectorAll('input[type="range"]');

    ranges.forEach((range) => {
        range.min = "0";
        range.max = String(precioMaximo);
        range.value = String(precioMaximo);
        const grupo = range.closest(".filtro-grupo, .filtro-lateral");
        const valores = grupo?.querySelectorAll(".filtro-precio-valores span") || [];
        if (valores[0]) valores[0].textContent = "S/ 0";
        if (valores[1]) valores[1].textContent = `S/ ${precioMaximo}`;
    });

    function etiquetaCheckbox(check) {
        const label = check.id
            ? Array.from(document.querySelectorAll("label[for]")).find((x) => x.getAttribute("for") === check.id)
            : null;
        return label?.textContent || check.closest(".form-check")?.querySelector("label")?.textContent || "";
    }

    function leerFiltros() {
        const activos = {};
        filtros.querySelectorAll("select").forEach((select) => {
            const campo = campoDesdeControl(select);
            const valor = normalizar(select.value);
            if (!campo || !valor) return;
            activos[campo] = valor;
        });
        filtros.querySelectorAll('input[type="checkbox"]:checked').forEach((check) => {
            const campo = campoDesdeControl(check);
            const valor = normalizar(check.value && check.value !== "on" ? check.value : etiquetaCheckbox(check));
            if (!campo || !valor) return;
            activos[campo] ||= [];
            activos[campo].push(valor);
        });
        const tonos = Array.from(filtros.querySelectorAll('.tono-swatch[aria-pressed="true"]'))
            .map((boton) => normalizar(boton.getAttribute("aria-label")))
            .filter(Boolean);
        if (tonos.length) activos.tono = tonos;
        const buscador = document.getElementById("buscador-principal");
        const busqueda = normalizar(buscador?.value);
        if (busqueda) activos.busqueda = busqueda;
        return activos;
    }

    function coincidePrecio(producto, valor) {
        const numeros = valor.match(/[0-9]+(?:\.[0-9]+)?/g)?.map(Number) || [];
        if (valor.includes("mas") && numeros.length) return producto.precio >= numeros[0];
        if (valor.includes("menos") && numeros.length) return producto.precio <= numeros[0];
        if (numeros.length >= 2) return producto.precio >= numeros[0] && producto.precio <= numeros[1];
        return true;
    }

    function coincide(producto, campo, valor) {
        if (campo === "busqueda") return producto.texto.includes(valor);
        if (campo === "precio") return coincidePrecio(producto, valor);
        if (campo === "color") return producto.color.includes(valor) || producto.tono.includes(valor) || producto.texto.includes(valor);
        if (campo === "tono") return producto.tono.includes(valor) || producto.color.includes(valor) || producto.texto.includes(valor);
        const dato = producto[campo];
        return typeof dato === "string" && dato
            ? dato.includes(valor) || producto.texto.includes(valor)
            : producto.texto.includes(valor);
    }

    function ordenar(orden) {
        const contenedores = Array.from(new Set(lista.map((p) => p.item.parentElement).filter(Boolean)));
        contenedores.forEach((contenedor) => {
            const productosContenedor = lista.filter((p) => p.item.parentElement === contenedor);
            if (orden?.includes("menor")) productosContenedor.sort((a, b) => a.precio - b.precio);
            else if (orden?.includes("mayor")) productosContenedor.sort((a, b) => b.precio - a.precio);
            else productosContenedor.sort((a, b) => a.indiceOriginal - b.indiceOriginal);
            productosContenedor.forEach((p) => contenedor.appendChild(p.item));
        });
    }

    function actualizarContador(visibles) {
        document.querySelectorAll(".contador-resultados").forEach((contador) => {
            contador.textContent = `${visibles} ${visibles === 1 ? "producto encontrado" : "productos encontrados"}`;
        });
    }

    function aplicarFiltros() {
        const activos = { ...filtrosAplicados };
        if (precioSlider < precioMaximo) activos.precioRange = precioSlider;
        let visibles = 0;
        lista.forEach((producto) => {
            let mostrar = true;
            Object.entries(activos).forEach(([campo, valor]) => {
                if (!mostrar || campo === "orden") return;
                if (campo === "precioRange") mostrar = producto.precio <= Number(valor);
                else if (Array.isArray(valor)) mostrar = valor.some((opcion) => coincide(producto, campo, opcion));
                else mostrar = coincide(producto, campo, valor);
            });
            producto.item.classList.toggle("producto-oculto", !mostrar);
            if (mostrar) visibles += 1;
        });
        ordenar(activos.orden);
        actualizarContador(visibles);
        document.querySelectorAll(".mensaje-sin-resultados").forEach((m) => m.remove());
        if (!visibles) {
            const grid = lista[0]?.item.parentElement;
            if (grid) {
                const mensaje = document.createElement("div");
                mensaje.className = "col-12 mensaje-sin-resultados";
                mensaje.textContent = "No hay productos que coincidan con los filtros seleccionados.";
                grid.appendChild(mensaje);
            }
        }
    }

    filtros.querySelectorAll(".tono-swatch").forEach((boton) => {
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
            filtrosAplicados = leerFiltros();
            aplicarFiltros();
        });
    });

    ranges.forEach((range) => {
        range.addEventListener("input", () => {
            precioSlider = Number(range.value);
            const grupo = range.closest(".filtro-grupo, .filtro-lateral");
            const valores = grupo?.querySelectorAll(".filtro-precio-valores span") || [];
            if (valores[1]) valores[1].textContent = `S/ ${precioSlider}`;
            aplicarFiltros();
        });
    });

    filtros.querySelectorAll('[data-limpiar-filtros="true"]').forEach((boton) => {
        boton.addEventListener("click", () => {
            filtros.querySelectorAll("select").forEach((select) => select.selectedIndex = 0);
            filtros.querySelectorAll('input[type="checkbox"]').forEach((check) => check.checked = false);
            filtros.querySelectorAll(".tono-swatch").forEach((tono) => {
                tono.setAttribute("aria-pressed", "false");
                tono.classList.remove("border-dark", "border-3");
            });
            ranges.forEach((range) => range.value = String(precioMaximo));
            const buscador = document.getElementById("buscador-principal");
            if (buscador) buscador.value = "";
            filtrosAplicados = {};
            precioSlider = precioMaximo;
            aplicarFiltros();
        });
    });

    aplicarFiltros();
}

function inicializarCarrito() {
    document.querySelectorAll(".btn-agregar-carrito").forEach((boton) => {
        boton.addEventListener("click", () => {
            const id = Number(boton.dataset.id);
            if (!id) return;
            const carrito = JSON.parse(localStorage.getItem("fybeauty-carrito") || "{}");
            carrito[id] = (carrito[id] || 0) + 1;
            localStorage.setItem("fybeauty-carrito", JSON.stringify(carrito));
            const textoOriginal = boton.textContent;
            boton.textContent = "Agregado ✓";
            setTimeout(() => boton.textContent = textoOriginal, 1200);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenuActivo();
    inicializarSubmenus();
    inicializarAnimaciones();
    inicializarDetalleProducto();
    inicializarFiltrosProductos();
    inicializarCarrito();
});
