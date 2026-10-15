// Mobile Drawer Menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Non-Toxic Pledge Interactive Toggle
let isPledged = false;
function togglePledge() {
    const pledgeIcon = document.getElementById('pledgeIcon');
    const pledgeText = document.getElementById('pledgeText');
    const pledgeMessage = document.getElementById('pledgeMessage');

    isPledged = !isPledged;

    if (isPledged) {
        if (pledgeIcon) pledgeIcon.className = "fa-solid fa-square-check text-orange-400 text-lg";
        if (pledgeText) pledgeText.innerText = "Pledge Taken & Confirmed!";
        if (pledgeMessage) pledgeMessage.classList.remove('hidden');
    } else {
        if (pledgeIcon) pledgeIcon.className = "fa-regular fa-square text-lg";
        if (pledgeText) pledgeText.innerText = "I Take the Non-Toxic Gaming Pledge";
        if (pledgeMessage) pledgeMessage.classList.add('hidden');
    }
}

// INTENSE Dynamic HTML5 Flame Particle Canvas Engine
const canvas = document.getElementById('flameCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    let particles = [];
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class EmberParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 80;
            this.size = Math.random() * 5 + 1.8;
            this.speedY = Math.random() * 3.2 + 1.2;
            this.speedX = (Math.random() - 0.5) * 1.8;
            this.opacity = Math.random() * 0.9 + 0.3;
            
            const rand = Math.random();
            this.color = rand > 0.5 ? '#ff5500' : (rand > 0.25 ? '#ffaa00' : (rand > 0.1 ? '#ff0033' : '#fff200'));
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX + Math.sin(this.y * 0.02) * 0.8;
            this.opacity -= 0.003;

            if (this.y < -15 || this.opacity <= 0) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 24;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // High Density: 180 Active Embers
    for (let i = 0; i < 180; i++) {
        particles.push(new EmberParticle());
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateCanvas);
    }

    animateCanvas();
}