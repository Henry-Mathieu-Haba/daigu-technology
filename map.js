// ============================================
// CARTE DE LA GUINÉE INTERACTIVE
// ============================================

const Map = {
    init() {
        const markers = document.querySelectorAll('.map-marker');

        markers.forEach(marker => {
            const tooltip = marker.querySelector('.map-tooltip');

            // Desktop hover
            marker.addEventListener('mouseenter', () => {
                if (tooltip) tooltip.style.opacity = '1';
                const dot = marker.querySelector('.map-dot');
                if (dot) dot.style.transform = 'scale(1.5)';
            });

            marker.addEventListener('mouseleave', () => {
                if (tooltip) tooltip.style.opacity = '0';
                const dot = marker.querySelector('.map-dot');
                if (dot) dot.style.transform = 'scale(1)';
            });

            // Mobile click
            marker.addEventListener('click', () => {
                const isVisible = tooltip && tooltip.style.opacity === '1';
                // Reset all
                document.querySelectorAll('.map-tooltip').forEach(t => t.style.opacity = '0');
                document.querySelectorAll('.map-dot').forEach(d => d.style.transform = 'scale(1)');
                // Toggle current
                if (!isVisible && tooltip) {
                    tooltip.style.opacity = '1';
                    const dot = marker.querySelector('.map-dot');
                    if (dot) dot.style.transform = 'scale(1.5)';
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => Map.init());