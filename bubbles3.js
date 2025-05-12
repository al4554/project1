document.addEventListener("DOMContentLoaded", () => {
    const bubbleWrapper = document.getElementById("bubble-wrapper");
  
    // Define bubble data (image + answer)
    const bubbleData = [
      {
        img: "hamsterbow-sad-hamster.gif",
        answer: "Hehehe~ you're my favorite!",
      },
      {
        img: "bunny.gif",
        answer: "Awwww~ num num num 💖",
      },
      {
        img: "cute-bunny.gif",
        answer: "You're the peanut to my butter 🐹💕",
      },
      {
        img: "blush-bunny.gif",
        answer: "Stop it! You're making me blush ☺️",
      },
      {
        img: "tiny-bunny.gif",
        answer: "I'm smol but full of love 💘",
      }
    ];
  
    // Generate each bubble
    bubbleData.forEach((data) => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.setAttribute("data-answer", data.answer);
  
      const img = document.createElement("img");
      img.src = data.img;
      img.classList.add("bubble-img");
      bubble.appendChild(img);
  
      // Random position
      bubble.style.top = `${Math.random() * 80 + 5}%`;
      bubble.style.left = `${Math.random() * 80 + 5}%`;
  
      // Click handler
      bubble.addEventListener("click", () => {
        if (bubble.classList.contains("popped")) return;
  
        const answer = document.createElement("div");
        answer.classList.add("answer");
        answer.textContent = data.answer;
  
        const rect = bubble.getBoundingClientRect();
        answer.style.left = `${rect.left + rect.width / 2}px`;
        answer.style.top = `${rect.top + rect.height / 2}px`;
  
        document.body.appendChild(answer);
        bubble.classList.add("popped");
      });
  
      bubbleWrapper.appendChild(bubble);
    });
  });
  