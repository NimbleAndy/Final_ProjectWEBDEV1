const HambBtn = document.getElementById('navbar-toggler')
const navLinks = document.getElementById('nav-link');
document.addEventListener("DOMContentLoaded", function() {
    const scrollRevealOption = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    }
    ScrollReveal().reveal(".header__image img",{
        ...scrollRevealOption,
        
    });
    
    ScrollReveal().reveal(".header_content h4, .header_content .content_section",{
        ...scrollRevealOption,
        delya: 500,
    });

    ScrollReveal().reveal(".header_content p",{
        ...scrollRevealOption,
        delay:600,
    }
    )
    
    ScrollReveal().reveal(".btn",{
        ...scrollRevealOption,
        delay:900,
    }
    )
    ScrollReveal().reveal(".price_card",{
        ...scrollRevealOption,
        interval: 500,
    })
  });
  


