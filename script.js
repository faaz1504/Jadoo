// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Video Demo Modal Launcher
    const playDemoBtn = document.getElementById('playDemoBtn');
    const videoModalElement = document.getElementById('videoModal');
    
    if (playDemoBtn && videoModalElement) {
        const videoModal = new bootstrap.Modal(videoModalElement);
        playDemoBtn.addEventListener('click', () => {
            videoModal.show();
        });
    }

    // 2. Interactive Heart Button on Trip Card
    const tripHeartBtn = document.getElementById('tripHeartBtn');
    if (tripHeartBtn) {
        tripHeartBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                this.classList.add('scale-bounce');
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    }

    // 3. Testimonial Stack Switcher
    const testimonialsData = [
        {
            name: "Mike Taylor",
            location: "Lahore, Pakistan",
            text: `"On the Windows talking painted quam nullam numquid. Investor and serial entrepreneur. She end send Sub-Tab."`,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
        },
        {
            name: "Chris Thomas",
            location: "CEO of Redford",
            text: `"Jadoo made our family vacation seamless and unforgettable! Excellent bookings, flights and 24/7 service."`,
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
        },
        {
            name: "Sophia Martinez",
            location: "Madrid, Spain",
            text: `"Best travel experience of my life! Recommended to all my friends and family. Super smooth UI & experience."`,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
        }
    ];

    let currentIndex = 0;
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const activeCard = document.querySelector('.testimonial-active');
    const backCard = document.querySelector('.testimonial-back');
    const dots = document.querySelectorAll('#testimonialDots .dot');

    function updateTestimonial(index) {
        currentIndex = (index + testimonialsData.length) % testimonialsData.length;
        const currentData = testimonialsData[currentIndex];
        const nextData = testimonialsData[(currentIndex + 1) % testimonialsData.length];

        if (activeCard && currentData) {
            activeCard.querySelector('.testimonial-avatar').src = currentData.avatar;
            activeCard.querySelector('.testimonial-text').innerText = currentData.text;
            activeCard.querySelector('h4').innerText = currentData.name;
            activeCard.querySelector('.text-muted.fs-7').innerText = currentData.location;
        }

        if (backCard && nextData) {
            backCard.querySelector('.testimonial-avatar').src = nextData.avatar;
            backCard.querySelector('.testimonial-text').innerText = nextData.text;
            backCard.querySelector('h4').innerText = nextData.name;
            backCard.querySelector('.text-muted.fs-7').innerText = nextData.location;
        }

        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => updateTestimonial(currentIndex - 1));
        nextBtn.addEventListener('click', () => updateTestimonial(currentIndex + 1));
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => updateTestimonial(idx));
    });

    // 4. Newsletter Subscription Submit
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('subscribeEmail').value;
            if (email) {
                alert(`Thank you for subscribing with ${email}! Check your inbox for exclusive Jadoo travel deals.`);
                subscribeForm.reset();
            }
        });
    }

    // 5. Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Logged in successfully! Welcome to Jadoo.');
            const modalEl = document.getElementById('loginModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
        });
    }
});
