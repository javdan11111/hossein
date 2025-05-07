
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 300;

let tiger = { x: 50, y: 220, width: 40, height: 40, vy: 0, jumping: false };
let obstacles = [];
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let speed = 3;

document.getElementById("highScore").textContent = highScore;

function drawTiger() {
  ctx.fillStyle = "#f90";
  ctx.fillRect(tiger.x, tiger.y, tiger.width, tiger.height);
}

function drawObstacle(ob) {
  ctx.fillStyle = "#333";
  ctx.fillRect(ob.x, ob.y, ob.width, ob.height);
}

function jump() {
  if (!tiger.jumping) {
    tiger.vy = -12;
    tiger.jumping = true;
  }
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") jump();
});

canvas.addEventListener("click", jump);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  tiger.vy += 0.8;
  tiger.y += tiger.vy;
  if (tiger.y > 220) {
    tiger.y = 220;
    tiger.vy = 0;
    tiger.jumping = false;
  }

  if (Math.random() < 0.02) {
    obstacles.push({ x: canvas.width, y: 240, width: 20, height: 40 });
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].x -= speed;
    drawObstacle(obstacles[i]);

    // برخورد
    if (
      tiger.x < obstacles[i].x + obstacles[i].width &&
      tiger.x + tiger.width > obstacles[i].x &&
      tiger.y < obstacles[i].y + obstacles[i].height &&
      tiger.y + tiger.height > obstacles[i].y
    ) {
      alert("باختی! امتیاز: " + score);
      if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
      }
      score = 0;
      speed = 3;
      obstacles = [];
    }

    if (obstacles[i].x + obstacles[i].width < 0) {
      obstacles.splice(i, 1);
      score += 100;
      document.getElementById("score").textContent = score;

      if (score >= 2000) speed = 7.5;
      else if (score >= 1000) speed = 4.5;
    }
  }

  drawTiger();
  requestAnimationFrame(update);
}

update();

// دکمه نصب PWA-like
document.getElementById("installBtn").addEventListener("click", () => {
  alert("برای استفاده روی گوشی این سایت را به صفحه اصلی اضافه کن.");
});
