// js/main.js

// Tải header từ file
function loadHeader() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

loadHeader();

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('dark');
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}
