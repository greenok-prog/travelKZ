const menuBtn = document.querySelector('.burger_btn')
const sidebar = document.querySelector('.sidebar_menu')
const closeSidebarButton = document.querySelector('.close_sidebar__button')

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('menu-opened')
})
closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('menu-opened')
})


const info = ['text', 'text', {url:'image'}, 'text']


const createInfoBlock = () => {
    const arr = []
    info.forEach(el => {
        typeof el === "string" ? arr.push('Добавить как текст') : arr.push(1)
    })
    console.log(arr);
}
createInfoBlock()