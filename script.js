// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Responsive Navbar: Close the navbar on link click (mobile view)
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // Simulate a toggler click to close the menu
      }
    });
  });
  
  // Back-to-top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = 'Back to top';
  backToTopBtn.classList.add('back-to-top');
  document.body.appendChild(backToTopBtn);
  
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '30px';
  backToTopBtn.style.right = '30px';
  backToTopBtn.style.zIndex = '1000';
  backToTopBtn.style.display = 'none';
  backToTopBtn.style.backgroundColor = '#007BFF';
  backToTopBtn.style.color = '#fff';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.padding = '10px';
  backToTopBtn.style.borderRadius = '50%';
  backToTopBtn.style.cursor = 'pointer';
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Show/hide back-to-top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  // Highlight active section in the navbar
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // Account for fixed navbar
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });
  
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${currentSectionId}`) {
        item.classList.add('active');
      }
    });
  });
  