/* =========================
   TEXTO ANIMADO
========================= */
let words = document.querySelectorAll(".word");

words.forEach(word => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

function changeText() {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

changeText();
setInterval(changeText, 3000);


/* =========================
   CIRCLE SKILLS
========================= */
const circles = document.querySelectorAll(".circle");

circles.forEach(elem => {
    const dots = elem.getAttribute("data-dots");
    const marked = elem.getAttribute("data-percent");
    const percent = Math.floor(dots * marked / 100);
    const rotate = 360 / dots;
    let points = "";

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
    }
});


/* =========================
   MIXITUP
========================= */
var mixer = mixitup('.portfolio-gallery');


/* =========================
   MENU ATIVO NO SCROLL (CORRIGIDO)
========================= */
const navLinks = document.querySelectorAll(".navlist a");
const sections = document.querySelectorAll("section");

const observerMenu = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${entry.target.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    }
);

sections.forEach(section => observerMenu.observe(section));



/* =========================
   HEADER STICKY
========================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
});


/* =========================
   MENU MOBILE
========================= */
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
});


/* =========================
   ANIMAÇÕES SCROLL (PARALLAX)
========================= */
const scrollScale = document.querySelectorAll(".scroll-scale");
const scrollBottom = document.querySelectorAll(".scroll-bottom");
const scrollTop = document.querySelectorAll(".scroll-top");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-items", entry.isIntersecting);
    });
});

scrollScale.forEach(el => observer.observe(el));
scrollBottom.forEach(el => observer.observe(el));
scrollTop.forEach(el => observer.observe(el));


/* =========================
   MODAL
========================= */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

document.querySelectorAll("button[data-modal]").forEach(button => {
    button.onclick = function () {
        openModal(this.getAttribute("data-modal"));
    };
});

document.querySelectorAll(".close").forEach(span => {
    span.onclick = function () {
        closeModal(this.closest(".modal"));
    };
});

window.addEventListener("click", e => {
    document.querySelectorAll(".modal").forEach(modal => {
        if (e.target === modal) closeModal(modal);
    });
});


/* =========================
   COPYRIGHT
========================= */
document.querySelector(".year").innerHTML = new Date().getFullYear();

  






/*===============================
Modal Formulario para Contato
==================================*/

  // Modal controls
        const modal = document.getElementById('contactModal');
        const openBtn = document.getElementById('openModalBtn');
        const closeBtn = document.getElementById('closeModalBtn');

        // Open modal
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        });

        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Form submission
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            console.log('Form data:', data);
            
            // Here you would send to your backend/email service
            // For now, just show alert
            alert('Obrigado! Recebi sua mensagem e entrarei em contato em breve! 🚀');
            
            // Close modal and reset form
            modal.classList.remove('active');
            document.body.style.overflow = '';
            form.reset();
        });