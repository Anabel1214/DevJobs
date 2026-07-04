const jobList = document.querySelector('.job-listings')
fetch('./data.json') //fetch es asincrono
    .then((response) => {
        return response.json();
    })
    .then((jobs) =>{
        console.log(jobs)

        // Crear HTML de forma dinamica dentro de JvaScript
        jobs.forEach(job =>{
            const article = document.createElement('article')
            article.className = 'job-cards' 
            article.dataset.modalidad = job.data.modalidad           
            article.dataset.nivel = job.data.nivel           
            article.dataset.technology = job.data.technology 
            article.innerHTML= `
            <div>
                <h1>${job.titulo}</h1>
                <p>${job.empresa} | ${job.ubicacion}</p>
                <h4>${job.descripcion}</h4>
            </div>
            <div><button class="boton-apply-job">Aplicar</button></div> `
            jobList.appendChild(article)
        })
    })