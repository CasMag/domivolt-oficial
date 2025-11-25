/*document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciona los elementos del DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // 2. Agrega un 'listener' al botón
    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'active' para el botón de animación (X)
        menuToggle.classList.toggle('active');
        
        // Alterna la clase 'open' para mostrar/ocultar el menú
        mainNav.classList.toggle('open');
        
        // Accesibilidad: Actualiza el atributo aria-expanded
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Opcional: Cierra el menú cuando se hace click en un enlace
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});*/

// Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nombre = document.getElementById('nombre').value;
            const telefono = document.getElementById('telefono').value;
            const servicio = document.getElementById('servicio').value;
            const descripcion = document.getElementById('descripcion').value;
            
            // Create WhatsApp message
            const mensaje = `Hola DomiVolt, mi nombre es ${nombre}.%0A%0AServicio: ${servicio}%0ATeléfono: ${telefono}%0A%0ADescripción:%0A${descripcion}`;
            
            // Redirect to WhatsApp
            window.open(`https://wa.me/59178491525?text=${mensaje}`, '_blank');
            
            // Reset form
            this.reset();
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });