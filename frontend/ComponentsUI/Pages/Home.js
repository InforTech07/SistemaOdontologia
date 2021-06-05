import{MenuApp} from "../MenuApp.js";
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
             <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
        </div>  
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($ContentHome);
    return $content; 
}