import{MenuApp} from "../MainUI/MenuApp.js";

export function Qoutes() {
    const $content = document.createElement('div');
    const $qoutes = document.createElement('div');
    $qoutes.classList.add('grid-container');
    $qoutes.innerHTML = null;
    $qoutes.innerHTML =`
        <div class="grid-item"> 
            <h1>Citas</h1>
            <h1>AREA</h1>
        </div>
        <div class="grid-item">    
             <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
        </div>  
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($qoutes);

    return $content;
}