const toast = document.getElementById("toast");
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll("[data-soon]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    showToast("Próximamente");
  });
});

const form = document.getElementById("form-contacto");
const status = document.getElementById("status");

form.addEventListener("submit", e => {
  e.preventDefault();
  status.className = "status";

  let firstInvalid = null;
  form.querySelectorAll(".field").forEach(field => {
    const input = field.querySelector("input, textarea");
    const bad = !input.checkValidity();
    field.classList.toggle("invalid", bad);
    if (bad && !firstInvalid) firstInvalid = input;
  });

  if (firstInvalid) {
    status.textContent = "Revisá los campos marcados.";
    status.classList.add("error");
    firstInvalid.focus();
    return;
  }
  const datos = Object.fromEntries(new FormData(form));
  console.log("Mensaje de contacto:", datos);

  form.reset();
  status.textContent = "¡Mensaje enviado! Te respondemos pronto.";
  status.classList.add("ok");
});