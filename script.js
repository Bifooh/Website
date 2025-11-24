const userbtn = document.getElementById('login-icon');
const dropDownMenu = document.getElementById('dropdown-menu');

userbtn.addEventListener('click', () => {
    dropDownMenu.style.display = dropDownMenu.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('click', (event) => {
    if (!userbtn.contains(event.target)) {
        dropDownMenu.style.display = 'none';
    }
});

