
export function Home() {
    const $ContentHome = document.createElement('div');
    $ContentHome.classList.add('grid-container');
    $ContentHome.innerHTML=`
        <div class="grid-item">
            <img src="./Assets/img/doctor2.svg"/> 
            <h1>BIENVENIDO</h1>
            <div>
                <span id="nombre"></span><sapn> | </span><span id="puesto"></span>
                <div class="spinner" style="display: block;"></div>
            </div>
        </div>
        <div class="grid-item">    
            <img src="./Assets/img/home.svg"/>
             <h1>MODULO DE ODONTOLOGIA</h1>
        </div>  
        `;
    return $ContentHome; 
}