# Landing de Centavot

Página para sumar bodegas y puestos de Lima al piloto gratis (octubre a diciembre de 2026).
HTML, CSS y JavaScript sin dependencias ni compilación.

## Antes de publicar

1. **Pon el número de WhatsApp del equipo** en `app.js`:
   ```js
   const NUMERO_WHATSAPP = "51987654321"; // código de país + número, sin "+" ni espacios
   ```
   Mientras siga el marcador `51900000000`, el botón de la portada lleva al formulario y el
   formulario avisa que falta configurar el número.
2. Si quieres, cambia las capturas de `img/` cuando la app cambie (son datos de ejemplo).

## Verla en tu computadora

Abre `index.html` con doble clic, o sirve la carpeta:
```
python3 -m http.server 8000
```

## Publicarla gratis

Cualquier hosting estático sirve: GitHub Pages, Netlify o Vercel (arrastrar la carpeta).

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La página: portada, 6 secciones y clasificados con el formulario |
| `estilos.css` | El estilo de diario popular (ver `DESIGN.md`) |
| `app.js` | Fecha de la edición, demo "Haz la prueba" y formulario que arma el mensaje de WhatsApp |
| `img/` | Logo en trama, capturas reales de la app y los íconos |

El formulario no guarda nada en un servidor: arma el mensaje con los datos y abre WhatsApp para
que el comerciante lo envíe.
