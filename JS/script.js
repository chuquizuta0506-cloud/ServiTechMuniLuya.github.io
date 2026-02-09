// Ejemplo de interacción para el menú o botones
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Redirigiendo al portal de servicios de la Municipalidad...');
    });
});

console.log("Portal cargado correctamente.");

/// para los paneles de inicio
const panels = document.querySelectorAll(".panel");

const images = [
  ["img/panel1/01.jpg", "img/panel1/02.jpg", "img/panel1/04.jpg"],
  ["img/panel2/02.jpeg", "img/panel2/03.jpeg", "img/panel2/04.jpeg"],
  ["img/panel3/03.jpeg", "img/panel3/04.jpeg", "img/panel3/01.jpeg"],
  ["img/panel4/04.jpg", "img/panel4/01.jpeg", "img/panel4/03.jpg"]
];

let indexes = [0, 0, 0, 0];

panels.forEach((panel, i) => {
  const baseImg = panel.querySelector("img");

  setInterval(() => {
    indexes[i] = (indexes[i] + 1) % images[i].length;
    const nextSrc = images[i][indexes[i]];

    // Crear capa de barrido
    const wipe = document.createElement("div");
    wipe.className = "wipe";
    wipe.style.backgroundImage = `url(${nextSrc})`;
    panel.appendChild(wipe);

    // Al terminar la animación, fijar la imagen base y quitar la capa
    //wipe.addEventListener("animationend", () => {
    //  baseImg.src = nextSrc;
    //  wipe.remove();
    //});

  }, 3500 + (i * 1200)); // intercalado
});


// lo del contenido del inicio 
const bloques = document.querySelectorAll(".institucional-bloque");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

bloques.forEach(bloque => observer.observe(bloque));



//PARA RESPONSIVE 
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".ul-opciones");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
