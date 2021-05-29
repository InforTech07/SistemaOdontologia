import{MenuApp} from "./MenuApp.js";

export function Help() {
    const $content = document.createElement('div');
    const $help = document.createElement('div');
    $help.classList.add('grid-container');
    $help.innerHTML = null;
    $help.innerHTML =`
        <div class="grid-item"> 
            <h1>AYUDA</h1>
            <h1>AREA</h1>
        </div>
        <div class="grid-item">    
             <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
        </div>  
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($help);

    return $content;
}