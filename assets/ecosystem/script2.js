const projects = [
  
  {
    title: "NovaSwap",
    category: "defi",
    description: "DEX для обміну активами з низькими комісіями та моментальними транзакціями."
  },
  {
    title: "YieldNova",
    category: "defi",
    description: "Фермерство ліквідності з автоматичними стратегіями оптимізації APR."
  },
  {
    title: "StableVault",
    category: "defi",
    description: "Децентралізований стейблкоїн, забезпечений токенами NovaChain."
  },

  
  {
    title: "NFT Galaxy",
    category: "nft",
    description: "Маркетплейс цифрових активів з мінімальними комісіями."
  },
  {
    title: "ArtFlow",
    category: "nft",
    description: "Платформа для створення генеративних NFT-колекцій."
  },

  
  {
    title: "NovaRacers",
    category: "gaming",
    description: "Блокчейн-гонки з PvP режимом та торговою системою авто-NFT."
  },
  {
    title: "ChainWars",
    category: "gaming",
    description: "Стратегія на смарт-контрактах з відкритою економікою."
  },
  {
    title: "BeastForge",
    category: "gaming",
    description: "Гра з розведенням creature-NFT та власним токеном BEAST."
  },
  {
    title: "World of Nova",
    category: "gaming",
    description: "MMO-метавсесвіт на базі NovaChain з кастомним аватаром."
  },

  
  {
    title: "NovaScan",
    category: "tools",
    description: "Блокчейн-експлорер з live-моніторингом транзакцій."
  },
  {
    title: "DevTools Kit",
    category: "tools",
    description: "Набір інструментів для автоматизації деплою та тестування."
  }
];
projects.forEach((p, i) => {
  p.number = String(i + 1).padStart(2, "0");
});

function renderProjects(filter = "all") {
  const grid = document.querySelector(".eco-grid");
  if (!grid) return;

  grid.innerHTML = "";

  projects.forEach(project => {
    if (filter !== "all" && project.category !== filter) return;

    const card = document.createElement("div");
    card.className = `eco-card cat-${project.category}`;
    card.dataset.category = project.category;
    card.dataset.index = project.number;   

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    grid.appendChild(card);
  });
}

function initEcoFilters() {
  const buttons = document.querySelectorAll(".eco-categories button");
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter || "all";
      renderProjects(filter);
    });
  });

  renderProjects("all");
}

document.addEventListener("DOMContentLoaded", () => {
  initEcoFilters();
});

const filterButtons = document.querySelectorAll(".eco-categories button");
const projectCards = document.querySelectorAll(".eco-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.style.display = "none";
        }, 100); 
      }
    });

  });
});
document.addEventListener('DOMContentLoaded', () => {
  
  const filterBtns = document.querySelectorAll('.eco-categories button');
  const cards = document.querySelectorAll('.eco-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  
  const overlay = document.getElementById('project-overlay');
  const projectModal = document.getElementById('project-modal');
  const closeBtns = document.querySelectorAll('[data-close]');

  function openModal() {
    overlay.classList.add('active');
    projectModal.classList.add('active');
  }

  function closeModal() {
    overlay.classList.remove('active');
    projectModal.classList.remove('active');
  }

  closeBtns.forEach((btn) => btn.addEventListener('click', closeModal));
  overlay.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

 
  const projectBtns = Array.from(document.querySelectorAll('.btn--primary'))
    .filter((btn) => btn.textContent.includes('проєкт'));

  projectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });
});

