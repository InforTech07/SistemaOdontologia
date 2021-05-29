export function Login() {
    const $ContentLogin=document.createElement('div');
    $ContentLogin.classList.add('grid-container');
    $ContentLogin.innerHTML=`
        <div class="grid-item"> 
            <h1>BIENVENIDO</h1>
            <form action="">
                <input type="text" placeholder="Ingrese usuario"></input>
                <input type="password" placeholder="Ingrese contraseña"></input><br>  
                <a href="#/home">Ingresar</a>
            </form>
        </div>
        <div class="grid-item">    
             <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
        </div>  
        `;
    return $ContentLogin; 
}