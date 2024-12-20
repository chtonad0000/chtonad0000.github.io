(function () {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const [navigationEntry] = performance.getEntriesByType('navigation');
            if (!navigationEntry) {
                console.warn('Navigation timing entry not available.');
                return;
            }

            const loadTime = Math.round(navigationEntry.loadEventEnd - navigationEntry.startTime);

            const footer = document.querySelector('.footer');
            if (!footer) return;

            const stats = document.createElement('div');
            stats.textContent = `Page load time: ${loadTime} ms`;
            stats.style.fontSize = '12px';
            stats.style.textAlign = 'center';
            stats.style.color = '#ffffff';
            stats.style.marginTop = '10px';

            footer.appendChild(stats);
        }, 0);
    });
})();
