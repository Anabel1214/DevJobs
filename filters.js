const empleos = document.querySelector('#empleos')
const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector("#filter-selected-value")
filter.addEventListener('change', function(){
    const jobs = document.querySelectorAll('.job-cards')
    const selectedValue = filter.value
    if (selectedValue){
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    } else {
        mensaje.textContent = ""
    }
    jobs.forEach(job => {
        // const modalidad = job.dataset.modalidad // primera forma
        const modalidad = job.getAttribute('data-modalidad') // segunda forma
        if (selectedValue === "" || selectedValue == modalidad){
            job.style.display = 'flex'
        } else {
            job.style.display = 'none'
        }
    })
})
