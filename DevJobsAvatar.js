class DevJobsAvatar extends HTMLElement{
    constructor(){
        super(); // LLamar al constructor de HTMLElements
        this.attachShadow({mode:'open'})
    }

    createUrl (srvice, username){ 
        return "https://unavatar.io/${service}/${username}"
    }

    render() {
        const service = this.getAttribute('service') ?? 'github'
        const username = this.getAttribute('username') ?? 'anabel1214'  
        const size = this.getAttribute('size') ?? '40'  
        const url = this.createUrl(service, username)  

        this.shadowRoot.innerHTML = `
        <style>
        img{
            width: 30px;
            border-radius: 100%;
        }
        </style>
        <img src='${url}' alt='${username}'>`
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar)