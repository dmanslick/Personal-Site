class Project extends HTMLElement {
    constructor() {
        super();
        const tags = this.getAttribute('data-tags').split(', ')
        this.innerHTML = `
        <div>
            <h2 class="text-center my-5 text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">${this.getAttribute('data-website')}</h2>
            <a href=${this.getAttribute('data-link')} target="_blank"><img class="border-2 rounded-xl max-w-full h-auto drop-shadow-md" src="${this.getAttribute('data-image')}" alt="${this.getAttribute('data-alt')}"></a>
            <p class="flex flex-row justify-center gap-3 mt-6 flex-wrap text-sm lg:text-base">
            ${tags.map(tag => {
                return `<span class="outline-1 outline outline-black text-black py-1 px-2 rounded hover:bg-black hover:text-white transition-all duration-300 cursor-pointer h-fit text-center">${tag}</span>`
            }).join('')}
            </p>
        </div>
        `;
    }
}

customElements.define('portfolio-project', Project)