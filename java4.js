// Botón de menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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