import{MenuApp} from "./MenuApp.js";

export function Report() {
    const $content = document.createElement('div');
    const $report = document.createElement('div');
    $report.classList.add('grid-container');
    $report.innerHTML = null;
    $report.innerHTML =`
        <div class="grid-item"> 
            <h1>REPORTES</h1>
            <h1>AREA</h1>
        </div>
        <div class="grid-item">    
             <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
        </div>  
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($report);
    
    return $content;
}