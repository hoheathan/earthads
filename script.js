// Select the container element where the new content will be appended
const container = document.querySelector('#container');

// Listen for the scroll event on the page
window.addEventListener('scroll', function() {
  // Check if the user has scrolled to the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Add new content to the page
    const content = document.createElement('p');
    content.textContent = 'New content';
    container.appendChild(content);
  }
});
