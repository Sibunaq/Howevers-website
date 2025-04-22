// beginning of basket script
// This script handles the basket menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const basketButton = document.querySelector('.basket-button');
    const basketMenu = document.querySelector('.basket-menu');
    const closeBasket = document.querySelector('.close-basket');
    
    // Toggle basket menu
    basketButton.addEventListener('click', (e) => {
        e.stopPropagation();
        basketMenu.classList.toggle('hidden');
    });
    
    // Close basket when clicking the close button
    closeBasket.addEventListener('click', () => {
        basketMenu.classList.add('hidden');
    });
    
    // Close basket when clicking outside
    document.addEventListener('click', (e) => {
        if (!basketMenu.contains(e.target) && !basketButton.contains(e.target)) {
            basketMenu.classList.add('hidden');
        }
    });
    
    // Prevent menu from closing when clicking inside
    basketMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
//end of basket script


// Shop page functionality
document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    function startCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;

        let hours = 24;
        let minutes = 0;
        let seconds = 0;

        const countdown = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                clearInterval(countdown);
            }

            countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    startCountdown();

    // Smooth scroll for "Shop Now" button
    const shopNowBtn = document.querySelector('.cta-button');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', () => {
            document.querySelector('.products').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});
//end of shop page functionality
