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
  } else if (!need && existing){
    existing.remove();
  }
}

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
