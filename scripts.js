document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeButton = document.getElementById('toggle-theme');

  let isDarkMode = false;

  toggleThemeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
  });
});
const readMoreButtons = document.querySelectorAll('.read-more');

function getActualHeight(element) {
  const originalHeight = element.style.height;
  element.style.height = 'auto';
  const actualHeight = element.scrollHeight;
  element.style.height = originalHeight;
  return actualHeight;
}

readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const block = button.parentElement;
    const actualHeight = getActualHeight(block);

    if (block.style.maxHeight !== '100px') {
      block.style.maxHeight = '100px';
      button.textContent = '+';
    } else {
      block.style.maxHeight = `${actualHeight}px`;
      button.textContent = '-';
    }
  });
});