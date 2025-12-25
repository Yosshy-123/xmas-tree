const SNOW_COUNT = 120;
const container = document.getElementById("snow");
const flakes = [];
const width = () => window.innerWidth;
const height = () => window.innerHeight;

class Snowflake {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "snowflake";
    container.appendChild(this.el);
    this.reset(true);
  }

  reset(initial = false) {
    this.size = Math.random() * 4 + 2;
    this.x = Math.random() * width();
    this.y = initial ? Math.random() * height() : -10;
    this.speedY = Math.random() * 1.5 + 0.8;
    this.speedX = Math.random() * 0.6 - 0.3;
    this.swing = Math.random() * Math.PI * 2;
    this.swingSpeed = Math.random() * 0.02 + 0.01;

    this.el.style.width = this.el.style.height = `${this.size}px`;
    this.el.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2);
  }

  update() {
    this.y += this.speedY;
    this.swing += this.swingSpeed;
    this.x += this.speedX + Math.sin(this.swing) * 0.5;

    if (this.y > height()) {
      this.reset();
    }

    this.el.style.transform =
      `translate(${this.x}px, ${this.y}px)`;
  }
}

for (let i = 0; i < SNOW_COUNT; i++) {
  flakes.push(new Snowflake());
}

function animate() {
  for (const flake of flakes) {
    flake.update();
  }
  requestAnimationFrame(animate);
}

animate();
