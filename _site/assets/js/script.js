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