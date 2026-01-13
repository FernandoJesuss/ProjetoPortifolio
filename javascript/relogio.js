const hardSkills = [
    { name: 'JavaScript', icon: '📜', color: 'linear-gradient(135deg, #fbbf24, #d97706)' },
    { name: 'React', icon: '⚛️', color: 'linear-gradient(135deg, #60a5fa, #06b6d4)' },
    { name: 'TypeScript', icon: '📘', color: 'linear-gradient(135deg, #2563eb, #1e40af)' },
    { name: 'Node.js', icon: '🟢', color: 'linear-gradient(135deg, #22c55e, #15803d)' },
    { name: 'Git', icon: '🔀', color: 'linear-gradient(135deg, #f97316, #dc2626)' },
    { name: 'Docker', icon: '🐋', color: 'linear-gradient(135deg, #60a5fa, #2563eb)' },
    { name: 'VS Code', icon: '💻', color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' },
    { name: 'HTML/CSS', icon: '🎨', color: 'linear-gradient(135deg, #fb923c, #ec4899)' },
    { name: 'MongoDB', icon: '🍃', color: 'linear-gradient(135deg, #16a34a, #166534)' }
];

const softSkills = [
    { name: 'Comunicação', icon: '💬', color: 'linear-gradient(135deg, #60a5fa, #2563eb)', description: 'Clara e efetiva' },
    { name: 'Trabalho em Equipe', icon: '🤝', color: 'linear-gradient(135deg, #4ade80, #16a34a)', description: 'Colaborativo' },
    { name: 'Liderança', icon: '🎯', color: 'linear-gradient(135deg, #a78bfa, #7c3aed)', description: 'Inspirador' },
    { name: 'Criatividade', icon: '💡', color: 'linear-gradient(135deg, #fbbf24, #f97316)', description: 'Inovador' },
    { name: 'Adaptabilidade', icon: '🔄', color: 'linear-gradient(135deg, #22d3ee, #3b82f6)', description: 'Flexível' },
    { name: 'Resolução de Problemas', icon: '🧩', color: 'linear-gradient(135deg, #f87171, #ec4899)', description: 'Analítico' },
    { name: 'Gestão de Tempo', icon: '⏰', color: 'linear-gradient(135deg, #818cf8, #a855f7)', description: 'Organizado' },
    { name: 'Pensamento Crítico', icon: '🧠', color: 'linear-gradient(135deg, #f472b6, #e11d48)', description: 'Estratégico' },
    { name: 'Empatia', icon: '❤️', color: 'linear-gradient(135deg, #fb7185, #dc2626)', description: 'Compreensivo' },
    { name: 'Resiliência', icon: '💪', color: 'linear-gradient(135deg, #fb923c, #dc2626)', description: 'Determinado' }
];

const hobbies = [
    { name: 'Gaming', icon: '🎮', color: 'linear-gradient(135deg, #a855f7, #ec4899)' },
    { name: 'Música', icon: '🎵', color: 'linear-gradient(135deg, #ec4899, #ef4444)' },
    { name: 'Leitura', icon: '📖', color: 'linear-gradient(135deg, #3b82f6, #6366f1)' },
    { name: 'Futebol', icon: '⚽', color: 'linear-gradient(135deg, #22c55e, #16a34a)' },
    { name: 'Viagens', icon: '✈️', color: 'linear-gradient(135deg, #06b6d4, #2563eb)' },
    { name: 'Fitness', icon: '🏋️', color: 'linear-gradient(135deg, #22c55e, #0d9488)' },
    { name: 'Arte', icon: '🎨', color: 'linear-gradient(135deg, #a855f7, #7c3aed)' }
];

let indices = { hard: 0, soft: 0, hobby: 0 };
let isAutoPlaying = true;
let autoPlayInterval;

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('time1').textContent = time;
    document.getElementById('time2').textContent = time;
    document.getElementById('time3').textContent = time;
}

function createCarouselItem(item, hasDescription) {
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `
                <div class="skill-card" style="background: ${item.color}">
                    <div class="skill-icon">${item.icon}</div>
                    <div class="skill-name">${item.name}</div>
                    ${hasDescription && item.description ? `<div class="skill-description">${item.description}</div>` : ''}
                </div>
            `;
    return div;
}

function updateCarousel(type, items, containerId, dotsId) {
    const container = document.getElementById(containerId);
    const index = indices[type];
    const hasDescription = type === 'soft';

    container.innerHTML = '';

    const prevIndex = (index - 1 + items.length) % items.length;
    const nextIndex = (index + 1) % items.length;

    const prevItem = createCarouselItem(items[prevIndex], hasDescription);
    prevItem.classList.add('prev');

    const currentItem = createCarouselItem(items[index], hasDescription);
    currentItem.classList.add('current');

    const nextItem = createCarouselItem(items[nextIndex], hasDescription);
    nextItem.classList.add('next');

    container.appendChild(prevItem);
    container.appendChild(currentItem);
    container.appendChild(nextItem);

    updateDots(type, items, dotsId);
}

function updateDots(type, items, dotsId) {
    const dotsContainer = document.getElementById(dotsId);
    dotsContainer.innerHTML = '';

    items.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === indices[type] ? ' active' : '');
        dot.onclick = () => goToSlide(type, i);
        dotsContainer.appendChild(dot);
    });
}

function navigate(type, direction) {
    isAutoPlaying = false;
    updateGlobalControl();

    const items = type === 'hard' ? hardSkills : type === 'soft' ? softSkills : hobbies;
    indices[type] = (indices[type] + direction + items.length) % items.length;

    const containerId = type === 'hard' ? 'hardSkillsCarousel' : type === 'soft' ? 'softSkillsCarousel' : 'hobbiesCarousel';
    const dotsId = type === 'hard' ? 'hardDots' : type === 'soft' ? 'softDots' : 'hobbyDots';

    updateCarousel(type, items, containerId, dotsId);
}

function goToSlide(type, index) {
    isAutoPlaying = false;
    updateGlobalControl();

    indices[type] = index;

    const items = type === 'hard' ? hardSkills : type === 'soft' ? softSkills : hobbies;
    const containerId = type === 'hard' ? 'hardSkillsCarousel' : type === 'soft' ? 'softSkillsCarousel' : 'hobbiesCarousel';
    const dotsId = type === 'hard' ? 'hardDots' : type === 'soft' ? 'softDots' : 'hobbyDots';

    updateCarousel(type, items, containerId, dotsId);
}

function autoPlay() {
    indices.hard = (indices.hard + 1) % hardSkills.length;
    indices.soft = (indices.soft + 1) % softSkills.length;
    indices.hobby = (indices.hobby + 1) % hobbies.length;

    updateCarousel('hard', hardSkills, 'hardSkillsCarousel', 'hardDots');
    updateCarousel('soft', softSkills, 'softSkillsCarousel', 'softDots');
    updateCarousel('hobby', hobbies, 'hobbiesCarousel', 'hobbyDots');
}

function toggleAutoPlay() {
    isAutoPlaying = !isAutoPlaying;
    updateGlobalControl();

    if (isAutoPlaying) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
}

function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(autoPlay, 2500);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

function updateGlobalControl() {
    const btn = document.getElementById('globalControl');
    btn.textContent = isAutoPlaying ? '⏸️ Pausar Todos' : '▶️ Reproduzir Todos';
}

// Inicialização
updateTime();
setInterval(updateTime, 1000);

updateCarousel('hard', hardSkills, 'hardSkillsCarousel', 'hardDots');
updateCarousel('soft', softSkills, 'softSkillsCarousel', 'softDots');
updateCarousel('hobby', hobbies, 'hobbiesCarousel', 'hobbyDots');

startAutoPlay();