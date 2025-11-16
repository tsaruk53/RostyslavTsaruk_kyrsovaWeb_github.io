// === FILTER PROJECTS ===
const filterButtons = document.querySelectorAll(".eco-categories button");
const projectCards = document.querySelectorAll(".eco-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Активна кнопка
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    // Показати / приховати проєкти
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
        }, 100); // плавне сховання
      }
    });

  });
});
document.addEventListener('DOMContentLoaded', () => {
  // ===== ФІЛЬТР КАТЕГОРІЙ =====
  const filterBtns = document.querySelectorAll('.eco-categories button');
  const cards = document.querySelectorAll('.eco-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // активна кнопка
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

  // ===== МОДАЛКА ДЛЯ "ПРОЄКТІВ" =====
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

  // Кнопки, які відкривають модалку: "Створити проєкт" і "Додати свій проєкт"
  const projectBtns = Array.from(document.querySelectorAll('.btn--primary'))
    .filter((btn) => btn.textContent.includes('проєкт'));

  projectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });
});
