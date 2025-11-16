
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const toggleIcon = document.querySelector('.toggle-icon');


const savedTheme = localStorage.getItem('theme-mode');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
}


themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '☀️';

        localStorage.setItem('theme-mode', 'dark');
    } else {
        toggleIcon.textContent = '🌙';

        localStorage.setItem('theme-mode', 'light');
    }
});

