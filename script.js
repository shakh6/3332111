
const letter = `Моя любимая, моя маленькая женушка... ❤️

С днём рождения, моя родная!

Сегодня тебе 18 лет, и я хочу пожелать
тебе самого прекрасного счастья.

Ты можешь становиться старше, взрослеть,
добиваться своих мечтаний, но для меня
ты всегда будешь моей маленькой принцессой.

Той самой девочкой, которую хочется
обнимать, баловать, защищать и радовать
каждый день. 🧸💗

Мы вместе уже три года.
Три года наших улыбок, воспоминаний,
нежности и моментов, которые навсегда
останутся в моём сердце.

Если бы мне дали возможность начать
всё сначала, я бы снова выбрал тебя.
Снова влюбился бы в твою улыбку.
Снова захотел бы держать тебя за руку.

Ты для меня больше, чем просто любимый
человек. Ты моё счастье, моё спокойствие,
моя радость и моя самая красивая мечта.

Я хочу, чтобы ты всегда улыбалась,
чтобы твои мечты сбывались, чтобы рядом
с тобой были тепло, забота и любовь.

Спасибо за наши три года.
Спасибо за каждое мгновение.
Спасибо за то, что ты есть у меня.

С днём рождения, моя маленькая!
Я люблю тебя всем сердцем.
Сегодня, завтра и всегда.

Навсегда твой... ❤️🌷`;

const $ = id => document.getElementById(id);

let typingTimer = null;
let typing = false;
let position = 0;

function showSlide(n) {
  document.querySelectorAll(".slide").forEach(slide => {
    slide.classList.remove("active");
  });

  const target = $("slide" + n);
  if (target) target.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLetter() {
  if (typing) return;
  typing = true;

  const flap = document.querySelector(".flap");
  const seal = document.querySelector(".seal");

  flap.style.transform = "rotateX(180deg)";
  seal.style.opacity = "0";

  setTimeout(() => {
    showSlide(2);
    typeLetter();
  }, 600);
}

function typeLetter() {
  const output = $("letterText");
  const next = $("nextBtn");

  output.textContent = "";
  next.classList.add("hidden");
  position = 0;

  function write() {
    if (position >= letter.length) {
      next.classList.remove("hidden");
      return;
    }

    const char = letter[position];
    output.textContent += char;
    position++;

    typingTimer = setTimeout(
      write,
      char === "\n" ? 180 : 28
    );
  }

  write();
}

function nextSlide(n) {
  clearTimeout(typingTimer);
  showSlide(n);
}

function restart() {
  clearTimeout(typingTimer);
  typing = false;
  position = 0;

  $("letterText").textContent = "";
  $("nextBtn").classList.add("hidden");

  document.querySelector(".flap").style.transform = "";
  document.querySelector(".seal").style.opacity = "";

  showSlide(1);
}

// Tugmalarni ishga tushirish
$("openBtn").addEventListener("click", openLetter);
$("envelope").addEventListener("click", openLetter);
$("nextBtn").addEventListener("click", () => nextSlide(3));
$("nextBtn2").addEventListener("click", () => nextSlide(4));
$("restartBtn").addEventListener("click", restart);

// Uchuvchi yuraklar va gullar
function addHeart() {
  const container = $("hearts");
  const el = document.createElement("span");

  el.className = "heart";
  el.textContent = ["💗", "💖", "💕", "🌸", "🌷", "♡"][
    Math.floor(Math.random() * 6)
  ];

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = 18 + Math.random() * 22 + "px";
  el.style.animationDuration = 7 + Math.random() * 7 + "s";

  container.appendChild(el);
  setTimeout(() => el.remove(), 15000);
}

// 18 va yurakchalar yuqoridan tushadi
function addFalling() {
  const container = $("falling");
  const el = document.createElement("span");

  el.className = "fall";
  el.textContent = Math.random() > 0.4 ? "18" : "♡";
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = 17 + Math.random() * 17 + "px";
  el.style.color = "#c44f84";
  el.style.animationDuration = 6 + Math.random() * 6 + "s";

  container.appendChild(el);
  setTimeout(() => el.remove(), 13000);
}

setInterval(addHeart, 650);
setInterval(addFalling, 1200);
