/*is function active menu mobile*/
function initMenuMobile() {
    const toggle = document.querySelector('.toggle')

  
    function activeToggle(event) {
        if (event.type === 'touchstart') {
            event.preventDefault()
        }
        const menu = document.querySelector('.menu-list')
        
        menu.classList.toggle('open')
    }
    

    toggle.addEventListener('click', activeToggle)
    toggle.addEventListener('touchstart', activeToggle)

}
initMenuMobile()

/*scroll animation*/

function initScrollAnimation() {
    const scroll = document.querySelectorAll('.scroll')
    function show() {
        
        scroll.forEach(item => {
            let windowHeight = window.innerHeight
            let elementTop = item.getBoundingClientRect().top 
            let e = elementTop * 0.6
            if (elementTop < windowHeight - e) {
                item.classList.add('show')
            } else {
                item.classList.remove('show')
            }
        })
    }
    window.addEventListener('scroll', show)
}

initScrollAnimation()


/* slide -touched */

function initslideTouched() {
    const cardWrapper = document.querySelector('.card-wrapper')
    const cardBoundig = cardWrapper.getBoundingClientRect()
    const cardImg = document.querySelectorAll('img')

    let initPos = 0
    let currScroll = 0
    let clicked= false
    
    cardImg.forEach(img => img.setAttribute('draggable', false))
    
    cardWrapper.addEventListener('mousedown', function (e) {
        cardWrapper.classList.add('grab')
        initPos = e.clientX - cardBoundig.left
        currScroll = cardWrapper.scrollLeft
        clicked= true
    })

    cardWrapper.addEventListener('mousemove', function (e) {
        if (clicked) {
            const xPos = e.clientX - cardBoundig.left
            cardWrapper.scrollLeft = currScroll + - (xPos - initPos)
        }
    })

    cardWrapper.addEventListener('mouseup', upAndLeave)
    cardWrapper.addEventListener('mouseleave', upAndLeave)

    function upAndLeave() {
        cardWrapper.classList.remove('grab')
        clicked=false
    }

}

initslideTouched()

