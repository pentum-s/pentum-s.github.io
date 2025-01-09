document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    let activeCard = null;
    let hoverTimeout = null;

    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                event.preventDefault();
                const isActive = card.classList.contains('hover');

                if (isActive) {
                    const anchor = card.parentElement;
                    anchor.click();
                } else {
                    if (activeCard) {
                        activeCard.classList.remove('hover');
                    }
                    activeCard = null;
                    card.classList.add('hover');
                    activeCard = card;

                    if (hoverTimeout) {
                        clearTimeout(hoverTimeout);
                    }

                    hoverTimeout = setTimeout(() => {
                        card.classList.remove('hover');
                        activeCard = null;
                    }, 10000);
                }
            }
        });
    });

    document.addEventListener('click', function(event) {
        if (activeCard && !activeCard.contains(event.target)) {
            activeCard.classList.remove('hover');
            activeCard = null;
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }
        }
    });
});