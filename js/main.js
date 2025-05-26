// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href.startsWith("#")) {
          e.preventDefault();
          const sectionId = href.substring(1);
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Responsive navigation menu
  const menuBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav.hamburger');

  menuBtn.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    
    if (menuBtn.classList.contains('active')) {
      menuBtn.innerHTML = '✖';
    } else {
      menuBtn.innerHTML = '&#9776;';
    }
  });

  // Muestra el equipo
  document.getElementById('toggle-equipo').addEventListener('click', function () {
    const equipo = document.getElementById('equipo-detalle');
    const boton = document.getElementById('toggle-equipo');

    if (equipo.style.display === 'flex') {
      equipo.style.display = 'none';
      boton.textContent = 'Conocer al equipo';
    } else {
      equipo.style.display = 'flex';
      boton.textContent = 'Ocultar al equipo'; 
    }
  });

  // Formulario de contacto
  document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = document.getElementById('contact-form');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const status = document.getElementById('form-status');

    if (!name || !email || !message) {
      status.textContent = 'Por favor, completá todos los campos.';
      status.style.color = 'red';
      return;
    }

    const data = { name, email, message };

    try {
      const response = await fetch('https://formspree.io/f/xovdokvo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Oculta el formulario
        form.style.display = 'none';

        // Muestra mensaje de éxito
        status.textContent = '¡Gracias por tu mensaje! Te responderemos pronto.';
        status.style.color = 'green';
        status.style.display = 'block';
        status.style.fontSize = '1.2rem';
        status.style.textAlign = 'center';
        status.style.padding = '2rem 0';
      } else {
        status.textContent = 'Hubo un error al enviar el formulario.';
        status.style.color = 'red';
      }
    } catch (error) {
      status.textContent = 'No se pudo enviar el mensaje. Verificá tu conexión.';
      status.style.color = 'red';
      console.error(error);
    }
  });
