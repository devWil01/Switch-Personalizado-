const darkModeCheckbox = document.getElementById('darkModeCheckbox');

darkModeCheckbox.addEventListener('change', function() {
  const root = document.documentElement;

  if (darkModeCheckbox.checked) {
    root.style.setProperty('--body-color', '#121212');
    root.style.setProperty('--container-color', '#353637');
    root.style.setProperty('--gray-dark', '#fafafa');
    root.style.setProperty('--gray-medium', '#f8f8f8');
    root.style.setProperty('--gray-menu', '#1e1e1f');
    root.style.setProperty('--bx', '2px 3px 3px rgba(105, 101, 101, 0.776)');
  } else {
    root.style.setProperty('--body-color', '#f7f8fa');
    root.style.setProperty('--container-color', '#e6ebf2');
    root.style.setProperty('--gray-dark', '#050110');
    root.style.setProperty('--gray-medium', '#393c40');
    root.style.setProperty('--gray-menu', '#e6ebf2');
    root.style.setProperty('--bx', '2px 3px 3px rgba(195, 194, 194, 0.776)');
  }
});
