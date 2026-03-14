
// /*========================================================
// Menu de Navegação Home para Desktop e Mobile
// ==========================================================*/

//    const roles = [
//       "Desenvolvedor Web Full Stack",
//       "Certificação Microsoft",
//       "Suporte Técnico Sênior",
//       "Solucionador de Problemas"
//     ];

//     let roleIndex = 0, charIndex = 0, deleting = false;
//     const el = document.getElementById("typed");

//     function type() {
//       const current = roles[roleIndex];
//       el.textContent = deleting
//         ? current.slice(0, --charIndex)
//         : current.slice(0, ++charIndex);

//       if (!deleting && charIndex === current.length) {
//         deleting = true;
//         setTimeout(type, 1800);
//         return;
//       }
//       if (deleting && charIndex === 0) {
//         deleting = false;
//         roleIndex = (roleIndex + 1) % roles.length;
//       }
//       setTimeout(type, deleting ? 45 : 80);
//     }

//     type();

//     // Hamburger menu
//     const menuBtn    = document.getElementById('menuBtn');
//     const mobileMenu = document.getElementById('mobileMenu');

//     menuBtn.addEventListener('click', () => {
//       const isOpen = mobileMenu.classList.toggle('open');
//       menuBtn.classList.toggle('open', isOpen);
//       menuBtn.setAttribute('aria-expanded', isOpen);
//       mobileMenu.setAttribute('aria-hidden', !isOpen);
//     });

//     // Fechar ao clicar em qualquer link do menu mobile
//     mobileMenu.querySelectorAll('a').forEach(link => {
//       link.addEventListener('click', () => {
//         mobileMenu.classList.remove('open');
//         menuBtn.classList.remove('open');
//         menuBtn.setAttribute('aria-expanded', false);
//         mobileMenu.setAttribute('aria-hidden', true);
//       });
//     });

//     /*Fim do Menu De Navegação Home Desktop e Mobile*/

// /* =========================
//    HEADER STICKY
// ========================= */
// const header = document.querySelector("header");

// window.addEventListener("scroll", () => {
//     header.classList.toggle("sticky", window.scrollY > 50);
// });


// /* =========================
//    Abre e Fecha Do Modal de Especialidades
// ========================= */
//  function openModal(id) {
//                         document.getElementById(id).classList.add('open');
//                         document.body.style.overflow = 'hidden';
//                     }
//                     function closeModal(id) {
//                         document.getElementById(id).classList.remove('open');
//                         document.body.style.overflow = '';
//                     }
//                     function handleOverlayClick(e, id) {
//                         if (e.target === e.currentTarget) closeModal(id);
//                     }
//                     document.addEventListener('keydown', e => {
//                         if (e.key === 'Escape') {
//                             document.querySelectorAll('.overlay.open').forEach(el => el.classList.remove('open'));
//                             document.body.style.overflow = '';
//                         }
//                     });

// /*Fim do Abre e Fecha Do Modal de Especialidades  */


// /*===============================        
// Carrossel da area de Projetos - esta ativo
// =====================================*/
// (function () {
//     const track    = document.getElementById('fp-track');
//     const btnPrev  = document.getElementById('fp-prev');
//     const btnNext  = document.getElementById('fp-next');
//     const counter  = document.getElementById('fp-counter');
//     const dotsWrap = document.getElementById('fp-dots');
//     const cards    = Array.from(track.querySelectorAll('.fp-card'));
//     const total    = cards.length;
//     let current    = 0;
//     let isDragging = false;
//     let startX     = 0;
//     let scrollLeft = 0;

//     /* ── DOTS ── */
//     cards.forEach((_, i) => {
//         const btn = document.createElement('button');
//         btn.className = 'fp-dot' + (i === 0 ? ' fp-active' : '');
//         btn.setAttribute('role', 'tab');
//         btn.setAttribute('aria-label', `Ir para projeto ${i + 1}`);
//         btn.addEventListener('click', () => goTo(i));
//         dotsWrap.appendChild(btn);
//     });

//     function updateDots() {
//         dotsWrap.querySelectorAll('.fp-dot').forEach((d, i) => {
//             d.classList.toggle('fp-active', i === current);
//         });
//     }

//     function updateCounter() {
//         counter.innerHTML = `<span>${current + 1}</span> / ${total}`;
//     }

//     /* ── SCROLL PARA CARD ── */
//     function goTo(index) {
//         current = Math.max(0, Math.min(index, total - 1));
//         const card = cards[current];
//         const outer = track.parentElement;
//         const offset = card.offsetLeft - outer.offsetWidth / 2 + card.offsetWidth / 2;
//         outer.scrollTo({ left: offset, behavior: 'smooth' });
//         updateDots();
//         updateCounter();
//     }

//     btnPrev.addEventListener('click', () => goTo(current - 1));
//     btnNext.addEventListener('click', () => goTo(current + 1));

//     /* atualiza current no scroll */
//     track.parentElement.addEventListener('scroll', () => {
//         const outer = track.parentElement;
//         const center = outer.scrollLeft + outer.offsetWidth / 2;
//         let closest = 0;
//         let minDist = Infinity;
//         cards.forEach((c, i) => {
//             const dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
//             if (dist < minDist) { minDist = dist; closest = i; }
//         });
//         if (closest !== current) {
//             current = closest;
//             updateDots();
//             updateCounter();
//         }
//     }, { passive: true });

//     /* ── DRAG TO SCROLL ── */
//     const outer = track.parentElement;
//     outer.style.overflowX = 'scroll';
//     outer.style.scrollbarWidth = 'none';
//     outer.style.cursor = 'grab';

//     outer.addEventListener('mousedown', e => {
//         isDragging = true;
//         startX = e.pageX - outer.offsetLeft;
//         scrollLeft = outer.scrollLeft;
//         outer.style.cursor = 'grabbing';
//     });
//     outer.addEventListener('mouseleave', () => { isDragging = false; outer.style.cursor = 'grab'; });
//     outer.addEventListener('mouseup',    () => { isDragging = false; outer.style.cursor = 'grab'; });
//     outer.addEventListener('mousemove', e => {
//         if (!isDragging) return;
//         e.preventDefault();
//         const x = e.pageX - outer.offsetLeft;
//         outer.scrollLeft = scrollLeft - (x - startX) * 1.2;
//     });

//     /* ── TECLADO ── */
//     document.addEventListener('keydown', e => {
//         if (e.key === 'ArrowLeft')  goTo(current - 1);
//         if (e.key === 'ArrowRight') goTo(current + 1);
//     });

//     /* ── VÍDEO: autoplay no hover ── */
//     cards.forEach(card => {
//         const video = card.querySelector('.fp-media-video');
//         if (!video) return;

//         card.addEventListener('mouseenter', () => {
//             if (!video.src || video.src === window.location.href) return;
//             video.play().catch(() => {});
//         });

//         card.addEventListener('mouseleave', () => {
//             video.pause();
//             video.currentTime = 0;
//         });
//     });

//     /* init */
//     updateCounter();
//     goTo(0);
// })();
// /*Fim Carrossel da area de Projetos  */


// /*==========================================
// Area Footer
// // ===========================================*/
//     document.addEventListener('DOMContentLoaded', function() {
//         const langSwitcher = document.querySelectorAll('.fsft-lang-option');
//         const texts = document.querySelectorAll('[data-fsft-lang]');

//         // Inicializa mostrando apenas o idioma padrão
//         const defaultLang = document.getElementById('fsft-root').getAttribute('data-lang');
//         texts.forEach(text => {
//             text.style.display = text.getAttribute('data-fsft-lang') === defaultLang ? 'inline' : 'none';
//         });

//         langSwitcher.forEach(button => {
//             button.addEventListener('click', function() {
//                 const selectedLang = this.getAttribute('data-lang');
                

//                 // Atualiza o atributo data-lang do root
//                 document.getElementById('fsft-root').setAttribute('data-lang', selectedLang);

//                 // Esconder textos de todos os idiomas
//                 texts.forEach(text => {
//                     text.style.display = text.getAttribute('data-fsft-lang') === selectedLang ? 'inline' : 'none';
//                 });

//                 // Atualizar o estado dos botões
//                 langSwitcher.forEach(btn => {
//                     btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === selectedLang);
//                 });
//             });
//         });
//     });
// /*-------------Fim da Area do Footer-----------------------------*/

// /*===============================================
// Botão Voltar ao Topo esse esta ativo
// =================================================*/
//  const btn = document.getElementById("fsft-top-btn");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 200) { 
//       btn.classList.add("fsft-visible");
//     } else {
//       btn.classList.remove("fsft-visible");
//     }
//   });
// /*Fim do Botão Voltar ao Topo*/













/*========================================================
  Menu de Navegação Home para Desktop e Mobile
==========================================================*/

const roles = [
  "Desenvolvedor Web Full Stack",
  "Certificação Microsoft",
  "Suporte Técnico",
  "Solucionador de Problemas"
];

let roleIndex = 0, charIndex = 0, deleting = false;
const el = document.getElementById("typed");

function type() {
  const current = roles[roleIndex];
  el.textContent = deleting
    ? current.slice(0, --charIndex)
    : current.slice(0, ++charIndex);

  if (!deleting && charIndex === current.length) {
    deleting = true;
    setTimeout(type, 1800);
    return;
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  // ACESSIBILIDADE: respeita prefers-reduced-motion — para a animação se usuário preferir
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  setTimeout(type, prefersReduced ? 0 : (deleting ? 45 : 80));
}

// Só inicia o typing se o elemento existir
if (el) type();

/* ── Hamburger menu ── */
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuBtn.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);

    // ACESSIBILIDADE: move o foco para o primeiro link do menu ao abrir
    if (isOpen) {
      const firstLink = mobileMenu.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      menuBtn.focus();
    }
  });

  // Fechar ao clicar em qualquer link do menu mobile
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
      menuBtn.focus(); // ACESSIBILIDADE: devolve foco ao botão de menu
    });
  });

  // ACESSIBILIDADE: ESC fecha o menu mobile
  mobileMenu.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      mobileMenu.classList.remove('open');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', false);
      mobileMenu.setAttribute('aria-hidden', true);
      menuBtn.focus();
    }
  });
}

/*  Fim do Menu De Navegação Home Desktop e Mobile  */


/* =========================
   HEADER STICKY
========================= */
const header = document.querySelector("header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
  }, { passive: true });
}


/* =========================
   Abre e Fecha Do Modal de Especialidades
========================= */

// ACESSIBILIDADE: anuncia abertura do modal para leitores de tela
const modalAnnounce = document.getElementById('modal-announce');

// ACESSIBILIDADE: guarda qual elemento estava focado antes de abrir o modal
let lastFocusedElement = null;

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  // Guarda o elemento que estava focado (botão que abriu o modal)
  lastFocusedElement = document.activeElement;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // ACESSIBILIDADE: move o foco para o botão de fechar ao abrir
  const closeBtn = modal.querySelector('.close-btn');
  if (closeBtn) {
    // Pequeno delay para garantir que o modal está visível antes do foco
    setTimeout(() => closeBtn.focus(), 50);
  }

  // ACESSIBILIDADE: anuncia o modal para leitores de tela via aria-live
  if (modalAnnounce) {
    const title = modal.querySelector('.modal-title');
    if (title) {
      modalAnnounce.textContent = '';
      setTimeout(() => {
        modalAnnounce.textContent = 'Modal aberto: ' + title.textContent.trim();
      }, 100);
    }
  }

  // ACESSIBILIDADE: atualiza o título da página
  const title = modal.querySelector('.modal-title');
  if (title) {
    document.title = title.textContent.trim() + ' — Fernando Santos';
  }

  // ACESSIBILIDADE: ativa o focus trap dentro do modal
  trapFocus(modal);
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  modal.classList.remove('open');
  document.body.style.overflow = '';

  // ACESSIBILIDADE: restaura o título original da página
  document.title = 'Fernando Santos | Desenvolvedor Front-End com experiência em TI Corporativa';

  // ACESSIBILIDADE: limpa o anúncio
  if (modalAnnounce) modalAnnounce.textContent = '';

  // ACESSIBILIDADE: devolve o foco ao elemento que abriu o modal
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

function handleOverlayClick(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}

// ACESSIBILIDADE: ESC fecha qualquer modal aberto
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.overlay.open').forEach(el => {
      closeModal(el.id);
    });
  }
});

/* ── Focus Trap: mantém o foco dentro do modal enquanto está aberto ── */
function trapFocus(modal) {
  // Seleciona todos os elementos focáveis dentro do modal
  const focusableSelectors = [
    'button:not([disabled])',
    '[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(', ');

  const focusableElements = Array.from(modal.querySelectorAll(focusableSelectors));
  if (focusableElements.length === 0) return;

  const firstFocusable = focusableElements[0];
  const lastFocusable  = focusableElements[focusableElements.length - 1];

  // Remove listener anterior para evitar duplicação
  if (modal._trapHandler) modal.removeEventListener('keydown', modal._trapHandler);

  modal._trapHandler = function(e) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      // Shift+Tab: se estiver no primeiro elemento, vai para o último
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab: se estiver no último elemento, vai para o primeiro
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  };

  modal.addEventListener('keydown', modal._trapHandler);
}

/*  Fim do Abre e Fecha Do Modal de Especialidades  */


/*==========================================
  Carrossel da área de Projetos
============================================*/
(function () {
  const track    = document.getElementById('fp-track');
  const btnPrev  = document.getElementById('fp-prev');
  const btnNext  = document.getElementById('fp-next');
  const counter  = document.getElementById('fp-counter');
  const dotsWrap = document.getElementById('fp-dots');

  if (!track || !btnPrev || !btnNext || !counter || !dotsWrap) return;

  const cards    = Array.from(track.querySelectorAll('.fp-card'));
  const total    = cards.length;
  let current    = 0;
  let isDragging = false;
  let startX     = 0;
  let scrollLeft = 0;

  /* ── DOTS ── */
  cards.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'fp-dot' + (i === 0 ? ' fp-active' : '');
    btn.setAttribute('role', 'tab');
    // ACESSIBILIDADE: aria-label e aria-selected nos dots
    btn.setAttribute('aria-label', `Ir para projeto ${i + 1}`);
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(btn);
  });

  function updateDots() {
    dotsWrap.querySelectorAll('.fp-dot').forEach((d, i) => {
      const isActive = i === current;
      d.classList.toggle('fp-active', isActive);
      // ACESSIBILIDADE: atualiza aria-selected ao navegar
      d.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  function updateCounter() {
    counter.innerHTML = `<span>${current + 1}</span> / ${total}`;
  }

  /* ── ACESSIBILIDADE: atualiza aria dos botões prev/next ── */
  function updateNavButtons() {
    btnPrev.setAttribute('aria-disabled', current === 0 ? 'true' : 'false');
    btnNext.setAttribute('aria-disabled', current === total - 1 ? 'true' : 'false');
  }

  /* ── SCROLL PARA CARD ── */
  function goTo(index) {
    current = Math.max(0, Math.min(index, total - 1));
    const card  = cards[current];
    const outer = track.parentElement;
    const offset = card.offsetLeft - outer.offsetWidth / 2 + card.offsetWidth / 2;
    outer.scrollTo({ left: offset, behavior: 'smooth' });
    updateDots();
    updateCounter();
    updateNavButtons();
  }

  btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext.addEventListener('click', () => goTo(current + 1));

  /* atualiza current no scroll */
  track.parentElement.addEventListener('scroll', () => {
    const outer  = track.parentElement;
    const center = outer.scrollLeft + outer.offsetWidth / 2;
    let closest  = 0;
    let minDist  = Infinity;
    cards.forEach((c, i) => {
      const dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    if (closest !== current) {
      current = closest;
      updateDots();
      updateCounter();
      updateNavButtons();
    }
  }, { passive: true });

  /* ── DRAG TO SCROLL ── */
  const outer = track.parentElement;
  outer.style.overflowX    = 'scroll';
  outer.style.scrollbarWidth = 'none';
  outer.style.cursor       = 'grab';

  outer.addEventListener('mousedown', e => {
    isDragging = true;
    startX     = e.pageX - outer.offsetLeft;
    scrollLeft = outer.scrollLeft;
    outer.style.cursor = 'grabbing';
  });
  outer.addEventListener('mouseleave', () => { isDragging = false; outer.style.cursor = 'grab'; });
  outer.addEventListener('mouseup',    () => { isDragging = false; outer.style.cursor = 'grab'; });
  outer.addEventListener('mousemove', e => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - outer.offsetLeft;
    outer.scrollLeft = scrollLeft - (x - startX) * 1.2;
  });

  /* ── TECLADO: setas navegam o carrossel apenas se foco estiver nele ── */
  // ACESSIBILIDADE: as setas só afetam o carrossel quando ele está em foco
  // para não conflitar com a navegação geral da página
  outer.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(current - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
  });

  /* ── VÍDEO: autoplay no hover ── */
  // ACESSIBILIDADE: respeita prefers-reduced-motion para autoplay de vídeo
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach(card => {
    const video = card.querySelector('.fp-media-video');
    if (!video) return;

    if (prefersReduced) return; // não faz autoplay se usuário preferir menos movimento

    card.addEventListener('mouseenter', () => {
      if (!video.src || video.src === window.location.href) return;
      video.play().catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  /* init */
  updateCounter();
  updateNavButtons();
  goTo(0);
})();

/*  Fim Carrossel da área de Projetos  */



/*==========================================
  Footer — Toggle de Idioma PT/EN
============================================*/
document.addEventListener('DOMContentLoaded', function () {
  const langSwitcher = document.querySelectorAll('.fsft-lang-option');
  const texts        = document.querySelectorAll('[data-fsft-lang]');
  const root         = document.getElementById('fsft-root');

  if (!root) return;

  const defaultLang = root.getAttribute('data-lang') || 'pt';

  // Inicializa mostrando apenas o idioma padrão
  texts.forEach(text => {
    text.style.display = text.getAttribute('data-fsft-lang') === defaultLang ? 'inline' : 'none';
  });

  langSwitcher.forEach(button => {
    button.addEventListener('click', function () {
      const selectedLang = this.getAttribute('data-lang');

      // Atualiza o atributo data-lang do root
      root.setAttribute('data-lang', selectedLang);

      // ACESSIBILIDADE: atualiza lang do html para leitores de tela pronunciarem corretamente
      document.documentElement.setAttribute('lang', selectedLang === 'en' ? 'en' : 'pt-BR');

      // Exibe textos do idioma selecionado
      texts.forEach(text => {
        text.style.display = text.getAttribute('data-fsft-lang') === selectedLang ? 'inline' : 'none';
      });

      // Atualiza estado dos botões
      langSwitcher.forEach(btn => {
        btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === selectedLang ? 'true' : 'false');
      });
    });
  });
});

/*  Fim da área do Footer  */


/*===============================================
  Botão Voltar ao Topo
=================================================*/
const topBtn = document.getElementById("fsft-top-btn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("fsft-visible", window.scrollY > 200);
  }, { passive: true });
}

/*  Fim do Botão Voltar ao Topo  */


/*===============================================
  ACESSIBILIDADE: Elemento aria-live para modais
  (deve existir no HTML — se não existir, cria)
=================================================*/
document.addEventListener('DOMContentLoaded', function () {
  if (!document.getElementById('modal-announce')) {
    const liveRegion = document.createElement('div');
    liveRegion.id = 'modal-announce';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
    document.body.appendChild(liveRegion);
  }
});

/*===============================================
  ACESSIBILIDADE: Animações — respeita
  prefers-reduced-motion via JS para elementos
  controlados por script (typing, carrossel, etc)
=================================================*/
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

motionQuery.addEventListener('change', () => {
  // Se o usuário mudar a preferência em tempo real, pausa vídeos em loop
  if (motionQuery.matches) {
    document.querySelectorAll('.fp-media-video').forEach(v => {
      v.pause();
    });
  }
});                                                                                                                                                         



























