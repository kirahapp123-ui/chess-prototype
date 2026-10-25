// PANDA GANG — navigation, reveal animations, and application preview
const menuToggle = document.querySelector("#menuToggle");
const siteNav = document.querySelector("#siteNav");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelector("#year").textContent = new Date().getFullYear();

const applicationForm = document.querySelector("#applicationForm");
const previewDialog = document.querySelector("#previewDialog");
const applicationPreview = document.querySelector("#applicationPreview");
const formMessage = document.querySelector("#formMessage");
const copyStatus = document.querySelector("#copyStatus");

applicationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!applicationForm.reportValidity()) return;

  const data = new FormData(applicationForm);
  const application = [
    "PANDA GANG — JOIN APPLICATION",
    "--------------------------------",
    `Nickname: ${data.get("nickname").trim()}`,
    `Class / grade: ${data.get("grade")}`,
    `Main vibe: ${data.get("interest")}`,
    `Why I want to join: ${data.get("reason").trim()}`,
    "",
    "I agree to follow the community rules."
  ].join("\n");

  applicationPreview.textContent = application;
  formMessage.textContent = "";
  copyStatus.textContent = "";
  previewDialog.showModal();
});

function closePreview() {
  previewDialog.close();
}
document.querySelector("#closeDialog").addEventListener("click", closePreview);
document.querySelector("#closeDialogBottom").addEventListener("click", closePreview);

document.querySelector("#copyApplication").addEventListener("click", async () => {
  const text = applicationPreview.textContent;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Copied! Send it to a Panda Gang admin using your usual trusted group chat.";
  } catch {
    // Clipboard access may be blocked when opening the file directly.
    copyStatus.textContent = "Clipboard access was blocked. Select the preview text and copy it manually.";
  }
});

// This is a front-end demo: it previews and copies the application only.
// To collect applications, connect a trusted form service or your own backend.
