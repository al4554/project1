// const lyrics = [
//   { time: 0, text: "Tu jo dave paigaam haseen ae" ,image:"ff.jpg"},
//   { time: 3, text: " khaas hove ya aam haseen ae" ,image:"ff.jpg"},
//   { time: 7, text: "tere naal jo pal lage" ,image:"ff.jpg" },
//   { time: 9, text: " wo pal da anjaam haseen hai",image:"ff.jpg" },
//   { time: 13, text: "Tere ishq da jaam haseen ae",image:"ff.jpg" },
//   { time: 15, text: "Subah haseen meri shaam haseen ae",image:"ff.jpg" },
//   { time: 18, text: " ye bematlab di zindagi",image:"ff.jpg" },
//   { time: 21, text: "jado ni tere naam haseen h",image:"ff.jpg" }
 
// ];

// const wrapper = document.getElementById("bubble-wrapper");

// function showBubble({ text, image }) {
//   const bubble = document.createElement("div");
//   bubble.className = "bubble";
//   bubble.innerHTML = `<div class="lyric">${text}</div>`;
//   wrapper.appendChild(bubble);

 
//   bubble.style.top = Math.random() * 80 + "%";
//   bubble.style.left = Math.random() * 80 + "%";

 
//   setTimeout(() => {
//     const rect = bubble.getBoundingClientRect();
//     bubble.classList.add("popped");

 
//     const reveal = document.createElement("div");
//     reveal.className = "reveal-photo";
//     reveal.style.left = rect.left + "px";
//     reveal.style.top = rect.top + "px";
//     reveal.innerHTML = `<img src="${image}">`;
//     wrapper.appendChild(reveal);

//     setTimeout(() => bubble.remove(), 500);
//   }, 1500); // bubble duration
// }

// // Sync with song
// const audio = document.getElementById("bg-music");
// audio.addEventListener("play", () => {
//   lyrics.forEach(({ time, text, image }) => {
//     setTimeout(() => {
//       showBubble({ text, image });
//     }, time * 1000);
//   });
// });

const lyrics = [
  { time: 0, text: "Tu jo dave paigaam haseen ae", image: "img1.jpg" },
  { time: 3, text: "Khaas hove ya aam haseen ae", image: "img2.jpg" },
  { time: 7, text: "Tere naal jo pal lage", image: "img3.jpg" },
  { time: 9, text: "Wo pal da anjaam haseen hai", image: "img4.jpg" },
  { time: 13, text: "Tere ishq da jaam haseen ae", image: "img5.jpg" },
  { time: 15, text: "Subah haseen meri shaam haseen ae", image: "img6.jpg" },
  { time: 18, text: "Ye bematlab di zindagi", image: "img7.jpg" },
  { time: 21, text: "Jado ni tere naam haseen h", image: "img8.jpg" },
  { time: 22, text: "Tu jo dave paigaam haseen ae", image: "img19.jpg" },
  { time: 26, text: "Khaas hove ya aam haseen ae", image: "img10.jpg" },
  { time: 28, text: "Tere naal jo pal lage", image: "img11.jpg" },
  { time: 29, text: "Wo pal da anjaam haseen hai", image: "img12.jpg" },
  { time: 33, text: "Tere ishq da jaam haseen ae", image: "img13.jpg" },
  { time: 35, text: "Subah haseen meri shaam haseen ae", image: "img14.jpg" },
  { time: 38, text: "Ye bematlab di zindagi", image: "img15.jpg" },
  { time: 41, text: "Jado ni tere naam haseen h", image: "img16.jpg" },
  { time: 42, text: "Tu jo dave paigaam haseen ae", image: "img17.jpg" },
  { time: 43, text: "Khaas hove ya aam haseen ae", image: "img18.jpg" },
  { time: 47, text: "Tere naal jo pal lage", image: "img19.jpg" },
  { time: 49, text: "Wo pal da anjaam haseen hai", image: "img20.jpg" },
  { time: 53, text: "Tere ishq da jaam haseen ae", image: "img15.jpg" },
  { time: 55, text: "Subah haseen meri shaam haseen ae", image: "img16.jpg" },
  { time: 58, text: "Ye bematlab di zindagi", image: "img17.jpg" },
  { time: 61, text: "Jado ni tere naam haseen h", image: "img8.jpg" },
  { time: 62, text: "Tu jo dave paigaam haseen ae", image: "img1.jpg" },
  { time: 63, text: "Khaas hove ya aam haseen ae", image: "img2.jpg" },
  { time: 67, text: "Tere naal jo pal lage", image: "img3.jpg" },
  { time: 69, text: "Wo pal da anjaam haseen hai", image: "img4.jpg" },
  { time: 73, text: "Tere ishq da jaam haseen ae", image: "img15.jpg" },
  { time: 75, text: "Subah haseen meri shaam haseen ae", image: "img6.jpg" },
  { time: 78, text: "Ye bematlab di zindagi", image: "img17.jpg" },
  { time: 81, text: "Jado ni tere naam haseen h", image: "img20.jpg" }
];

const wrapper = document.getElementById("bubble-wrapper");
const startBtn = document.getElementById("startBtn");
const audio = document.getElementById("bg-music");

function showBubble({ text, image }) {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  bubble.style.top = Math.random() * 70 + "%";
  bubble.style.left = Math.random() * 70 + "%";
  wrapper.appendChild(bubble);

  setTimeout(() => {
    const rect = bubble.getBoundingClientRect();
    const reveal = document.createElement("div");
    reveal.className = "reveal-photo";
    reveal.style.left = rect.left + "px";
    reveal.style.top = rect.top + "px";
    reveal.innerHTML = `<img src="${image}" alt="Bubble Reveal">`;
    wrapper.appendChild(reveal);

    setTimeout(() => {
      bubble.remove();
      reveal.remove(); 
    }, 2000); // total time
  }, 1500); // show image after 1.5s
}

startBtn.addEventListener("click", () => {
  audio.play().catch(e => console.log("Audio play blocked:", e));
  startBtn.remove();

  lyrics.forEach(({ time, text, image }) => {
    setTimeout(() => {
      showBubble({ text, image });
    }, time * 1000);
  });
});

const container = document.getElementById('hearts');

for (let i = 0; i < 40; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDelay = `${Math.random() * 5}s`;
  container.appendChild(heart);
}


