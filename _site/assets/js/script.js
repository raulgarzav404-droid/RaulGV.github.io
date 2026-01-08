const texto = "🛡️ Bienvenido a mi página de ciberseguridad";
let i = 0;
const velocidad = 100;

function escribir() {
  if (i < texto.length) {
    document.getElementById("typing").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribir, velocidad);
  }
}

escribir();
