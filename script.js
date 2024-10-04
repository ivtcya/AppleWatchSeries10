function toggleMenu() {
    const navList = document.getElementById('nav-list');
    if (navList.style.display === 'flex' || navList.style.display === '') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
    }
}
