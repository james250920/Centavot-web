// Centavot · landing del piloto.

// Número de WhatsApp del equipo, con código de país y sin "+" ni espacios.
// Si se vuelve a poner el marcador "51900000000", los botones llevan al formulario de la página.
const NUMERO_WHATSAPP = "51993375345";
const ES_MARCADOR = NUMERO_WHATSAPP === "51900000000";

const MENSAJE_INICIAL = "Hola, quiero probar Centavot gratis en mi negocio.";

function enlaceWhatsApp(mensaje) {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

// ---------- Botones de WhatsApp ----------
if (ES_MARCADOR) {
  document.querySelectorAll("[data-whatsapp]").forEach(a => {
    a.href = "#clasificados";
    a.removeAttribute("target");
  });
} else {
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    a.href = enlaceWhatsApp(MENSAJE_INICIAL);
    a.target = "_blank";
    a.rel = "noopener";
  });
}

// ---------- Haz la prueba: el cuaderno frente a Centavot ----------
const soles = (n) => `S/ ${n.toFixed(2)}`;
const lineas = document.getElementById("cuaderno-lineas");
const totalCuaderno = document.getElementById("cuaderno-total");
const cajaTotal = document.getElementById("caja-total");
const cajaCuenta = document.getElementById("caja-cuenta");
const cajaNota = document.getElementById("caja-nota");
const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");

let total = 0;
let cuenta = 0;
let mostrado = 0;
let animacion = 0;

function animarTotal(destino) {
  cancelAnimationFrame(animacion);
  if (sinMovimiento.matches) {
    mostrado = destino;
    cajaTotal.textContent = soles(destino);
    return;
  }
  const desde = mostrado;
  const inicio = performance.now();
  const duracion = 420;
  const paso = (ahora) => {
    const t = Math.min(1, (ahora - inicio) / duracion);
    const suave = 1 - Math.pow(1 - t, 3);
    mostrado = desde + (destino - desde) * suave;
    cajaTotal.textContent = soles(mostrado);
    if (t < 1) animacion = requestAnimationFrame(paso);
  };
  animacion = requestAnimationFrame(paso);
}

function anotar(nombre, monto) {
  total = Math.round((total + monto) * 100) / 100;
  cuenta += 1;

  const li = document.createElement("li");
  li.innerHTML = `<span></span><span>${monto.toFixed(2)}</span>`;
  li.firstChild.textContent = nombre;
  lineas.appendChild(li);
  while (lineas.children.length > 5) lineas.removeChild(lineas.firstChild);

  // El cuaderno no suma solo: solo cuenta las líneas.
  totalCuaderno.textContent = cuenta < 3 ? "… ¿cuánto era?" : `${cuenta} líneas por sumar`;

  animarTotal(total);
  cajaCuenta.textContent = String(cuenta);
  cajaNota.textContent = `${cuenta} ${cuenta === 1 ? "venta anotada" : "ventas anotadas"}. Total: ${soles(total)}.`;
}

document.querySelectorAll("[data-venta]").forEach((boton) => {
  boton.addEventListener("click", () => anotar(boton.dataset.nombre, Number(boton.dataset.venta)));
});

document.getElementById("prueba-reiniciar")?.addEventListener("click", () => {
  total = 0;
  cuenta = 0;
  lineas.replaceChildren();
  totalCuaderno.textContent = "… ¿cuánto era?";
  animarTotal(0);
  cajaCuenta.textContent = "0";
  cajaNota.textContent = "Toca una venta para empezar.";
});

// ---------- Formulario: arma el mensaje y lo abre en WhatsApp (sin servidor) ----------
const formulario = document.getElementById("formulario");
const error = document.getElementById("formulario-error");

formulario?.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const datos = new FormData(formulario);
  const nombre = String(datos.get("nombre") || "").trim();
  const rubro = String(datos.get("rubro") || "").trim();
  const distrito = String(datos.get("distrito") || "").trim();
  const celular = String(datos.get("celular") || "").replace(/\D/g, "");

  const faltan = [];
  const marcar = (id, mensaje) => {
    const campo = document.getElementById(id);
    const aviso = document.getElementById(`${id}-error`);
    campo.setAttribute("aria-invalid", mensaje ? "true" : "false");
    aviso.textContent = mensaje;
    aviso.hidden = !mensaje;
    if (mensaje) faltan.push({ id, mensaje });
  };
  marcar("f-nombre", nombre ? "" : "Escribe tu nombre.");
  marcar("f-rubro", rubro ? "" : "Elige el tipo de negocio.");
  marcar("f-distrito", distrito ? "" : "Escribe el distrito de tu negocio.");
  marcar("f-celular", /^9\d{8}$/.test(celular) ? "" : "Escribe 9 dígitos; el primero debe ser 9.");
  document.getElementById("formulario-estado").hidden = true;

  if (faltan.length) {
    error.replaceChildren();
    const titulo = document.createElement("strong");
    titulo.textContent = "Revisa estos datos para continuar:";
    const lista = document.createElement("ul");
    for (const { id, mensaje } of faltan) {
      const item = document.createElement("li");
      const enlace = document.createElement("a");
      enlace.href = `#${id}`;
      enlace.textContent = mensaje;
      enlace.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById(id).focus();
      });
      item.append(enlace);
      lista.append(item);
    }
    error.append(titulo, lista);
    error.hidden = false;
    error.focus();
    return;
  }
  error.hidden = true;

  const mensaje = `${MENSAJE_INICIAL}\nNombre: ${nombre}\nNegocio: ${rubro}\nDistrito: ${distrito}\nCelular: ${celular}`;
  if (ES_MARCADOR) {
    error.textContent = "Todavía no hay número de WhatsApp configurado en esta página.";
    error.hidden = false;
    return;
  }
  const destino = enlaceWhatsApp(mensaje);
  window.open(destino, "_blank", "noopener");
  const estado = document.getElementById("formulario-estado");
  estado.replaceChildren(document.createTextNode("Tu mensaje está listo. Revísalo y envíalo en WhatsApp. Si no se abrió, "));
  const reintentar = document.createElement("a");
  reintentar.href = destino;
  reintentar.target = "_blank";
  reintentar.rel = "noopener";
  reintentar.textContent = "abre tu mensaje aquí";
  estado.append(reintentar);
  estado.hidden = false;
});

// Sin JavaScript, las seis láminas se pueden recorrer con scroll horizontal.
const pista = document.getElementById("presentacion-pista");
if (pista) {
  const laminas = [...pista.children];
  const anterior = document.getElementById("presentacion-anterior");
  const siguiente = document.getElementById("presentacion-siguiente");
  const estado = document.getElementById("presentacion-estado");
  const seccion = document.getElementById("presentacion");
  const pausa = document.getElementById("presentacion-pausa");
  let actual = 0;
  let detenido = sinMovimiento.matches;
  let visible = false;
  let temporizador;
  let finScroll;
  let ancho = pista.clientWidth;
  const ajustarAltura = () => {
    pista.style.height = `${laminas[actual].offsetHeight}px`;
  };
  const programar = () => {
    clearTimeout(temporizador);
    const activo = !detenido && visible && !document.hidden && !seccion.matches(":hover") && !pista.contains(document.activeElement);
    estado.setAttribute("aria-live", activo ? "off" : "polite");
    if (activo) temporizador = setTimeout(() => ir(actual + 1), 6000);
  };
  const actualizar = () => {
    estado.textContent = laminas[actual].getAttribute("aria-label").replace(":", " ·");
    pausa.textContent = detenido ? "▶" : "Ⅱ";
    pausa.setAttribute("aria-label", detenido ? "Activar avance automático" : "Pausar avance automático");
    ajustarAltura();
  };
  const ir = (indice) => {
    actual = (indice + laminas.length) % laminas.length;
    pista.scrollTo({ left: actual * pista.clientWidth, behavior: sinMovimiento.matches ? "instant" : "smooth" });
    actualizar();
    programar();
  };
  pausa.addEventListener("click", () => { detenido = !detenido; actualizar(); programar(); });
  anterior.addEventListener("click", () => ir(actual - 1));
  siguiente.addEventListener("click", () => ir(actual + 1));
  pista.addEventListener("keydown", (evento) => {
    if (evento.target !== pista) return;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(evento.key)) return;
    evento.preventDefault();
    ir(evento.key === "Home" ? 0 : evento.key === "End" ? laminas.length - 1 : actual + (evento.key === "ArrowRight" ? 1 : -1));
  });
  pista.addEventListener("scroll", () => {
    clearTimeout(temporizador);
    clearTimeout(finScroll);
    finScroll = setTimeout(() => {
      actual = Math.max(0, Math.min(laminas.length - 1, Math.round(pista.scrollLeft / pista.clientWidth)));
      actualizar();
      programar();
    }, 150);
  }, { passive: true });
  seccion.addEventListener("mouseenter", programar);
  seccion.addEventListener("mouseleave", programar);
  seccion.addEventListener("focusin", programar);
  seccion.addEventListener("focusout", () => setTimeout(programar, 0));
  document.addEventListener("visibilitychange", programar);
  sinMovimiento.addEventListener("change", () => { detenido = sinMovimiento.matches; actualizar(); programar(); });
  new IntersectionObserver(([entrada]) => {
    visible = entrada.isIntersecting;
    programar();
  }, { threshold: 0 }).observe(pista);
  const dimensiones = new ResizeObserver(() => {
    if (ancho !== pista.clientWidth) {
      ancho = pista.clientWidth;
      pista.scrollTo({ left: actual * ancho, behavior: "instant" });
    }
    ajustarAltura();
  });
  laminas.forEach(lamina => dimensiones.observe(lamina));
  document.querySelector(".presentacion__controles").hidden = false;
  actualizar();
}
