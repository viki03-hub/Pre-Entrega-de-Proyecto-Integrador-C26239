const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    form.reportValidity();
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  button.textContent = "Enviando...";
  button.disabled = true;
});
