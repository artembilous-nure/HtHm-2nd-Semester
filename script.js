const scrollToTopBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    // Если прокрутили больше 300 пикселей вниз
    if (window.scrollY > 150) {
        scrollToTopBtn.classList.add('show'); // Показываем кнопку
    } else {
        scrollToTopBtn.classList.remove('show'); // Прячем кнопку
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