export function MenuApp() {
    const $Menu=document.createElement('div');
    $Menu.classList.add('menuapp');
    $Menu.innerHTML=`
        <div>
            <a href="#/home">HOME</a>
            <a href="#/paciente">PACIENTE</a>
            <a href="#/citas">CITAS</a>
            <a href="#/expediente">EXPEDIENTE</a>
            <a href="#/medico">MEDICO</a>
            <a href="#/reporte">REPORTE</a>
            <a href="#/usuario">USUARIOS</a>
            <a href="#/ayuda">AYUDA</a>
        </div>      
        `;
    return $Menu; 
}