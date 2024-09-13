let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {

        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);

    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
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

};

changeText();
setInterval(changeText, 3000);

//circle skill

const circles = document.querySelectorAll(".circle");
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {

        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
    }


})

//mix it up portfolio section 
var mixer = mixitup('.portfolio-gallery');

//Ativar menu contato section ///
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu() {
    let len = section.length
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");

}

activeMenu();
window.addEventListener("scroll", activeMenu);

// section navbar ///
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50)
});


// section navbar ///
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");

}


window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");

}


//parallax ///
// Defina as variáveis primeiro
const scrollScale = document.querySelectorAll(".scroll-scale");
const scrollBottom = document.querySelectorAll(".scroll-bottom");
const scrollTop = document.querySelectorAll(".scroll-top");

// Crie o Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

// Observe os elementos
scrollScale.forEach((el) => observer.observe(el));
scrollBottom.forEach((el) => observer.observe(el));
scrollTop.forEach((el) => observer.observe(el));


// Função para abrir o modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Adiciona eventos aos botões "Leia Mais"
document.querySelectorAll("button[data-modal]").forEach(button => {
    button.onclick = function () {
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
    };
});

// Adiciona eventos de fechamento ao botão de fechar e ao clicar fora do modal
document.querySelectorAll('.close').forEach(span => {
    span.onclick = function () {
        closeModal(this.closest('.modal'));
    };
});

window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
};




