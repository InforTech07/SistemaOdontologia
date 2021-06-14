export function Help() {
    const $help = document.createElement('div');
    $help.classList.add('Container');
    $help.innerHTML = null;
    $help.innerHTML =`
        <div class="grid-item"> 
            <h1>AYUDA</h1>
            <h4>Tutorial para el uso de la aplicacion</h4>
            <source> <iframe width="500" height="480" marging="25%" 
            aling-items: center src="https://www.youtube.com/embed/LIbsMw0R-FY" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        `;
    return $help;
}