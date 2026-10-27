---
name: Centavot · Andina implementada
description: Captura del sistema visual de la landing al 27 de octubre de 2026.
colors:
  papel: "#FAF6EF"
  superficie: "#EEE7DC"
  tinta: "#1B1410"
  secundario: "#62564C"
  maiz: "#F4B400"
  carmin: "#C1121F"
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(48px, 7.5vw, 96px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(30px, 3.7vw, 52px)"
    fontWeight: 600
    lineHeight: 1.12
  body:
    fontFamily: "Sora, sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
rounded:
  control: "0px"
  pantalla: "24px"
  pantalla-movil: "14px"
spacing:
  margen: "clamp(20px, 4.2vw, 64px)"
  ritmo: "clamp(64px, 8vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.carmin}"
  input:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
---

# Design System: Centavot · Andina implementada

## Overview

Captura de la implementación actual, extraída de `estilos.css`, `index.html` y `app.js`.
Conserva la marca Andina y presenta tipografía amplia, superficies planas y controles rectos.
No sustituye `DESIGN.md`, documento histórico que no representa la versión vigente.
La estrategia de esta página se registra en `.impeccable/surface-landing.md`.

## Colors

Tinta sostiene el texto y las acciones principales; Carmín identifica el enlace de inscripción,
el foco y el estado de hover. Maíz destaca los botones de ventas, las cifras y la inscripción.
Lana (`papel`) es el fondo general; `superficie` separa galería y demo. `secundario` distingue
notas y texto auxiliar. La caja y el pie invierten Tinta y Lana.

## Typography

Sora se carga desde `fonts/`, con archivos regular, semibold y bold y licencia OFL.
Los títulos usan peso 600. El cuerpo pasa a 16 px en móvil, y el titular a
`clamp(35px, 9.8vw, 64px)` con interlínea 1.08. Notas y etiquetas usan tamaños de 13 a 16 px.
Los importes emplean cifras tabulares. No se utiliza una fuente manuscrita para la demo.

## Layout

El contenido tiene un máximo de 1240 px y márgenes fluidos. La portada combina el titular
con descripción y acción en dos columnas. Las secciones alternan texto y evidencia; la galería
presenta tres pantallas. Los puntos de adaptación son 1000 y 680 px. En móvil, se apilan
las columnas y la acción principal ocupa todo el ancho; la primera captura ocupa una fila
centrada y las otras dos comparten la siguiente. La navegación conserva el acceso al piloto.

## Elevation & Depth

No hay sombras. Los cambios de fondo separan los bloques; los bordes delimitan capturas,
campos y filas de cuentas. La profundidad no depende de tarjetas flotantes.

## Shapes

Botones, campos y superficies tienen esquinas rectas. Las capturas de la aplicación son
la excepción redondeada; su borde cambia de 5 a 3 px en móvil. Los campos tienen borde de 2 px.

## Components

La acción principal usa Tinta y texto Lana; cambia a Carmín al pasar el puntero y se desplaza
2 px al pulsar. Los botones de ventas usan Maíz. El foco visible tiene contorno Carmín de 3 px
con separación de 5 px, o Maíz sobre las secciones oscuras.

Los campos conservan etiquetas visibles, ayuda, errores individuales y resumen enfocable.
El estado inválido usa borde Carmín y fondo claro; los errores también se expresan con texto.
La confirmación ofrece un enlace para reabrir el mensaje de WhatsApp: no afirma que se haya enviado.

La demo mantiene cinco anotaciones visibles, total y contador; permite reiniciar. El total
se interpola durante 420 ms. El titular y la descripción entran en 600 ms; la galería entra
una sola vez en 650 ms con retrasos coordinados. Con movimiento reducido se desactivan
animaciones y transiciones, y el importe se actualiza directamente.

## Do's and Don'ts

- Conservar los logotipos Andina y Sora local.
- Rotular los datos de las capturas como ejemplos.
- Mantener errores expresados con texto y foco visible.
- No interpretar esta captura como una auditoría completa de accesibilidad.
- No usar el `DESIGN.md` histórico como descripción del diseño actual.
