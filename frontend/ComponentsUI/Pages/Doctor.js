import{MenuApp} from "../MainUI/MenuApp.js";

export function Doctor() {
    const $content = document.createElement('div');
    const $doctor = document.createElement('div');
    $doctor.classList.add('grid-container');
    $doctor.innerHTML = null;
    $doctor.innerHTML =`
        <div class="grid-item"> 
            <h1>MEDICOS</h1>
            <h1>AREA</h1>
        </div>
        <div class="grid-item">    
             <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
        </div>  
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($doctor);

    return $content;
}