rotate.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.add('anim-rotate')
        setTimeout(() => {
            el.classList.remove('anim-rotate')
        }, 100)
    })
})
numbers.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.add('anim-transform')
        setTimeout(() => {
            el.classList.remove('anim-transform')
        }, 100)
    })
})