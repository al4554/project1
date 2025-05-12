 
  const questionsAndAnswers = [
    { q: "Do u know who loves you the most?", a: "Men without 'n'" },
    { q: "Are you good at maths?", a: "cause i 1, 2, 1/2 , 6 with you  " },
    { q: "Decode this shawty?", a: "UR26I124Q" },
    { q: "Can i call you Bromine??", a: "But Bro is silent 💖" },
    { q: "Mujhe ek bhot beautiful ladki ko dekhne kan mn ho rha?", a: "video call kro n" },
    { q: "Acha oyi ek baat bta 12 aur 13 me kon bda h", a: "Hn tujhe to pta hoga hi " },
    { q: "Uttar du kya aapki??", a: "Nazar" },
    { q: "Do you miss me?", a: "Every second 💗" },
    { q: "Ask me again, but this time , try it with a pick up line", a: " let's see if u can keep it up"},
    
  ];
  let currentIndex = 0;

  function showNextBubble() {
    if (currentIndex >= questionsAndAnswers.length) return;

    const item = questionsAndAnswers[currentIndex];
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.innerText = item.q;
    bubble.style.top = Math.random() * 80 + 'vh';
    bubble.style.left = Math.random() * 80 + 'vw';
    bubble.onclick = () => popBubble(bubble, item.a);
    document.body.appendChild(bubble);
  }

  function popBubble(el, answer) {
    el.classList.add('popped');
    const rect = el.getBoundingClientRect();
    setTimeout(() => {
      el.remove();
      const ans = document.createElement('div');
      ans.className = 'answer';
      ans.innerText = answer;
      ans.style.top = rect.top + 'px';
      ans.style.left = rect.left + 'px';
      document.body.appendChild(ans);
      currentIndex++;
      showNextBubble(); // Show the next bubble after popping
    }, 300);
  }

  // Start by showing the first bubble
  showNextBubble();
//   function createBubble() {
//     const item = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)];
//     const bubble = document.createElement('div');
//     bubble.className = 'bubble';
//     bubble.innerText = item.q;
//     bubble.style.top = Math.random() * 80 + 'vh';
//     bubble.style.left = Math.random() * 80 + 'vw';
//     bubble.onclick = () => popBubble(bubble, item.a);
//     document.body.appendChild(bubble);
  
//     // Auto remove bubble if not clicked after 10s
//     setTimeout(() => {
//       if (document.body.contains(bubble)) bubble.remove();
//     }, 10000);
//   }
  
  // Keep generating bubbles every 1.5 seconds
  //setInterval(createBubble, 1500);
 


//   function createBubble() {
//     const item = questionsAndAnswers[Math.floor(Math.random() * questionsAndAnswers.length)];
//     const bubble = document.createElement('div');
//     bubble.className = 'bubble';
//     bubble.innerText = item.q;
//     bubble.style.top = Math.random() * 80 + 'vh';
//     bubble.style.left = Math.random() * 80 + 'vw';
//     bubble.onclick = () => popBubble(bubble, item.a);
//     document.body.appendChild(bubble);

//     // Auto remove unclicked bubble after 10 seconds
//     setTimeout(() => {
//       if (document.body.contains(bubble)) bubble.remove();
//     }, 10000);
//   }
//   function popBubble(el, answer) {
//     el.classList.add('popped');
//     const rect = el.getBoundingClientRect();
//     setTimeout(() => {
//       el.remove();
//       const ans = document.createElement('div');
//       ans.className = 'answer';
//       ans.innerText = answer;
//       ans.style.top = rect.top + 'px';
//       ans.style.left = rect.left + 'px';
//       document.body.appendChild(ans);

//       // Optional: remove answer after some time
//       setTimeout(() => ans.remove(), 4000);
//     }, 300);
//   }

  

//   // Generate a new bubble every 1.2 seconds
//   setInterval(createBubble, 1200);
 


  