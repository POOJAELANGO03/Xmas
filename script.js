// Enhanced Christmas Card Interactivity and Premium Effects
// =========================================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initializeAllFeatures();
});

/**
 * Initialize all premium features
 */
function initializeAllFeatures() {
    // Core interactions
    createDynamicSparkles();
    addOrnamentInteractivity();
    addSantaInteraction();
    addStarInteraction();

    // Premium features (gift boxes and music removed)
    initializeParallaxEffect();
    initializeCursorTrail();
    initializeFireworks();
    initializeAuroraInteraction();

    // Card and Wish Controls  
    initializeCardControls();
    initializeFriendshipWish();

    // Background Music
    initializeBackgroundMusic();
}

// ============================================
//    DYNAMIC SPARKLES
// ============================================
function createDynamicSparkles() {
    const sparkleContainer = document.querySelector('.sparkles');
    const sparkleSymbols = ['✨', '⭐', '💫', '🌟', '⚡', '💎'];

    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'dynamic-sparkle';
        sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        sparkle.style.position = 'absolute';
        sparkle.style.animation = 'sparkleFloat 3s ease-out forwards';
        sparkle.style.pointerEvents = 'none';

        sparkleContainer.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 3000);
    }, 2000);
}

// ============================================
//    ORNAMENT INTERACTIVITY
// ============================================
function addOrnamentInteractivity() {
    const ornaments = document.querySelectorAll('.ornament');

    ornaments.forEach(ornament => {
        ornament.style.cursor = 'pointer';
        ornament.style.transition = 'all 0.3s ease';

        ornament.addEventListener('click', (e) => {
            createBurstEffect(e.clientX, e.clientY);
            ornament.style.transform = 'scale(1.5)';
            setTimeout(() => ornament.style.transform = 'scale(1)', 300);
        });

        ornament.addEventListener('mouseenter', () => {
            ornament.style.boxShadow = '0 0 25px currentColor';
        });

        ornament.addEventListener('mouseleave', () => {
            ornament.style.boxShadow = '0 0 10px currentColor';
        });
    });
}

// ============================================
//    SANTA INTERACTION
// ============================================
function addSantaInteraction() {
    const santa = document.querySelector('.santa');
    if (!santa) return;

    santa.style.cursor = 'pointer';
    santa.addEventListener('click', () => {
        const container = document.querySelector('.santa-container');
        container.style.animation = 'none';
        container.offsetHeight; // Trigger reflow
        container.style.animation = 'santaJump 0.8s ease-out';

        // Create celebration sparkles
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const rect = santa.getBoundingClientRect();
                createBurstEffect(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2
                );
            }, i * 50);
        }

        setTimeout(() => {
            container.style.animation = 'santaBounce 2s ease-in-out infinite';
        }, 800);
    });
}

// ============================================
//    STAR INTERACTION
// ============================================
function addStarInteraction() {
    const star = document.querySelector('.star');
    if (!star) return;

    star.style.cursor = 'pointer';
    star.style.transition = 'all 0.5s ease';

    star.addEventListener('click', () => {
        const rect = star.getBoundingClientRect();
        createBurstEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);

        star.style.transform = 'scale(2) rotate(360deg)';
        setTimeout(() => star.style.transform = 'scale(1) rotate(0deg)', 500);
    });
}

// ============================================
//    BURST EFFECT
// ============================================
function createBurstEffect(x, y) {
    const colors = ['#ff6b6b', '#ffd93d', '#4dabf7', '#6bcf7f', '#ff6ec7', '#c084fc'];
    const particles = 15;

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;

        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 150 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        particle.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.style.transform = `translate(${vx}px, ${vy}px)`;
            particle.style.opacity = '0';
        }, 10);

        setTimeout(() => particle.remove(), 800);
    }
}

// ============================================
//    3D PARALLAX EFFECT
// ============================================
function initializeParallaxEffect() {
    const parallaxElements = [
        { selector: '.santa-container', depth: 20 },
        { selector: '.christmas-tree', depth: 15 },
        { selector: '.glass-card', depth: 10 }
    ];

    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        parallaxElements.forEach(item => {
            const element = document.querySelector(item.selector);
            if (element) {
                const moveX = (mouseX / centerX) * item.depth;
                const moveY = (mouseY / centerY) * item.depth;
                element.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    });
}

// ============================================
//    CURSOR TRAIL
// ============================================
function initializeCursorTrail() {
    const trailContainer = document.querySelector('.cursor-trail-container');
    const colors = ['#ff6b6b', '#ffd93d', '#4dabf7', '#6bcf7f', '#ff6ec7'];
    let lastTrailTime = 0;

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTrailTime < 30) return; // Throttle
        lastTrailTime = now;

        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        trail.style.boxShadow = `0 0 15px ${trail.style.backgroundColor}`;

        trailContainer.appendChild(trail);

        setTimeout(() => trail.remove(), 800);
    });
}

// ============================================
//    FIREWORKS ON CLICK
// ============================================
function initializeFireworks() {
    const fireworksContainer = document.querySelector('.fireworks-container');

    document.addEventListener('click', (e) => {
        // Don't trigger on interactive elements
        if (e.target.closest('.santa, .ornament, .star')) {
            return;
        }

        createFirework(e.clientX, e.clientY, fireworksContainer);
    });
}

function createFirework(x, y, container) {
    const colors = ['#ff6b6b', '#ffd93d', '#4dabf7', '#6bcf7f', '#ff6ec7', '#c084fc'];
    const particleCount = 40;
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 10px ${color}`;

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 150 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.animation = `fireworkExplode 1s ease-out forwards`;

        container.appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }

    // Add flash effect
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.left = x + 'px';
    flash.style.top = y + 'px';
    flash.style.width = '100px';
    flash.style.height = '100px';
    flash.style.borderRadius = '50%';
    flash.style.backgroundColor = color;
    flash.style.transform = 'translate(-50%, -50%)';
    flash.style.opacity = '0.8';
    flash.style.pointerEvents = 'none';
    flash.style.filter = 'blur(20px)';
    flash.style.transition = 'all 0.5s ease-out';
    flash.style.zIndex = '999';

    container.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = '0';
        flash.style.transform = 'translate(-50%, -50%) scale(2)';
    }, 10);

    setTimeout(() => flash.remove(), 500);
}

// ============================================
//    AURORA INTERACTION
// ============================================
function initializeAuroraInteraction() {
    const auroraWaves = document.querySelectorAll('.aurora-wave');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;

        auroraWaves.forEach((wave, index) => {
            const offset = mouseX * 100 * (index + 1);
            wave.style.transform = `translateX(${-25 - offset}%)`;
        });
    });
}

// Add dynamic Santa jump animation
const style = document.createElement('style');
style.textContent = `
    @keyframes santaJump {
        0% {
            transform: translateY(0) scale(1) rotate(0deg);
        }
        50% {
            transform: translateY(-100px) scale(1.2) rotate(360deg);
        }
        100% {
            transform: translateY(0) scale(1) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);

// ============================================
//    CARD SHOW/HIDE CONTROLS
// ============================================
function initializeCardControls() {
    const showCardButton = document.getElementById('showCardButton');
    const glassCard = document.querySelector('.glass-card');
    const closeCardBtn = document.getElementById('closeCardBtn');

    if (showCardButton && glassCard) {
        showCardButton.addEventListener('click', () => {
            glassCard.classList.add('show');
            showCardButton.classList.add('hidden');
        });
    }

    if (closeCardBtn && glassCard && showCardButton) {
        closeCardBtn.addEventListener('click', () => {
            glassCard.classList.remove('show');
            showCardButton.classList.remove('hidden');
        });
    }
}

// ============================================
//    FRIENDSHIP WISH POPUP
// ============================================
function initializeFriendshipWish() {
    const wishButton = document.getElementById('wishButton');
    const friendshipWish = document.getElementById('friendshipWish');
    const closeWish = document.getElementById('closeWish');

    if (wishButton && friendshipWish) {
        wishButton.addEventListener('click', () => {
            friendshipWish.classList.add('show');
        });
    }

    if (closeWish && friendshipWish) {
        closeWish.addEventListener('click', () => {
            friendshipWish.classList.remove('show');
        });

        // Close when clicking outside the card
        friendshipWish.addEventListener('click', (e) => {
            if (e.target === friendshipWish) {
                friendshipWish.classList.remove('show');
            }
        });
    }
}

// ============================================
//    BACKGROUND CHRISTMAS MUSIC
// ============================================
function initializeBackgroundMusic() {
    const music = document.getElementById('christmasMusic');
    if (!music) return;

    // Set volume
    music.volume = 0.3;

    // Try to play immediately
    const tryPlay = music.play();

    if (tryPlay !== undefined) {
        tryPlay.catch(() => {
            // If autoplay is blocked, start on first click anywhere
            const startMusic = () => {
                music.play().catch(() => { });
                document.removeEventListener('click', startMusic);
                document.removeEventListener('touchstart', startMusic);
                document.removeEventListener('keydown', startMusic);
            };

            document.addEventListener('click', startMusic);
            document.addEventListener('touchstart', startMusic);
            document.addEventListener('keydown', startMusic);
        });
    }
}

// Console Easter Egg
console.log('%c🎄 Merry Christmas & Happy New Year! 🎅',
    'font-size: 24px; color: #ff6b6b; font-weight: bold; text-shadow: 2px 2px 4px #000;'
);
console.log('%c✨ May your code be bug-free and your holidays be magical! ✨',
    'font-size: 16px; color: #6bcf7f; font-weight: bold;'
);
console.log('%c💡Click the green button to open the card! Then click the wish button inside!',
    'font-size: 14px; color: #ffd93d;'
);
