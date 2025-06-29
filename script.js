const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    function showPage(index) {
      pages.forEach((page, i) => {
        page.classList.remove('active');
        if (i === index) {
          page.classList.add('active');
        }
      });
    }

    function nextPage() {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
      }
    }

    function prevPage() {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
      }
    }

    const photoSources = [
      'Imgs/Imagem8.png',
      'Imgs/Imagem1.png',
      'Imgs/Imagem2.png',
      'Imgs/Imagem3.png',
      'Imgs/Imagem4.png',
      'Imgs/Imagem5.png',
      'Imgs/Imagem6.png',
      'Imgs/Imagem7.png',
      'Imgs/Imagem9.png',
      'Imgs/Imagem10.png',
      'Imgs/Imagem11.png',
      'Imgs/Imagem14.png',
      'Imgs/Imagem15.png',
      'Imgs/Imagem12.png',
      'Imgs/Imagem13.png'
      
      // Adicione mais imagens aqui como strings: 'path/para/outra.png'
    ];

    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = '100vh';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }

    const names = [
  "Nataniely",
  "Nataniely + Alex",
  "Natty do sorrizinho",
  "Meu Amor",
  "Princesa",
  "Linda",
  "Te amo",
  "Amorzinho",
  "Anjo"
];

function createName() {
  const name = document.createElement('div');
  name.className = 'name';

  const index = Math.floor(Math.random() * names.length);
  name.textContent = names[index];

  name.style.left = Math.random() * 100 + 'vw';
  name.style.top = '100vh';
  document.body.appendChild(name);

  setTimeout(() => name.remove(), 8000);
}


    

    function createPhoto() {
      const photo = document.createElement('img');
      const index = Math.floor(Math.random() * photoSources.length);
      photo.src = photoSources[index];
      photo.className = 'photo-float';
      photo.style.left = Math.random() * 100 + 'vw';
      photo.style.top = '100vh';
      document.body.appendChild(photo);
      setTimeout(() => photo.remove(), 9000);
    }

    setInterval(createHeart, 250);
    setInterval(() => {
      if (Math.random() < 0.6) createName();
      if (Math.random() < 0.4) createPhoto();
    }, 1500);

    document.querySelector('.nav-btn:nth-child(1)').addEventListener('click', prevPage);
    document.querySelector('.nav-btn:nth-child(2)').addEventListener('click', nextPage);

    const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("music-toggle");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "⏸️";
  } else {
    music.pause();
    toggleBtn.textContent = "▶️";
  }
});
