// Centavot · landing del piloto.

// ⚠️ REEMPLAZAR: número de WhatsApp del equipo, con código de país y sin "+" ni espacios (ej. 51987654321).
// Mientras sea este marcador, los botones de WhatsApp llevan al formulario de la página.
const NUMERO_WHATSAPP = "51900000000";
const ES_MARCADOR = NUMERO_WHATSAPP === "51900000000";

const MENSAJE_INICIAL = "Hola, quiero probar Centavot gratis en mi negocio.";

function enlaceWhatsApp(mensaje) {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

// ---------- Fecha de la edición (como en la cabecera del diario) ----------
const fecha = document.getElementById("fecha-hoy");
if (fecha) {
  const texto = new Intl.DateTimeFormat("es-PE", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date());
  fecha.textContent = `Lima, ${texto}`;
}

// ---------- Botones de WhatsApp ----------
if (!ES_MARCADOR) {
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
  cajaNota.textContent = cuenta === 1 ? "Ya está sumado. Toca otra." : "Sin calculadora y sin borrones.";
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
  const marcar = (id, mal) => document.getElementById(id).setAttribute("aria-invalid", mal ? "true" : "false");
  marcar("f-nombre", !nombre); if (!nombre) faltan.push("tu nombre");
  marcar("f-rubro", !rubro); if (!rubro) faltan.push("tu negocio");
  marcar("f-distrito", !distrito); if (!distrito) faltan.push("tu distrito");
  const celularMal = !/^9\d{8}$/.test(celular);
  marcar("f-celular", celularMal); if (celularMal) faltan.push("un celular de 9 dígitos que empiece con 9");

  if (faltan.length) {
    error.textContent = `Falta ${faltan.join(", ")}.`;
    error.hidden = false;
    formulario.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }
  error.hidden = true;

  const mensaje = `${MENSAJE_INICIAL}\nNombre: ${nombre}\nNegocio: ${rubro}\nDistrito: ${distrito}\nCelular: ${celular}`;
  if (ES_MARCADOR) {
    error.textContent = "Todavía no hay número de WhatsApp configurado en esta página.";
    error.hidden = false;
    return;
  }
  window.open(enlaceWhatsApp(mensaje), "_blank", "noopener");
});
