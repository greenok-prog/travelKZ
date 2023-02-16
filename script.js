const menuBtn = document.querySelector('.burger_btn')
const sidebar = document.querySelector('.sidebar_menu')
const closeSidebarButton = document.querySelector('.close_sidebar__button')

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('menu-opened')
})
closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('menu-opened')
})
