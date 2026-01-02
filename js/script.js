const diaryText = `
Hari ini aku membuka album lama.

Tertawa pada wajah-wajah yang dulu
selalu ada setiap hari.

Kita pernah berjanji akan terus bersama,
tapi hidup punya rencana lain.

Sekarang kita tumbuh...
di tempat yang berbeda,
dengan mimpi yang berbeda.

Jika suatu hari kita bertemu lagi,
semoga kita masih saling mengenali.
`;

let i = 0;
const speed = 40;
const diaryElement = document.getElementById("diary-text");

function typeDiary() {
  if (i < diaryText.length) {
    diaryElement.innerHTML += diaryText.charAt(i);
    i++;
    setTimeout(typeDiary, speed);
  }
}

const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Trigger saat section terlihat
window.addEventListener("scroll", () => {
  const diaryPos = diaryElement.getBoundingClientRect().top;
  if (diaryPos < window.innerHeight && diaryElement.innerHTML === "") {
    typeDiary();
  }
});


const music = document.getElementById("bgm");
music.volume = 0.3;

const startScreen = document.getElementById("start-screen");

startScreen.addEventListener("click", () => {
  music.play();
  startScreen.style.display = "none";
});


