/**
 * Custom JavaScript for Tauseef Usman's Portfolio
 */

document.addEventListener("DOMContentLoaded", function() {

  // Navbar shrink function
  var navbarShrink = function () {
    const mainNav = document.getElementById('mainNav');
    if (!mainNav) {
      return;
    }
    if (window.scrollY === 0) {
      mainNav.classList.remove('navbar-shrink');
    } else {
      mainNav.classList.add('navbar-shrink');
    }
  };
  
  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);
  
  // Shrink the navbar when page is loaded
  navbarShrink();
  
  // Activate Bootstrap scrollspy
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  }

  // Close responsive menu when clicking on nav item
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('navbarResponsive');
  const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
  
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (menuToggle.classList.contains('show')) {
        bsCollapse.toggle();
      }
    });
  });

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });
  }

  // Animate on scroll initialization
  const animateElements = document.querySelectorAll('.animate__animated');
  
  if (animateElements.length) {
    const animateOnScroll = function() {
      for (let i = 0; i < animateElements.length; i++) {
        const element = animateElements[i];
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < window.innerHeight - elementVisible) {
          element.classList.add('animate__fadeIn');
          element.style.opacity = '1';
        }
      }
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  }

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 72,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  // Update copyright year dynamically
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // WhatsApp Floating Button Enhancement
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    // Hide the WhatsApp button initially
    whatsappFloat.style.opacity = '0';
    
    // Show WhatsApp button after 3 seconds
    setTimeout(() => {
      whatsappFloat.style.opacity = '1';
      whatsappFloat.style.transition = 'opacity 0.5s ease';
    }, 3000);

    // Create and display a notification after 5 seconds
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'whatsapp-notification';
      notification.innerHTML = '<p>Need help? <strong>Chat with me!</strong></p>';      notification.style.position = 'fixed';
      notification.style.bottom = '100px';
      notification.style.right = '20px';
      notification.style.backgroundColor = '#fff';
      notification.style.padding = '10px 15px';
      notification.style.borderRadius = '8px';
      notification.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
      notification.style.zIndex = '998';
      notification.style.maxWidth = '200px';
      notification.style.animation = 'fadeIn 0.5s ease';
      notification.style.border = '1px solid #eaeaea';
      notification.style.fontSize = '14px';
      
      // Add animation keyframes
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
      
      // Add close button
      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '5px';
      closeBtn.style.right = '10px';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.fontSize = '16px';
      closeBtn.style.fontWeight = 'bold';
      closeBtn.onclick = function() {
        document.body.removeChild(notification);
      };
      
      notification.appendChild(closeBtn);
      document.body.appendChild(notification);
      
      // Auto-hide notification after 8 seconds
      setTimeout(() => {
        if (document.body.contains(notification)) {
          notification.style.opacity = '0';
          notification.style.transition = 'opacity 0.5s ease';
          
          setTimeout(() => {
            if (document.body.contains(notification)) {
              document.body.removeChild(notification);
            }
          }, 500);
        }
      }, 8000);
    }, 5000);
  }

});
