import{MenuApp} from "../MainUI/MenuApp.js";

export function Patients() {
    const $content = document.createElement('div');
    const $patient = document.createElement('div');
    $patient.classList.add('grid-container');
    $patient.innerHTML = null;
    $patient.innerHTML =`
    <div class="grid-item"> 
    <div class="formulario-registro">
        <h4>REGISTRO DE PACIENTE</h4>
        <form action="">
            <h4>Nombres:</h4>
            <input  type="text"  id="name" placeholder="Nombres">
            <h4>Apellidos:</h4>
            <input type="text"  id="lastname" placeholder="Apellidos">
            <h4>Dui:</h4>
            <input  type="text"  id="dui" placeholder="Numero DUI">
            <h4>Fecha nacimiento:</h4>
            <input  type="date"  id="dateofbirth" placeholder="Fecha nacimiento">
            <h4>Telefono:</h4>
            <input  type="text"  id="phone" placeholder="Telefono">
            <h4>Genero:</h4>
            <input  type="text"  id="sex" placeholder="Genero">
            <h4>Tipo sangre:</h4>
            <input  type="text"  id="bloodtype" placeholder="tipo de sangre">
            <input class="botons" type="submit" value="Registrar">
        </form>
    </div>
</div>
<div class="grid-item">    
     <img src="http://www.salud.gob.sv/wp-content/uploads/2020/08/banner_web_wpminsal_2020-v2.png"/>
</div> 
        `;
    $content.appendChild(MenuApp());
    $content.appendChild($patient);

    return $content;
}







/*
export function Patients(data) {
    console.log(data);
    const $rowpatient=document.createElement('div');
    $rowpatient.classList.add('pag');
    $rowpatient.innerHTML=null;
    data.forEach(element => {
        $rowpatient.innerHTML +=`
        <article class="Row">
                            <span>${element.id}</span>
                            <span>${element.name}</span>
                            <span>${element.lastname}</span>
                            <span>${element.dui}</span>
                            <span>${element.phone}</span>
                            <span>${element.sex}</span>
                            <span>${element.bloodtype}</span>             
         </article>`;
        
    });
    return $rowpatient;
}*/