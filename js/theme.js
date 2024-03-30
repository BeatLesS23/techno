document.addEventListener('DOMContentLoaded', function() {
    const theme = document.getElementById("theme");
    const cart = document.getElementById("cart");
    const searchIcon = document.getElementById('searchIcon');
    const inputSearch = document.querySelector('.input-search');
    
    // Check if dark theme preference is saved in localStorage
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
        theme.src = "img/sun.png";
        cart.src = "img/cart2.png";
    }
    
    // Theme toggle functionality
    theme.onclick = function(){
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        theme.src = isDark ? "img/sun.png" : "img/moon.png";
        cart.src = isDark ? "img/cart2.png" : "img/cart.png";
        
        // Save theme preference to localStorage
        localStorage.setItem('darkTheme', isDark);
    }
    
    // Search icon functionality
    searchIcon.addEventListener('click', function() {
        inputSearch.focus();
    });
});