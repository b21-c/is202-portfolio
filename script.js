// Footer year (present on every page)
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Contact form: Bootstrap validation (client side only; exists on contact.html)
const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      success.classList.remove("d-none");
      form.reset();
      form.classList.remove("was-validated");
    } else {
      success.classList.add("d-none");
      form.classList.add("was-validated");
    }
  });
}