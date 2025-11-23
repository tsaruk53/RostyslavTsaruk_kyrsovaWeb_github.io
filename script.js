const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav ul');

function syncMobileActions(){
  const existing = navList.querySelector('.mobile-actions');
  const need = window.innerWidth <= 600 && navList.classList.contains('open');

  if (need && !existing){
    const li = document.createElement('li');
    li.className = 'mobile-actions';
    li.innerHTML = `
      <a href="#" class="login">Вхід</a>
      <a href="#" class="trial">Приєднатися</a>
    `;
    navList.appendChild(li);

    // Додаємо слухачі подій для нових кнопок 👇
    li.querySelector('.login').addEventListener('click', e => {
      e.preventDefault();
      closeBurgerMenu();
      openModal(loginModal);
    });

    li.querySelector('.trial').addEventListener('click', e => {
      e.preventDefault();
      closeBurgerMenu();
      openModal(joinModal);
    });
  } else if (!need && existing){
    existing.remove();
  }
}


window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Якщо в цій вкладці прелоадер вже був – не показуємо
  if (sessionStorage.getItem("preloaderShown")) {
    preloader.style.display = "none";
    return;
  }

  // Показуємо 3 секунди (можеш змінити)
  setTimeout(() => {
    preloader.classList.add("hide");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000); // час на плавне зникнення

    sessionStorage.setItem("preloaderShown", "true");
  }, 2000);
});








burger.addEventListener('click', ()=>{
  burger.classList.toggle('active');
  navList.classList.toggle('open');
  syncMobileActions();
});

window.addEventListener('resize', ()=>{
  if (window.innerWidth > 1175){
    burger.classList.remove('active');
    navList.classList.remove('open');
  }
  syncMobileActions();
});

// ==== MODAL LOGIC ====
const overlay = document.getElementById('modal-overlay');
const loginModal = document.getElementById('login-modal');
const joinModal = document.getElementById('join-modal');
const closeBtns = document.querySelectorAll('[data-close]');

// Збираємо всі кнопки "Вхід" і "Приєднатися" — з хедера і з бургеру
const loginBtns = document.querySelectorAll('.login');
const joinBtns = document.querySelectorAll('.trial');

function openModal(modal) {
  overlay.classList.add('active');
  modal.classList.add('active');
}

function closeModal() {
  overlay.classList.remove('active');
  loginModal.classList.remove('active');
  joinModal.classList.remove('active');
}

// --- Відкриття будь-якою кнопкою "Вхід" ---
loginBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    closeBurgerMenu(); // закриваємо бургер, якщо відкритий
    openModal(loginModal);
  });
});

// --- Відкриття будь-якою кнопкою "Приєднатися" ---
joinBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    closeBurgerMenu(); // закриваємо бургер, якщо відкритий
    openModal(joinModal);
  });
});

// --- Закриття при кліку на Х або фон ---
closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
overlay.addEventListener('click', closeModal);

// --- Закриття при Esc ---
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// --- Допоміжна функція для закриття бургер-меню ---
function closeBurgerMenu() {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav ul');
  burger.classList.remove('active');
  navList.classList.remove('open');
}
// === Відкриття модалки "Приєднатися" з секції Final ===
const joinTriggers = document.querySelectorAll('.final .btn-gradient, .final .btn--primary');

joinTriggers.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(joinModal); // використовує твою існуючу функцію openModal()
  });
});

let swiper;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (swiper) swiper.destroy(true, true);

  if (screenWidth > 1250) {
    // 🌐 Десктопна версія
    swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      grabCursor: true,
      speed: 600,
      slidesPerGroup: 3,
      on: { slideChange: updatePagination },
    });

    const pages = document.querySelectorAll(".custom-pagination .page");

    function updatePagination() {
      pages.forEach((p) => p.classList.remove("active"));
      const activeIndex = Math.floor(swiper.activeIndex / 3);
      if (pages[activeIndex]) pages[activeIndex].classList.add("active");
    }

    pages.forEach((p, i) =>
      p.addEventListener("click", () => swiper.slideTo(i * 3, 600))
    );
    updatePagination();
  } else {
    // 📱 Мобільна версія — вертикальний, плавний, але реагує лише при взаємодії
    swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  mousewheel: {
    releaseOnEdges: true, // дозволяє сторінці скролитись, коли кінець
    sensitivity: 1,
  },
  speed: 700,
});


    const swiperEl = document.querySelector(".mySwiper");

    // 🖱️ Для миші:
    swiperEl.addEventListener("mouseenter", () => {
      swiper.mousewheel.enable();
    });

    swiperEl.addEventListener("mouseleave", () => {
      swiper.mousewheel.disable();
    });

    // 📱 Для сенсорних пристроїв:
    swiperEl.addEventListener("touchstart", () => {
      swiper.mousewheel.enable();
    });

    swiperEl.addEventListener("touchend", () => {
      swiper.mousewheel.disable();
    });
  }
}

initSwiper();
window.addEventListener("resize", initSwiper);


const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



