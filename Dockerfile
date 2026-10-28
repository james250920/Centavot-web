# Landing de Centavot servida con nginx en el puerto 4231.
FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html estilos.css app.js /usr/share/nginx/html/
COPY img/ /usr/share/nginx/html/img/
COPY fonts/ /usr/share/nginx/html/fonts/

EXPOSE 4231

HEALTHCHECK --interval=30s --timeout=3s CMD wget -q -O /dev/null http://127.0.0.1:4231/ || exit 1
