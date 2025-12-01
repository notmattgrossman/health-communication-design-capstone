document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const landingCover = document.querySelector('.landing-cover');

    // Handle Menu Toggle Click
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('open');
            menuToggle.classList.toggle('open');
        });
    }

    // Handle Scroll Logic for Landing Page
    if (landingCover && menuToggle && mobileMenu) {
        const updateVisibility = () => {
            const landingBottom = landingCover.getBoundingClientRect().bottom;
            
            // Check if we've scrolled past the landing cover
            // Use 50px buffer for the header height
            if (landingBottom <= 50) {
                menuToggle.style.opacity = '1';
                menuToggle.style.pointerEvents = 'auto';
                mobileMenu.style.display = 'block';
                // Small delay to allow display:block to apply before visibility change (if any other transitions exist)
                requestAnimationFrame(() => {
                     mobileMenu.style.visibility = 'visible';
                });
            } else {
                menuToggle.style.opacity = '0';
                menuToggle.style.pointerEvents = 'none';
                
                // Close menu first
                if (mobileMenu.classList.contains('open')) {
                    mobileMenu.classList.remove('open');
                    menuToggle.classList.remove('open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }

                // Wait for transition to finish before hiding completely
                // But for the flashing issue, we want to hide it immediately if we are scrolling up past the point
                mobileMenu.style.visibility = 'hidden';
                mobileMenu.style.display = 'none';
            }
        };

        // Set initial transition
        menuToggle.style.transition = 'opacity 0.3s ease';
        
        // Run once on load to set initial state
        updateVisibility();

        // Run on scroll
        window.addEventListener('scroll', updateVisibility);
    }
});
