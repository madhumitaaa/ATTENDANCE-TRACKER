document.querySelector('.toggle-pass').addEventListener('click', () => {
  const input = document.querySelector('input[type="password"]');
  input.type = input.type === 'password' ? 'text' : 'password';
});
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents actual form submission
  window.location.href = "attendance.html"; // Redirects to attendance page
});
