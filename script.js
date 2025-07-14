// Highlight nav links as user scrolls
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 80;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Open modal popup
function openPost(title) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('blog-modal').classList.remove('hidden');
}

// Close modal
function closeModal() {
  document.getElementById('blog-modal').classList.add('hidden');
}
