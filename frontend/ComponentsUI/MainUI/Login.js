export function Login() {
    const $ContentLogin=document.createElement('div');
    $ContentLogin.classList.add('grid-container');
    $ContentLogin.innerHTML=`
    <div class="login">
	<h3>INICIO DE SESION</h3>
    <form id="formlogin">
    	<input type="text" id="u" placeholder="Usuario" required="required" />
        <input type="password" id="p" placeholder="Contraseña" required="required" />
        <button type="submit" id="btnlogin"class="btn btn-primary btn-block btn-large">Ingresar</button>
        <a href="#/paciente">ingresar</a>
    </form>
    </div>     
    <div class="grid-item">    
     <img src="https://www.salud.gob.sv/wp-content/themes/instituciones/img/Logo_Gobierno.svg""/>
    </div>
    `;
    return $ContentLogin; 
}