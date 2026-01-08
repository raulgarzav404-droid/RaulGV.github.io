---
layout: default
title: Home
---
{% raw %}
<script src="assets/js/script.js"></script>
{% endraw %}


<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="assets/css/style.css">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <!-- Logo o título -->
    <a class="navbar-brand" href="#">🛡️ Ciberseguridad</a>

    <!-- Botón hamburguesa en móvil -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Enlaces -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sobre-mi">Sobre mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#portafolio">Portafolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<video autoplay muted loop id="bg-video">
  <source src="assets/video/RAGV-fondo.mp4" type="video/mp4">
</video>

<div id="overlay"></div>

<div class="content">
  <h1>🛡️ Bienvenido a mi página de ciberseguridad</h1>
  <p>Soy Raul Garza, apasionado de la ciberseguridad y en formación como Blue Team Specialist.  
En este sitio comparto mis aprendizajes, proyectos y experiencias en defensa de sistemas, análisis de vulnerabilidades y laboratorios prácticos.</p>
</div>

<hr class="my-4">

## 👨‍💻 Sobre mí
- **Experiencia:** Configuración de entornos seguros, análisis de vulnerabilidades y prácticas en laboratorios de ciberseguridad.  
- **Educación:** En constante aprendizaje y formación en seguridad informática.  
- **Certificaciones en progreso:**  
  - Cisco CyberOps Associate  
  - Ethical Hacking  
<hr class="my-4">
<!-- Carrusel -->
<div class="container mt-5">
  <h2 class="text-center text-success">🚀 Mis proyectos destacados</h2>
  
  <div id="carouselCyber" class="carousel slide carousel-fade" data-bs-ride="carousel">

    <!-- Indicadores -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselCyber" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#carouselCyber" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#carouselCyber" data-bs-slide-to="2"></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/img/proyecto1.jpeg" class="d-block w-100" alt="Proyecto 1">
        <div class="carousel-caption d-none d-md-block">
          <h5>🔍 Proyecto 1</h5>
          <p>Análisis de vulnerabilidades con Nmap.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/img/proyecto2.jpeg" class="d-block w-100" alt="Proyecto 2">
        <div class="carousel-caption d-none d-md-block">
          <h5>🛡️ Proyecto 2</h5>
          <p>Defensa de sistemas en laboratorio.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/img/proyecto3.jpeg" class="d-block w-100" alt="Proyecto 3">
        <div class="carousel-caption d-none d-md-block">
          <h5>💻 Proyecto 3</h5>
          <p>Monitoreo de tráfico con Wireshark.</p>
        </div>
      </div>
    </div>

    <!-- Controles -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselCyber" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselCyber" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</div>

<hr class="my-4">




## 📂 Portafolio

### 🔍 Proyecto 1: Análisis de vulnerabilidades en sistemas de prueba
- **Descripción:** Evaluación de seguridad en un entorno controlado para identificar riesgos potenciales.  
- **Tecnologías utilizadas:** Kali Linux, Nmap, Wireshark.  
- **Resultados:** Identificación de vulnerabilidades críticas y propuesta de mitigación.  
- 🔗
