const form = document.querySelector(".faucet-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "✔ Тестові NVC відправлено!";
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2500);
  });
}
