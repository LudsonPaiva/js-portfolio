
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const accordeon = trigger.parentElement // aqui pegamos o acordeon, pois o pai do botão é o acordeion
        const isOpen = accordeon.classList.contains('open')

        if (isOpen) {
            accordeon.classList.remove('open')
        } else {
            accordeon.classList.add('open')
        } // adiciona ou remove a classe open
    })
})