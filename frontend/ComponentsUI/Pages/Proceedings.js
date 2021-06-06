import{MenuApp} from "../MainUI/MenuApp.js";

export function Proceedings() {
    const $content = document.createElement('div');
    const $proceedings = document.createElement('div');
    $proceedings.classList.add('grid-container');
    $proceedings.innerHTML = null;
    $proceedings.innerHTML =`
        <div class="grid-item"> 
            <h1>EXPEDIENTES</h1>
            <h1>AREA</h1>
        </div>
        <div class="grid-item">    
             <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
        </div>  
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($proceedings);

    return $content;
}