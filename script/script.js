// Sticky Navbar
window.addEventListener('scroll', function() {
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Dark Theme
const icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'img/dark theme icon/sun.png'
    } else {
        icon.src = 'img/dark theme icon/moon.png'
    }
}
