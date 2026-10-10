# Landing de Centavot

Página para sumar bodegas y puestos de Lima al piloto gratis (octubre a diciembre de 2026).
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

| Archivo | Qué es |
|---|---|
| `index.html` | La página: portada, 6 secciones y clasificados con el formulario |
| `estilos.css` | El estilo de diario popular (ver `DESIGN.md`) |
| `app.js` | Fecha de la edición, demo "Haz la prueba" y formulario que arma el mensaje de WhatsApp |
| `img/` | Logo en trama, capturas reales de la app y los íconos |
| `Dockerfile`, `docker/nginx.conf` | Imagen de nginx que sirve la página en el puerto 4231 |

El formulario no guarda nada en un servidor: arma el mensaje con los datos y abre WhatsApp para
que el comerciante lo envíe.
