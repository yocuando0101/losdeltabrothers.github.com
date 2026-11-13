
const GAMES = {
    jhon: {
      title: "JHON AVENTURAS",
      cover: "img/john_aventure.png",
      desc: "Texto provisional: acá va la descripción de Jhon Aventuras."
    },
    critical: {
      title: "CRITICAL KILL",
      cover: "img/critical_kill.png",
      desc: "Texto provisional: acá va la descripción de Critical Kill."
    },
    cana: {
      title: "CAÑA PESCA",
      cover: "img/cana_pesca.png",
      desc: "Texto provisional: acá va la descripción de Caña Pesca."
    }
  };
  
  const viewHome = document.getElementById("view-home");
  const viewGame = document.getElementById("view-game");
  const toast = document.getElementById("toast");
  let toastTimer;
  
  function showHome(targetHash) {
    viewGame.hidden = true;
    viewHome.hidden = false;
    if (targetHash && targetHash.length > 1) {
      document.querySelector(targetHash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }
  
  function showGame(id) {
    const g = GAMES[id];
    if (!g) return;
    document.getElementById("game-title").textContent = g.title;
    document.getElementById("game-what").textContent = "¿Qué es " + g.title + "?";
    document.getElementById("game-desc").textContent = g.desc;
    for (const el of [document.getElementById("game-cover-a"), document.getElementById("game-cover-b")]) {
      el.src = g.cover;
      el.alt = "Portada de " + g.title;
    }
    document.title = g.title + " · Los Deltabrothers";
    viewHome.hidden = true;
    viewGame.hidden = false;
    window.scrollTo(0, 0);
  }
  
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
  }
  
  document.querySelectorAll("[data-game]").forEach(btn => {
    btn.addEventListener("click", () => showGame(btn.dataset.game));
  });
  
  document.querySelectorAll("[data-home]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.title = "Los Deltabrothers";
      showHome(link.getAttribute("href"));
    });
  });
  
  document.querySelectorAll("[data-soon]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      showToast("Próximamente");
    });
  });