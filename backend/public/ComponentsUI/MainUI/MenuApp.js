export function MenuApp() {
    const $Menu=document.createElement('div');
    $Menu.classList.add('menuapp');
    $Menu.innerHTML=`
    <div class="Imgnav">    
        <img src="https://www.salud.gob.sv/wp-content/uploads/2020/10/banner_web_wpminsal_2020-v2-1.png"/>
    </div>
    <div id="navegador">
    <ul>
    <li><a href="#/home">HOME</a></li>
    <li><a href="#/paciente">PACIENTE</a></li>
    <li><a href="#/citas">CITAS</a></li>
    <li><a href="#/expediente">EXPEDIENTE</a></li>
    <li><a href="#/reporte">REPORTE</a></li>
    <li><a href="#/usuario">USUARIOS</a></li>
    <li><a href="#/ayuda">AYUDA</a></li>
    </ul>
    </div>     
        `;
    return $Menu; 
}