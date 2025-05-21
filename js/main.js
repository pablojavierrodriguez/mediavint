document.querySelectorAll('nav a').forEach(link => {
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

const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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