document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');
    const navLinks = navbarNav.querySelectorAll('.nav-link');

    if (navbarNav.classList.contains('show')) {
        navbarToggler.click();
    }
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarNav.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const items = document.querySelectorAll('.productoSerie');
    const totalItems = items.length;
    let index = 0;

    function moveCarousel(index) {
        const width = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${index * width}px)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % totalItems; //
        moveCarousel(index);
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + totalItems) % totalItems;
        moveCarousel(index);
    });

    function autoMoveCarousel() {
        index = (index + 1) % totalItems;
        moveCarousel(index);
    }

    moveCarousel(index);
    
    const autoMoveInterval = setInterval(autoMoveCarousel, 2000);

    const stopAutoMove = () => clearInterval(autoMoveInterval);

    nextButton.addEventListener('click', stopAutoMove);
    prevButton.addEventListener('click', stopAutoMove);

    function animateOnScroll() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('scroll-animated');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});

function verificarUsuario(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    const validEmail = "user@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
        messageDiv.innerHTML = "<p class='text-success'>Inicio de sesión exitoso!</p>";
    } else {
        messageDiv.innerHTML = "<p class='text-danger'>Credenciales incorrectas. Inténtalo de nuevo.</p>";
    }
}

function enviarFormulario(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('¡Formulario enviado con éxito!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

