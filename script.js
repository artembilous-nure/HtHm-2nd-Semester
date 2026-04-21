const scrollToTopBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    // Якщо прокрутили більше 150 пікселів вниз
    if (window.scrollY > 150) {
        scrollToTopBtn.classList.add('scroll-btn_visible'); // БЕМ-модифікатор
    } else {
        scrollToTopBtn.classList.remove('scroll-btn_visible');
    }
});


scrollToTopBtn.onclick = () => {
    const start = window.scrollY;
    const duration = 800;
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, start * (1 - easeProgress));
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
};