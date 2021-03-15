
// script active navbar
const activeMenu = () => {
    const menu = document.getElementById('navbarNav');
    if (menu) {
        const links = Array.from(menu.querySelectorAll('a'));
        links.map(link => {
            if (link.href === location.href) link.classList.add('active');
        });
    };
};
activeMenu();