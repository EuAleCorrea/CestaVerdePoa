/* ===========================================
   BENDITA HORTA - SCRIPT.JS
   Funcionalidades interativas
   =========================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ===========================================
    // SLIDER DO HERO
    // ===========================================
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Remove active de todos
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Ajusta índice se necessário
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        // Adiciona active ao slide atual
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Event listeners do slider
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Inicia autoplay
    if (slides.length > 0) {
        startAutoSlide();
    }

    // ===========================================
    // MENU MOBILE
    // ===========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

    function openMobileMenu() {
        mobileNav.classList.add('active');
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileMenu);
    }

    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileMenu);
    }

    // Fecha menu em resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });

    // ===========================================
    // HEADER SCROLL EFFECT
    // ===========================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ===========================================
    // ANIMAÇÃO DE SCROLL
    // ===========================================
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.produto-card, .diferencial, .banner-item');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Estilo inicial para animação
    document.querySelectorAll('.produto-card, .diferencial, .banner-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Executa animação
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executa uma vez no load

    // ===========================================
    // NEWSLETTER FORM
    // ===========================================
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = newsletterForm.querySelector('input[type="text"]').value;
            const email = newsletterForm.querySelector('input[type="email"]').value;

            if (nome && email) {
                // Simula envio
                const btn = newsletterForm.querySelector('.newsletter-btn');
                const originalText = btn.textContent;
                btn.textContent = 'Enviando...';
                btn.disabled = true;

                setTimeout(() => {
                    btn.textContent = 'Cadastrado!';
                    btn.style.background = '#00a651';
                    newsletterForm.reset();

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                    }, 2000);
                }, 1000);
            }
        });
    }

    // ===========================================
    // CARRINHO (simulação)
    // ===========================================
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 0;

    document.querySelectorAll('.btn-comprar').forEach(btn => {
        btn.addEventListener('click', () => {
            cartItems++;
            cartCount.textContent = cartItems;

            // Animação do botão
            btn.textContent = 'Adicionado!';
            btn.style.background = '#004a2f';

            setTimeout(() => {
                btn.textContent = 'Adicionar';
                btn.style.background = '';
            }, 1500);

            // Animação do carrinho
            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // ===========================================
    // BUSCA
    // ===========================================
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                console.log('Buscando:', query);
                // Aqui você implementaria a busca real
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }

    console.log('🌿 Bendita Horta - Site carregado com sucesso!');
});
