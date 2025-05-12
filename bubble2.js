 
 const questionsAndAnswers = [
    { q: "Mujhe Tumse Mohobbat, Aaj Bhi Hai❤️😊" },
    { q: "Mujhe Tumhari Jarurat, Aaj Bhi Hai💖" },
    { q: "Aaj Bhi Darta Hun, Tumhe Khone se😔" },
    { q: "Tumhe Paane Ki Hasrat, Aaj Bhi Hai💭" },
    { q: "Aaj Bhi Tujhe, Ghanto Yaad Krta Hai💭" },
    { q: "Mujhe Itni si Fursat, Aaj Bhi Hai⏳" },
    { q: "Aaj Bhi Dil, Dhadkta Hai Tere Naam Se❤️" },
    { q: "Iss Pathar Mein Harqat, Aaj Bhi Hai🪨" },

    { q: "Agar Hona Chahu Tera To Tum Hone Dogi Kya🤔" },
    { q: "Aapki Hi Hone Ki Chah Is Dil Me, Aaj Bhi Hai💘" },

    { q: "Chain Nhi Mil Rha Aaj kl Is Dil Ko Khin Pe😞" },
    { q: "Tumhare Dil Me Rhne Ki Chah Aaj Bhi Hai💓" },

    { q: "Mujhe Tumse Mohobbat, Aaj Bhi Hai❤️😊" },
    { q: "Mujhe Tumhari Jarurat, Aaj Bhi Hai💖" },
    { q: "Aaj Bhi Darta Hun, Tumhe Khone se😔" },
    { q: "Tumhe Paane Ki Hasrat, Aaj Bhi Hai💭" },
    { q: "Aaj Bhi Tujhe, Ghanto Yaad Krta Hai💭" },
    { q: "Mujhe Itni si Fursat, Aaj Bhi Hai⏳" },
    { q: "Aaj Bhi Dil, Dhadkta Hai Tere Naam Se❤️" },
    { q: "Iss Pathar Mein Harqat, Aaj Bhi Hai🪨" },

    { q: "Agar Hona Chahu Tera To Tum Hone Dogi Kya🤔" },
    { q: "Aapki Hi Hone Ki Chah Is Dil Me, Aaj Bhi Hai💘" },

    { q: "Chain Nhi Mil Rha Aaj kl Is Dil Ko Khin Pe😞" },
    { q: "Tumhare Dil Me Rhne Ki Chah Aaj Bhi Hai💓" },
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
    //   const ans = document.createElement('div');
    //   ans.className = 'answer';
    //   ans.innerText = answer;
    //   ans.style.top = rect.top + 'px';
    //   ans.style.left = rect.left + 'px';
    //   document.body.appendChild(ans);
      currentIndex++;
      showNextBubble();  
    }, 300);
  }

 
  showNextBubble();


 
     
      
  
   
  