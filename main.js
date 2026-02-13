const burgerMenu = document.getElementById('burger-menu')
const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const main = document.getElementById('main')
const headerSpan=[...document.querySelectorAll('.header-span')]



function burger() {
    burgerMenu.classList.toggle('burger-menu-show')
    openBtn.classList.toggle('open-btn-hide')
    closeBtn.classList.toggle('close-btn-show')
    main.classList.toggle('main-blur')
}

openBtn.addEventListener('click', burger)
closeBtn.addEventListener('click', burger)



headerSpan.forEach(a=>{
    a.addEventListener('mouseenter', function(){
        headerSpan.forEach(el=>{
            el.classList.remove('move-up')
        })
    
        this.classList.add('move-up')
    })
     a.addEventListener('mouseleave', function(){
        this.classList.remove('move-up')
    })
})