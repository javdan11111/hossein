// زمانیکه سایت لود میشه خوش‌آمدگویی نمایش داده بشه
window.onload = function() {
  setTimeout(function() {
    document.querySelector(".welcome").style.display = "none";
    document.getElementById("about-hossein").classList.add("active");
  }, 3000); // 3 ثانیه نمایش پیام خوش‌آمدگویی
};

// تغییر بخش‌ها هنگام کلیک روی منو
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    // مخفی کردن همه بخش‌ها
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));

    // نمایش بخش انتخابی
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.classList.add("active");
  });
});
