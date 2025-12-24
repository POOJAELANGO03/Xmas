// Enhanced Christmas Card Interactivity and Effects

document.addEventListener('DOMContentLoaded', () => {
    // Add dynamic sparkle generation
    createDynamicSparkles();
    
    // Add ornament click effects
    addOrnamentInteractivity();
    
    // Add sound effect triggers (optional - commented out by default)
    // addSoundEffects();
});

/**
 * Creates additional dynamic sparkles that appear randomly
 */
function createDynamicSparkles() {
    const sparkleContainer = document.querySelector('.sparkles');
    const sparkleSymbols = ['✨', '⭐', '💫', '🌟'];
    
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
        
        // Remove sparkle after animation
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }, 2000);
}

/**
 * Adds click interactivity to Christmas tree ornaments
 */
function addOrnamentInteractivity() {
    const ornaments = document.querySelectorAll('.ornament');
    
    ornaments.forEach(ornament => {
        ornament.style.cursor = 'pointer';
        
        ornament.addEventListener('click', (e) => {
            // Create burst effect
            createBurstEffect(e.clientX, e.clientY);
            
            // Scale animation
            ornament.style.transform = 'scale(1.5)';
            setTimeout(() => {
                ornament.style.transform = 'scale(1)';
            }, 300);
        });
        
        // Add hover effect
        ornament.addEventListener('mouseenter', () => {
            ornament.style.boxShadow = '0 0 25px currentColor';
        });
        
        ornament.addEventListener('mouseleave', () => {
            ornament.style.boxShadow = '0 0 10px currentColor';
        });
    });
}

/**
 * Creates a burst effect at the specified coordinates
 */
function createBurstEffect(x, y) {
    const colors = ['#ff6b6b', '#ffd93d', '#4dabf7', '#6bcf7f'];
    const particles = 12;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.transition = 'all 0.6s ease-out';
        document.body.appendChild(particle);
        
        // Trigger animation
        setTimeout(() => {
            particle.style.transform = `translate(${vx}px, ${vy}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        // Remove particle
        setTimeout(() => {
            particle.remove();
        }, 600);
    }
}

/**
 * Add Santa click interaction
 */
const santa = document.querySelector('.santa');
if (santa) {
    santa.style.cursor = 'pointer';
    santa.addEventListener('click', () => {
        // Make Santa jump
        const container = document.querySelector('.santa-container');
        container.style.animation = 'none';
        container.offsetHeight; // Trigger reflow
        container.style.animation = 'santaJump 0.8s ease-out';
        
        setTimeout(() => {
            container.style.animation = 'santaBounce 2s ease-in-out infinite';
        }, 800);
    });
}

// Add Santa jump animation dynamically
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

/**
 * Add star click interaction
 */
const star = document.querySelector('.star');
if (star) {
    star.style.cursor = 'pointer';
    star.addEventListener('click', () => {
        // Create star burst
        const rect = star.getBoundingClientRect();
        createBurstEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);
        
        // Pulse animation
        star.style.transform = 'scale(2) rotate(360deg)';
        setTimeout(() => {
            star.style.transform = 'scale(1) rotate(0deg)';
        }, 500);
    });
}

/**
 * Console message for users who inspect the page
 */
console.log('%c🎄 Merry Christmas & Happy New Year! 🎅', 
    'font-size: 20px; color: #ff6b6b; font-weight: bold; text-shadow: 2px 2px 4px #000;'
);
console.log('%cMay your code be bug-free and your holidays be joyful! ✨', 
    'font-size: 14px; color: #6bcf7f; font-weight: bold;'
);
