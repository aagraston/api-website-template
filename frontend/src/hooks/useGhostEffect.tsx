import { useEffect } from 'react';

const useGhostEffect = () => {
    useEffect(() => {
        const initializeEffect = () => {
            let lastScrollY = window.scrollY;
            let lastTimestamp = performance.now();
            let scrollTimeout: NodeJS.Timeout;

            const handleScroll = () => {
                const ghostElements = document.querySelectorAll('.ghost-effect');
                if (!ghostElements.length) return; // Ensure elements exist

                const currentScrollY = window.scrollY;
                const currentTimestamp = performance.now();
                const deltaY = currentScrollY - lastScrollY;
                const deltaTime = currentTimestamp - lastTimestamp;

                const scrollSpeed = deltaY / deltaTime;
                const mappedScrollSpeed = Math.max(-1, Math.min(1, scrollSpeed));

                ghostElements.forEach((element) => {
                    (element as HTMLElement).style.setProperty('--ghost-transform', `${-mappedScrollSpeed * 4}px`);

                    const absMappedScrollSpeed = Math.abs(mappedScrollSpeed);
                    const color = `rgba(${80 + absMappedScrollSpeed * 20}, ${230 + absMappedScrollSpeed * -200}, ${220 + absMappedScrollSpeed * 700}, 0.63)`;
                    (element as HTMLElement).style.setProperty('--ghost-color', color);
                });

                lastScrollY = currentScrollY;
                lastTimestamp = currentTimestamp;

                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    ghostElements.forEach((element) => {
                        (element as HTMLElement).style.setProperty('--ghost-transform', '0.4px');
                    });
                }, 300);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                clearTimeout(scrollTimeout);
            };
        };

        // Ensure the document is fully loaded before running the effect
        if (document.readyState === 'complete') {
            initializeEffect();
        } else {
            const onLoad = () => {
                initializeEffect();
                window.removeEventListener('load', onLoad);
            };
            window.addEventListener('load', onLoad);
        }
    }, []);
};

export default useGhostEffect;