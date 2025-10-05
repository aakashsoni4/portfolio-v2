gsap.registerPlugin(ScrollTrigger);

        // About + Skills Animation
        gsap.from(".about-img", { scrollTrigger: { trigger: ".about", start: "top 70%" }, opacity: 0, y: 100, duration: 1.8 });
        gsap.from(".about-content", { scrollTrigger: { trigger: ".about", start: "top 70%" }, opacity: 0, x: 100, duration: 1.8 });
        gsap.from(".skill-btn", { scrollTrigger: { trigger: ".skills", start: "top 85%" }, opacity: 0, y: 50, duration: 1, stagger: 0.2 });

        // Projects Animation
        gsap.utils.toArray('.project-block').forEach((block, i) => {
            const direction = i % 2 === 0 ? -100 : 100;
            gsap.from(block.querySelector('.project-image'), { x: direction, opacity: 0, duration: 1.2, scrollTrigger: { trigger: block, start: "top 80%" } });
            gsap.from(block.querySelector('.project-content'), { x: -direction, opacity: 0, duration: 1.2, scrollTrigger: { trigger: block, start: "top 80%" } });
        });

        // Gallery Animation
        gsap.utils.toArray('.gallery-item').forEach((item, i) => {
            gsap.from(item, { scrollTrigger: { trigger: item, start: "top 85%" }, y: 50, opacity: 0, duration: 1, delay: i * 0.1 });
        });

        // Testimonials Carousel
        const cards = document.querySelectorAll('.testimonial-card');
        const dotsContainer = document.querySelector('.carousel-dots');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        let currentIndex = 0;
        cards[currentIndex].classList.add('active');

        cards.forEach((_, i) => {
            const dot = document.createElement('span');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        function updateActive() {
            cards.forEach((c, i) => c.classList.toggle('active', i === currentIndex));
            dotsContainer.querySelectorAll('span').forEach((d, i) => d.classList.toggle('active', i === currentIndex));
        }

        function goToSlide(index) { currentIndex = index; updateActive(); }

        nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % cards.length; goToSlide(currentIndex); });
        prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + cards.length) % cards.length; goToSlide(currentIndex); });

        setInterval(() => { currentIndex = (currentIndex + 1) % cards.length; goToSlide(currentIndex); }, 5000);

        // Contact Inputs Animation
        gsap.from(".contact-input", { scrollTrigger: { trigger: ".contact", start: "top 80%" }, y: 50, opacity: 0, duration: 1, stagger: 0.2 });
        gsap.from(".contact-submit", { scrollTrigger: { trigger: ".contact", start: "top 80%" }, y: 50, opacity: 0, duration: 1, delay: 0.6 });

        // Submit button glow & bounce
        const submitBtn = document.querySelector(".contact-submit");
        submitBtn.addEventListener("click", () => {
            submitBtn.classList.add("clicked");
            setTimeout(() => submitBtn.classList.remove("clicked"), 600);
        });

        gsap.registerPlugin(ScrollTrigger);

        // Animate footer sections
        gsap.from(".footer-logo", {
            scrollTrigger: {
                trigger: ".footer-logo",
                start: "top 85%",
            },
            x: -80,
            opacity: 0,
            duration: 1
        });

        gsap.from(".footer-nav", {
            scrollTrigger: {
                trigger: ".footer-nav",
                start: "top 85%",
            },
            y: 60,
            opacity: 0,
            duration: 1
        });

        gsap.from(".footer-contact", {
            scrollTrigger: {
                trigger: ".footer-contact",
                start: "top 85%",
            },
            x: 80,
            opacity: 0,
            duration: 1
        });

        // Animate nav links staggered
        gsap.from(".footer-nav ul li", {
            scrollTrigger: {
                trigger: ".footer-nav ul",
                start: "top 90%",
            },
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2
        });

        // Bottom section animation
        gsap.from(".footer-bottom", {
            scrollTrigger: {
                trigger: ".footer-bottom",
                start: "top 100%",
            },
            y: 60,
            opacity: 0,
            duration: 1
        });