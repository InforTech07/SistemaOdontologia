import{MenuApp} from "../MainUI/MenuApp.js";
export function Home() {
    const $content = document.createElement('div');
    const $ContentHome = document.createElement('div');
    $ContentHome.classList.add('grid-container');
    $ContentHome.innerHTML=`
        <div class="grid-item"> 
            <h1>BIENVENIDO</h1>
            <h1>AL SISTEMA</h1>
        </div>
        <div class="grid-item">    
             <img src="https://www.salud.gob.sv/wp-content/uploads/2020/10/banner_web_wpminsal_2020-v2-1.png"/>
        </div>  
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($ContentHome);
    return $content; 
}