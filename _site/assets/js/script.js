// Elemento donde se mostrará el efecto
const el = document.getElementById("typing");
// Texto final que se va a "descifrar"
const finalText = "🛡️ Bienvenido a mi página de ciberseguridad";
// Conjunto de caracteres aleatorios para el scramble
const chars = "!@#$%^&*()_+=-{}[]<>?/|ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let iteration = 0;

// Intervalo que va revelando las letras correctas poco a poco
let scrambleInterval = setInterval(() => {
  let output = "";

  for (let i = 0; i < finalText.length; i++) {
    if (i < iteration) {
      // Letra correcta ya revelada
      output += finalText[i];
    } else {
      // Letra aleatoria mientras se descifra
      output += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  el.textContent = output;
  iteration++;

  // Cuando termina de revelar todo el texto, se detiene
  if (iteration > finalText.length) clearInterval(scrambleInterval);
}, 100); // velocidad en ms (100 = 0.1s por letra)



// Animación para el timeline
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 300); // efecto en cascada
  });
});




function scanPorts() {
  // Obtiene la IP que el usuario escribió, o usa una por defecto
  const ip = document.getElementById("ipInput").value || "192.168.1.1";

  // Selecciona el área donde se mostrarán los resultados
  const output = document.getElementById("scanOutput");

  // Muestra mensaje inicial
  output.textContent = `Escaneando ${ip}...\n`;

  // Lista de puertos ficticios con sus servicios
const ports = [
  { port: 22, service: "SSH", state: "open" },
  { port: 80, service: "HTTP", state: "open" },
  { port: 443, service: "HTTPS", state: "closed" },
  { port: 3306, service: "MySQL", state: "filtered" },
  { port: 8080, service: "Proxy", state: "open" }
];

let i = 0; // contador de puertos

const interval = setInterval(() => {
  if (i < ports.length) {
    output.textContent += `Puerto ${ports[i].port}/tcp ${ports[i].state} (${ports[i].service})\n`;
    i++;
  } else {
    clearInterval(interval);
    output.textContent += "\nEscaneo completado ✅";
  }
}, 700);
}