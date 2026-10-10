---
name: Centavot
description: La portada del diario popular que la bodega vende en su puerta, convertida en la invitación al piloto de Centavot.
colors:
  papel-periodico: "#ecebe5"
  papel-claro: "#fffdf6"
  tinta: "#121212"
  tinta-suave: "#3d3a34"
  rojo-cabecera: "#e10600"
  rojo-texto: "#b30500"
  amarillo-recuadro: "#ffe600"
  azul-lapicero: "#1d3fa8"
  verde-whatsapp-burbuja: "#dcf8c6"
typography:
  masthead:
    fontFamily: "League Gothic, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(3.4rem, 10vw, 8.6rem)"
    fontWeight: 400
    lineHeight: 0.82
  display:
    fontFamily: "League Gothic, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(4.2rem, 8.6vw, 8.4rem)"
    fontWeight: 400
    lineHeight: 0.84
  headline:
    fontFamily: "League Gothic, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "clamp(2.7rem, 5.4vw, 5.2rem)"
    fontWeight: 400
    lineHeight: 0.9
  title:
    fontFamily: "League Gothic, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 400
    lineHeight: 0.95
  deck:
    fontFamily: "Archivo, Roboto, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 1vw, 1.85rem)"
    fontWeight: 600
    lineHeight: 1.3
    fontVariation: "'wdth' 90"
  body:
    fontFamily: "Archivo, Roboto, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.05rem + 0.15vw, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Roboto, Segoe UI, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 800
    letterSpacing: "0.06em"
  handwriting:
    fontFamily: "Caveat, Segoe Print, cursive"
    fontSize: "1.45rem"
    fontWeight: 500
    lineHeight: 1.32
rounded:
  none: "0"
  telefono: "30px"
spacing:
  margen: "clamp(16px, 4vw, 40px)"
  ritmo: "clamp(56px, 9vw, 112px)"
  columna: "clamp(16px, 2.4vw, 32px)"
components:
  button-whatsapp:
    backgroundColor: "{colors.tinta}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "14px 22px"
    height: "56px"
  button-venta:
    backgroundColor: "{colors.amarillo-recuadro}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
    height: "48px"
  recuadro:
    backgroundColor: "{colors.amarillo-recuadro}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.tinta}"
    rounded: "{rounded.none}"
    height: "52px"
  nav-indice:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel-periodico}"
    height: "48px"
---

# Design System: Centavot

## Overview

**Creative North Star: "La portada del barrio"**

La web de Centavot es la portada del diario popular de S/ 0.60 que la bodeguera vende colgado en su propia puerta: cabecera roja, titular a toda columna, recuadros amarillos, fotos con pie de foto y clasificados. El comerciante reconoce el formato al instante y lo lee como lee su diario: de un vistazo, del titular a la cifra.

La densidad es la de un diario, no la de una app: reglas de columna, número de página y hora del día en cada sección, cifras en columnas. La página cuenta un día de la bodega en orden (apertura, mediodía, cierre, fin de mes) y cierra en los clasificados, donde está la acción. La trama de imprenta del logo (la mano con la moneda de un sol) es la misma del papel: el mundo y la marca son una sola tinta.

Se rechaza el estándar de las apps financieras (teléfono a la derecha, texto a la izquierda, fila de tarjetas con íconos) y el sensacionalismo vacío: el titular es grande, pero todo lo que afirma es verdad y las cifras de ejemplo dicen que son de ejemplo.

**Key Characteristics:**
- Papel periódico gris con trama de puntos, tinta negra, cabecera roja y recuadros amarillos.
- Titulares en gótica condensada en mayúsculas; texto en una sans de diario robusta y legible.
- Esquinas rectas, bordes de tinta gruesos, cero sombras.
- Cada sección es una "página" con su número y su hora del día, al lado del título.
- La acción (WhatsApp) vive en recuadros amarillos y en un clasificado, nunca como botón flotante.

## Colors

Cuatro tintas de diario popular sobre papel gris: rojo, amarillo y negro hacen todo el trabajo; el azul de lapicero aparece solo en el cuaderno.

### Primary
- **Rojo Cabecera** (#e10600): la banda de la cabecera, el pie de página, la palabra que el titular quiere gritar ("CUADERNO!"), la letra capitular y el relleno de la barra del tope. Siempre en tamaños grandes o como campo de color.
- **Rojo Texto** (#b30500): la versión oscura para texto pequeño sobre papel (página y hora de cada sección), que con el rojo de cabecera no alcanzaría el contraste.

### Secondary
- **Amarillo Recuadro** (#ffe600): los recuadros de acción ("Pruébala gratis"), el precio "GRATIS", la infografía del tope, el clasificado principal y las ventas de la demo. Es el color de "aquí se actúa".

### Tertiary
- **Azul Lapicero** (#1d3fa8): solo la letra manuscrita del cuaderno de la demo y el anillo de foco del teclado.

### Neutral
- **Papel Periódico** (#ecebe5): el fondo de la página, con trama de puntos de tinta al 7 %.
- **Papel Claro** (#fffdf6): el interior de los recuadros blancos (demo, aviso, clasificados).
- **Tinta** (#121212): texto, reglas, bordes, índice y la plana invertida de "Tu caja".
- **Tinta Suave** (#3d3a34): pies de foto y notas.

### Named Rules
**La Regla de las Cuatro Tintas.** La página se imprime con rojo, amarillo, negro y papel. Un quinto color solo entra si viene del objeto que se muestra (el verde de la burbuja de WhatsApp, el azul del lapicero), nunca como adorno.

**La Regla del Amarillo que Actúa.** El amarillo marca dónde se toca o qué hay que mirar: acciones, precio, cifra del tope. No se usa de fondo decorativo.

## Typography

**Display Font:** League Gothic (con Arial Narrow / Roboto Condensed)
**Body Font:** Archivo (con Roboto / system-ui)
**Handwriting:** Caveat, solo para el cuaderno de la demo

**Character:** la gótica condensada es la voz del titular de diario popular, que grita en mayúsculas a toda columna; Archivo es el cuerpo de la nota, sólido y muy legible en teléfonos de gama baja.

### Hierarchy
- **Masthead** (400, clamp(3.4rem, 10vw, 8.6rem), 0.82): el nombre CENTAVOT en la cabecera roja.
- **Display** (400, clamp(4.2rem, 8.6vw, 8.4rem), 0.84): el titular de portada, una sola vez.
- **Headline** (400, clamp(2.7rem, 5.4vw, 5.2rem), 0.9): títulos de cada página, en dos líneas con salto intencional.
- **Title** (400, 1.9rem, 0.95): títulos de clasificados, recuadros y cabeceras de tablas.
- **Deck** (600, clamp(1.25rem…1.85rem), 1.3, ancho 90): la bajada bajo el titular.
- **Body** (400, 17–19px, 1.55): el texto de las notas, máximo 62ch.
- **Label** (800, 0.85rem, 0.06em, mayúsculas): página y hora de cada sección, fecha y edición de la cabecera, índice.

### Named Rules
**La Regla del Titular en Mayúsculas.** Todo lo que está en gótica va en mayúsculas; todo lo que está en Archivo va en caja normal, salvo las etiquetas.

**La Regla de las Cifras en Columna.** Los montos usan números tabulares y se alinean a la derecha, como en la tabla de "Tu caja".

## Layout

Rejilla de 12 columnas dentro de un ancho máximo de 1240px, con margen fluido de 16 a 40px. La portada reparte 8 columnas para titular, bajada y foto, y 4 columnas, separadas por una regla vertical de 2px, para el recuadro de acción y el teléfono. Las páginas interiores usan 6 + 6 (texto y demostración) o 4 + 8 (foto y texto).

El ritmo vertical entre secciones es clamp(56px, 9vw, 112px). Cada sección abre con una regla de 6px y una fila con el título a la izquierda y la página y la hora a la derecha. En el teléfono todo pasa a una columna, en este orden: titular, bajada, recuadro de acción, teléfono, foto. El índice se desliza en horizontal.

## Elevation & Depth

Plano por completo: no hay sombras. La profundidad sale de la tinta: bordes de 2 a 4px, la plana invertida en negro ("Tu caja") y los recuadros amarillos sobre el papel. El teléfono es un marco negro redondeado, la única forma curva, porque es un objeto real fotografiado en la página.

## Shapes

Esquinas rectas en todo (0px): recuadros, botones, campos, clasificados. Bordes de tinta de 2px (columnas y clasificados), 3px (botones y campos) y 4px (recuadros y demo). El aviso de privacidad usa borde doble, como los avisos oficiales en el diario. La única curva es el teléfono (30px).

## Components

### Buttons
- **Shape:** recto (0px), borde de tinta de 3px, alto mínimo de 56px.
- **WhatsApp (principal):** fondo tinta, texto blanco en Archivo 800, ícono de WhatsApp en SVG, ancho completo dentro de su recuadro.
- **Hover / Focus:** el fondo se aclara a #2b2b2b; al presionar baja 2px; el foco es un anillo azul lapicero de 3px.
- **Venta de la demo:** fondo amarillo, borde de 2px, número tabular; se encoge al 97 % al tocarlo.

### Recuadro de acción
- Amarillo con borde de tinta de 4px, título en gótica, texto y botón de WhatsApp, y debajo un enlace con flecha dibujada en SVG hacia los clasificados.

### Inputs / Fields
- **Style:** fondo blanco, borde de tinta de 3px, recto, alto de 52px, etiqueta en Archivo 800 arriba.
- **Focus:** anillo azul lapicero.
- **Error:** borde rojo y fondo rosado; el mensaje va en una franja roja con texto blanco, y el foco salta al primer campo con error.

### Navigation
- **Índice:** franja negra bajo la cabecera, cada sección con su "PÁG. N" en amarillo; la última ("Únete al piloto") va en amarillo con texto negro. En el teléfono se desliza en horizontal.

### Haz la prueba (componente propio)
- El cuaderno rayado con margen rojo y letra de lapicero frente a la caja negra de Centavot. Cada venta tocada se escribe en el cuaderno (que "no suma") y el total de Centavot sube con una animación de 420ms; sin animación si el sistema la desactiva.

### Clasificados
- Rejilla de avisos con bordes compartidos de 2px; el aviso principal ("Se buscan 20 bodegas") ocupa 2×3 celdas en amarillo y contiene el formulario.

## Do's and Don'ts

### Do:
- **Do** poner la página y la hora del día al lado del título de cada sección (o debajo en el teléfono).
- **Do** marcar como "de ejemplo" toda pantalla o cifra de demostración.
- **Do** usar #b30500 para el rojo en texto pequeño y #e10600 solo en tamaños grandes o campos.
- **Do** mantener los botones y campos con al menos 48px de alto.

### Don't:
- **Don't** poner etiquetas pequeñas encima de los títulos.
- **Don't** usar sombras, degradados ni esquinas redondeadas (salvo el teléfono).
- **Don't** usar texto en movimiento: el cintillo es fijo.
- **Don't** inventar testimonios, cantidad de usuarios, precios ni insignias de Google Play.
- **Don't** usar caracteres (flechas, viñetas tipográficas, emojis) como íconos; los íconos son SVG.
