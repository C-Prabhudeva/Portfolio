// Typing text animation for role
const roles = ["Web Developer", "Frontend Designer", "Backend Developer", "Full Stack Engineer"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const element = document.querySelector(".typing");
  if (!element) return;

  const word = roles[i];
  element.textContent = word.substring(0, j);

  if (!isDeleting && j < word.length) {
    j++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}

window.addEventListener("DOMContentLoaded", typeEffect);

// Contact form handling
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending...";
  status.style.color = "#00d9ff";

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "#00ff80";
      form.reset();
    } else {
      status.textContent = "⚠️ Oops! Something went wrong.";
      status.style.color = "#ff4d4d";
    }
  } catch (error) {
    status.textContent = "❌ Network error. Please try again.";
    status.style.color = "#ff4d4d";
  }
});
