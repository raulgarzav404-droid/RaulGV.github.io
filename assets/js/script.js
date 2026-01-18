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

function scanPorts() {
  // Obtiene la IP que el usuario escribió, o usa una por defecto
  const ip = document.getElementById("ipInput").value || "192.168.1.1";

  // Selecciona el área donde se mostrarán los resultados
  const output = document.getElementById("scanOutput");

  // Muestra mensaje inicial
  output.textContent = `Escaneando ${ip}...\n`;

  // Lista de puertos ficticios con sus servicios
  const ports = [
    { port: 22, service: "SSH" },
    { port: 80, service: "HTTP" },
    { port: 443, service: "HTTPS" },
    { port: 3306, service: "MySQL" },
    { port: 8080, service: "Proxy" }
  ];

  let i = 0; // contador de puertos

  // Intervalo que imprime resultados poco a poco (simula escaneo real)
  const interval = setInterval(() => {
    if (i < ports.length) {
      // Agrega un puerto abierto al log
      output.textContent += `Puerto ${ports[i].port}/tcp abierto (${ports[i].service})\n`;
      i++;
    } else {
      // Cuando termina, detiene el intervalo
      clearInterval(interval);
      output.textContent += "\nEscaneo completado ✅";
    }
  }, 700); // velocidad en ms (700 = 0.7s entre cada puerto)
}