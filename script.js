// Music autoplay (already starts via HTML <audio autoplay>)

function showWish() {
    document.getElementById("birthdayCard").classList.remove("hidden");
    startConfetti();
    const music = document.getElementById("bgMusic");
    if (music.paused) {
      music.play().catch(err => console.log("Autoplay blocked:", err));
    }
  }
  
  function hideWish() {
    document.getElementById("birthdayCard").classList.add("hidden");
    stopConfetti();
  }
  
  // 🎂 Countdown
  const birthdayDate = new Date("2025-05-10");
  const countdownEl = document.getElementById("countdown");
  
  function updateCountdown() {
    const now = new Date();
    const diff = birthdayDate - now;
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      countdownEl.innerText = `🎁 Happy birthday to my first hero!`;
    } else {
      countdownEl.innerText = `🎉 Happy birthday to my first hero!`;
    }
  }
  updateCountdown();
  
  // ✨ Confetti
  let confettiInterval;
  function startConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let confetti = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
      tilt: Math.random() * 10 - 10
    }));
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
        ctx.fillStyle = c.color;
        ctx.fill();
      });
      update();
    }
  
    function update() {
      confetti.forEach(c => {
        c.y += Math.cos(c.d) + 1 + c.r / 2;
        c.x += Math.sin(c.d) * 2;
        if (c.y > canvas.height) {
          c.x = Math.random() * canvas.width;
          c.y = -10;
        }
      });
    }
  
    confettiInterval = setInterval(draw, 30);
  }
  
  function stopConfetti() {
    clearInterval(confettiInterval);
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  // 🎞️ Slideshow
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  
  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change every 3 seconds
  }
  
  showSlides();
  