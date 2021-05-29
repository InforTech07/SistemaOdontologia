export function Head() {
    const $Header=document.createElement('div');
    $Header.classList.add('mastHead');
    $Header.innerHTML=`
        <div>
            <a href="#">Inicio</a>
            <a href="#">Mision</a>
            <a href="#">Servicios</a>
            <a href="#">Vision</a>
            <a href="#">Noticias</a>
        </div>
        <div>
            <a href="#/login">Ingresar</a>
        </div>      
        `;
    return $Header; 
}