//Pimera forma de agregar eventos 
/* const boton = document.querySelectorAll('.boton-apply-job')
boton.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.classList.add('is-applied')
        boton.disabled = true
    })
}) */

//Segunda forma de agregar eventos
const jobList = document.querySelector('.job-listings')
jobList.addEventListener('click', function(event) {
    const element = event.target 
    if(element.classList.contains('boton-apply-job')){
        element.classList.add('is-applied')
        element.disabled = true
    }
})


