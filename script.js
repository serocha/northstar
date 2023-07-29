function toggleMenu() {
    let navBtnPointer = document.getElementById('nav-open').style.pointerEvents;
    navBtnPointer === 'auto' ? navBtnPointer = 'none' : navBtnPointer = 'auto';
    document.getElementById('nav-tray').classList.toggle('nav-hide');
};