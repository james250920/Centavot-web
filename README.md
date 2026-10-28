# Landing de Centavot

Página para sumar 20 bodegas y puestos de Lima al piloto gratis (octubre a diciembre de 2026).
HTML, CSS y JavaScript sin dependencias ni compilación.

## WhatsApp

Los botones y el formulario abren WhatsApp con el número del equipo, **+51 993 375 345**, configurado
en `app.js` (`NUMERO_WHATSAPP`, con código de país y sin "+" ni espacios). Las capturas de `img/` son
datos de ejemplo; cámbialas cuando la app cambie.

## Verla en tu computadora

Abre `index.html` con doble clic, o sirve la carpeta:
```
python3 -m http.server 8000
```

## Con Docker (puerto 4231)

```
docker build -t centavot-web .
docker run -d --name centavot-web -p 4231:4231 --restart unless-stopped centavot-web
```

Queda en http://localhost:4231. La imagen usa nginx: comprime estilos y script, guarda en caché
las imágenes un día y no publica los archivos `.json` de origen de las imágenes. Para actualizarla
después de un cambio, vuelve a construirla y reemplaza el contenedor:

```
docker build -t centavot-web . && docker rm -f centavot-web && docker run -d --name centavot-web -p 4231:4231 --restart unless-stopped centavot-web
```

## Publicarla gratis

Cualquier hosting estático sirve: GitHub Pages, Netlify o Vercel (arrastrar la carpeta).

## Archivos

La presentación de `puerta` está integrada después de la portada, en lugar de la galería
estática: seis láminas con navegación por botones, teclado y desplazamiento horizontal.
Conserva el enlace y QR de inscripción al DemoDay. Sus imágenes están en
`img/presentacion/`, incluidas en Docker mediante la copia de `img/`.
Avanza automáticamente cada 6 segundos y vuelve al inicio al terminar; los botones también
recorren las láminas en ambos sentidos sin límite. Incluye pausa y se detiene al pasar el
puntero, enfocar el contenido o salir de pantalla. Con movimiento reducido comienza pausado.
Sin JavaScript sigue disponible el desplazamiento horizontal.

| Archivo | Qué es |
|---|---|
| `index.html` | Portada, pantallas reales, demo, funciones, inscripción y preguntas |
| `estilos.css` | Marca Andina, composición adaptable y estados de los controles |
| `app.js` | Demo de ventas, entrada de la galería y formulario para WhatsApp |
| `img/` | Marca Andina oficial, capturas de la app e íconos |
| `Dockerfile`, `docker/nginx.conf` | Imagen de nginx que sirve la página en el puerto 4231 |

El formulario no guarda nada en un servidor: arma el mensaje con los datos y abre WhatsApp para
que el comerciante lo envíe.

## Actualización de la landing · 27 de octubre de 2026

Contenido contrastado con la app hasta el paso 39: modos personal y negocio, presupuesto,
metas de ahorro, partidas de gastos, movimientos por fecha y reportes PDF/CSV para Excel.
La portada simplifica la entrada; siguen la galería, la demo y la inscripción por WhatsApp.

Marca Andina tomada del pack oficial: Tinta, Lana, Maíz y Carmín; logotipos y símbolo SVG.
Sora se sirve localmente desde `fonts/`, con su licencia OFL. Toda la página, incluida la demo, utiliza Sora.
Las tres capturas se copiaron de la galería del 21 de octubre (paso 35): Inicio, Cobros y
Presupuesto personal. Son datos de demostración; no documentan las pantallas cambiadas en los pasos 38 y 39.

`PRODUCT.md` y `DESIGN.md` conservan el contexto original del 10 de octubre; sus referencias a la
marca anterior y las capacidades de aquella versión quedan desactualizadas respecto a esta landing.


## Diseño implementado y validación local

[DESIGN-implemented.md](DESIGN-implemented.md) captura el diseño actual a partir del código;
[.impeccable/design.json](.impeccable/design.json) conserva sus componentes y estados.
`DESIGN.md` es histórico y no representa la implementación vigente; se conserva junto a
`PRODUCT.md` sin sustituirlos. El contrato de esta página está en
[.impeccable/surface-landing.md](.impeccable/surface-landing.md).

Desde esta carpeta, ejecuta:

```sh
python3 tests/smoke.py
```

La comprobación requiere el paquete Python Playwright y Google Chrome instalado localmente
(también admite Chromium); son herramientas de prueba, no dependencias de la aplicación.
Levanta su propio servidor temporal y guarda capturas en `/tmp/centavot-functional/`.
Las pruebas locales cubren anchos de 1440, 768, 390 y 320 px: carga de imágenes, desbordamiento,
anclas, suma y reinicio de ventas, validación del formulario y composición del mensaje.
También comprueban la página sin JavaScript a 390 px. La apertura de WhatsApp del formulario
se intercepta: no se envían mensajes ni se contacta al equipo.

El inspector visual reportó **0 FAIL y 4 WARN**: fondo crema Lana, 12 tamaños tipográficos,
ausencia de vídeo y movimiento discreto. Lana responde a la marca; las capturas son la evidencia
visual disponible. La portada y la galería tienen entradas breves; `prefers-reduced-motion`
desactiva las animaciones y transiciones. La revisión independiente concluyó **SHIP**, sin
defectos materiales. Estos controles no equivalen a una auditoría completa de accesibilidad.

No se publicó la página ni se ejecutaron los comandos Docker durante esta actualización.
