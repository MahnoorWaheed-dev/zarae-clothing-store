// Dark mode toggle
const toggleBtn = document.getElementById('darkmode-toggle');
const body = document.body;
const moonIcon = toggleBtn.querySelector('i');
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark');
        moonIcon.classList.remove('fa-moon');
        moonIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('dark');
        moonIcon.classList.remove('fa-sun');
        moonIcon.classList.add('fa-moon');
    }
}
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') setTheme('dark');
toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Intersection Observer for fade-up animations
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
fadeElements.forEach(el => observer.observe(el));

// Quick view alert (demo interaction)
const quickBtns = document.querySelectorAll('.quick-view');
quickBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        alert("✨ Quick View: Add to wishlist or explore details. (Demo interaction)");
    });
});

// shop now demo
const shopBtns = document.querySelectorAll('.btn-shop');
shopBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("🛍️ Explore our latest Pakistani collection — Bridal, Festive & Lawn.");
    });
});

// subtle parallax effect on hero image (mouse move)
const heroImg = document.querySelector('.hero-image img');
if (heroImg) {
    document.querySelector('.hero')?.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        heroImg.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -3}deg)`;
    });
    document.querySelector('.hero')?.addEventListener('mouseleave', () => {
        heroImg.style.transform = `perspective(1000px) rotateY(-4deg) rotateX(0deg)`;
    });
}
