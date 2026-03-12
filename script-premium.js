// Script Minimalista para Animações e Scroll (Performance First)
document.addEventListener('DOMContentLoaded', () => {

    // 1. Otimização de Parallax no Hero 
    // Usa RequestAnimationFrame para evitar reflows pesados
    const heroImage = document.querySelector('.animate-float');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                // Aplica transformações leves com will-change
                if (heroImage && scrolled < window.innerHeight) {
                    heroImage.style.transform = `translateY(${scrolled * 0.15}px) scale(${1 + scrolled * 0.0005})`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // 2. Intersection Observer para Entradas Triunfais em Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Gatilho de 15% visível
    };

    const revealOnScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona classe de animação e limpa opacidade
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.opacity = '1';
                
                // Desativa a observação após entrar para performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Preparando elementos
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el, index) => {
        // Estado inicial
        el.style.opacity = '0';
        
        // Staggered effect - adicionando delays variados para não abrir tudo junto em blocos grandes
        if(!el.style.animationDelay) {
            el.style.animationDelay = `${(index % 3) * 0.15}s`;
        }
        
        revealOnScrollObserver.observe(el);
    });

});
