// Botón de menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const sections = document.querySelectorAll(".section-box");
const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");
const galleryText = document.getElementById("galleryText"); // Texto de la imagen
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const galleries = {
    "⁂ Entrada ⁂": [
        { src: "Entrada/1.jpg", text: "Entrada Original" },
        { src: "Entrada/Entrada.jpg", text: "Diseño 3D de la entrada principal" },
        { src: "Entrada/entrada1.jpg", text: "Diseño 3D de la entrada principal" },
        { src: "Entrada/entrada2.jpg", text: "Diseño 3D Pasillo de acceso" },
        { src: "Entrada/pasillo.jpg", text: "Diseño 3D Vista frontal del pasillo" }
    ],
    "⁂ Salón ⁂": [
        { src: "Salon/salonor1.jpg", text: "Salón Original" },
        { src: "Salon/salonor2.jpg", text: "Salón Original" },
        { src: "Salon/salon1.jpg", text: "Representación 3D" },
        { src: "Salon/salon2.jpg", text: "Representación 3D" },
        { src: "Salon/salon3.jpg", text: "Representación 3D" },
        { src: "Salon/salon4.jpg", text: "Representación 3D" }
    ],
    "⁂ Terraza ⁂": [
        { src: "Terraza/1736965864683.jpg", text: "Terraza Original" },
        { src: "Terraza/1736965864692.jpg", text: "Terraza Original" },
        { src: "Terraza/1736965864700.jpg", text: "Terraza Original" },
        { src: "Terraza/1736965864708.jpg", text: "Terraza Original" },
        { src: "Terraza/terraza1.jpg", text: "Representación 3D" },
        { src: "Terraza/terraza2.jpg", text: "Representación 3D" },
        { src: "Terraza/terraza3.jpg", text: "Representación 3D" },
        { src: "Terraza/terraza4.jpg", text: "Representación 3D" },
        { src: "Terraza/terraza5.jpg", text: "Representación 3D" }
    ],
    "⁂ Cocina ⁂": [
        { src: "Cocina/cocina1 (2).jpg", text: "Cocina Original" },
        { src: "Cocina/cocina2 (3).jpg", text: "Cocina Original" },
        { src: "Cocina/cocina1.jpg", text: "Representación 3D" },
        { src: "Cocina/cocina2.jpg", text: "Representación 3D" },
        { src: "Cocina/lavadero1.jpg", text: "Representación 3D Lavadero" },
        { src: "Cocina/lavadero2.jpg", text: "Representación 3D Lavadero" }
    ],
    "⁂ Baño Pasillo ⁂": [
        { src: "baño pasillo/bañopasi1.jpg", text: "Representación 3D (Sin Modificaciones)" },
        { src: "baño pasillo/bañopasi2.jpg", text: "Representación 3D (Sin Modificaciones)" }
    ],
    "⁂ Habitación Infantil ⁂": [
        { src: "HabInfantil/original.jpg", text: "Habitación Original" },
        { src: "HabInfantil/original2.jpg", text: "Habitación Original" },
        { src: "HabInfantil/habitLE1.jpg", text: "Representación 3D" },
        { src: "HabInfantil/habitLE2.jpg", text: "Representación 3D" },
        { src: "HabInfantil/habitLE3.jpg", text: "Representación 3D" }
    ],
    "⁂ Habitación Juvenil ⁂": [
        { src: "HabJuvenil/original.jpg", text: "Habitación Original" },
        { src: "HabJuvenil/habitNI.jpg", text: "Representación 3D" },
        { src: "HabJuvenil/habitNI1.jpg", text: "Representación 3D" },
        { src: "HabJuvenil/habitNI2.jpg", text: "Representación 3D" },
        { src: "HabJuvenil/habitNI3.jpg", text: "Representación 3D" }
    ],
    "⁂ Habitación Principal ⁂": [
        { src: "HabMatrimonio/habm.jpg", text: "Habitaciòn Original" },
        { src: "HabMatrimonio/habitMat.jpg", text: "Representación 3D" },
        { src: "HabMatrimonio/habitMat2.jpg", text: "Representación 3D" },
        { src: "HabMatrimonio/habitMat3.jpg", text: "Representación 3D" }
    ],
    "⁂ Baño Suite ⁂": [
        { src: "BañoMatrimonio/bañom.jpg", text: "Baño Original" },
        { src: "BañoMatrimonio/bañom (2).jpg", text: "Baño Original" },
        { src: "BañoMatrimonio/baño1.jpg", text: "Representación 3D" },
        { src: "BañoMatrimonio/baño2.jpg", text: "Representación 3D" },
        { src: "BañoMatrimonio/baño4.jpg", text: "Representación 3D" },
        { src: "BañoMatrimonio/baño5.jpg", text: "Representación 3D" }
    ]
};

let currentGallery = [];
let currentIndex = 0;

// Función para abrir la galería
sections.forEach(section => {
    section.addEventListener("click", () => {
        const sectionName = section.textContent.trim();
        if (galleries[sectionName]) {
            currentGallery = galleries[sectionName];
            currentIndex = 0;
            openGallery(currentGallery[currentIndex]);
        }
    });
});

function openGallery(image) {
    galleryImage.src = image.src; // Asigna la imagen
    galleryImage.alt = image.text; // Agrega un texto alternativo
    galleryText.textContent = image.text; // Muestra la descripción
    galleryModal.style.display = "flex";
}

// Función para cerrar la galería
closeBtn.addEventListener("click", () => {
    galleryModal.style.display = "none";
});

// Función para cambiar de imagen
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? currentGallery.length - 1 : currentIndex - 1;
    openGallery(currentGallery[currentIndex]);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === currentGallery.length - 1) ? 0 : currentIndex + 1;
    openGallery(currentGallery[currentIndex]);
});
// Efecto de vidrio roto en los recuadros
document.querySelectorAll('.text-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        for (let i = 0; i < 10; i++) {
            let piece = document.createElement('div');
            piece.classList.add('glass-piece');

            // Posicionamos aleatoriamente dentro del recuadro
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.top = `${Math.random() * 100}%`;

            // Variables aleatorias para la animación
            let tx = `${(Math.random() - 0.5) * 100}px`; // Movimiento horizontal
            let ty = `${(Math.random() - 0.5) * 100}px`; // Movimiento vertical
            let r = `${Math.random() * 360}deg`; // Rotación aleatoria

            piece.style.setProperty('--tx', tx);
            piece.style.setProperty('--ty', ty);
            piece.style.setProperty('--r', r);

            piece.style.animation = 'glassBreak 0.5s forwards';

            this.appendChild(piece);

            // Eliminamos los fragmentos después de la animación
            setTimeout(() => piece.remove(), 500);
        }
    });
});

