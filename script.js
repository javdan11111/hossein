const tiger = document.getElementById('tiger');
const obstacle = document.getElementById('obstacle');
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    if (!tiger.classList.contains('jump')) {
      tiger.classList.add('jump');
      setTimeout(() => {
        tiger.classList.remove('jump');
      }, 500);
    }
  }
});
setInterval(function() {
  let tigerTop = parseInt(window.getComputedStyle(tiger).getPropertyValue('top'));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
  if (obstacleLeft < 100 && obstacleLeft > 50 && tigerTop > 130) {
    alert("باختی! دوباره تلاش کن");
    location.reload();
  }
}, 10);