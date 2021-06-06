import{MenuApp} from "../MainUI/MenuApp.js";
export function User() {
    const $content = document.createElement('div');
    const $user = document.createElement('div');
    $user.classList.add('grid-container');
    $user.innerHTML = null;
    $user.innerHTML =`
        <div class="grid-item"> 
            <div class="formulario-registro">
                <h4>Ingreso usuarios</h4>
                <form action="">
                    <h4>Nombres:</h4>
                    <input  type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre">
                    <h4>Apellidos:</h4>
                    <input type="text" name="apellidos" id="apellidos" placeholder="Ingrese su apellido">
                    <h4>Dui:</h4>
                    <input  type="text" name="dui" id="dui" placeholder="Ingrese su numero de DUI">
                    <h4>Fecha nacimiento:</h4>
                    <input  type="date" name="fechanacimiento" id="fechanacimiento" placeholder="Ingrese su fecha de nacimiento">
                    <h4>Cargo:</h4>
                    <input  type="text" name="cargo" id="cargo" placeholder="Ingrese su cargo">
                    <h4>Direccion:</h4>
                    <input  type="text" name="direccion" id="direccion" placeholder="Ingrese su direcccion">
                    <h4>Telefono:</h4>
                    <input  type="text" name="telefono" id="telefono" placeholder="Ingrese su numero de telefono">
                    <h4>fecha - Ingreso:</h4>
                    <input type="date" name="fechaingreso" id="fechaingreso" placeholder="Ingrese fecha de ingreso">
                    <input class="botons" type="submit" value="Registrar">
                </form>
            </div>
        </div>
        <div class="grid-item">    
             <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
        </div>  
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($user);

    return $content;
}