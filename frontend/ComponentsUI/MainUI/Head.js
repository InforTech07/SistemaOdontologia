export function Head() {
    const $Header=document.createElement('div');
    $Header.classList.add('mastHead');
    $Header.innerHTML=`
        <div id="navegador">
            <img src="https://www.salud.gob.sv/wp-content/themes/instituciones/img/Logo_Gobierno.svg" alt="Mision";
            <ul>
                <li><a href="#">INICIO</a></li>
                <li><a href="#Servicios">SERVICIOS</a></li>
                <li><a href="#/Noticias">NOTICIAS</a></li>
                <li><a href="#/Mision">MISION</a></li>
                <li><a href="#/Mision">VISION</a></li>
            </ul>
        </div>   
        <div id="navegador">
            <ul>
                <li><a class="social" href="https://www.facebook.com/salud.sv" target="_blank"><img src="https://www.salud.gob.sv/wp-content/themes/instituciones/img/facebook.svg" alt="facebook";</a></li>
                <li><a class="social" href="https://www.instagram.com/minsal.sv/" target="_blank"><img src="https://www.salud.gob.sv/wp-content/themes/instituciones/img/instagram.svg" alt="instagram";</a></li>
                <li><a class="social" href="https://twitter.com/SaludSV" target="_blank"><img src="https://www.salud.gob.sv/wp-content/themes/instituciones/img/twitter.svg" alt="twitter";</a></li>
                <li><a class="social" href="https://www.youtube.com/user/comunicacionesminsal" target="_blank"><img src="https://www.salud.gob.sv/wp-content/themes/instituciones/img/youtube.svg" alt="youtube";</a></li>
                <li><a><span> | </span></a></li>
                <li><a href="#/login">INGRESAR</a></li>
            </ul>
        </div>      
        `;
    return $Header; 
}