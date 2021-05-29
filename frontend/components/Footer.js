export function Footer() {
    const $footer=document.createElement('footer');
    $footer.innerHTML=`
    <div>
    <span> Gobierno del Salvador | Ministerio de salud </span> 
    <li>Ministerio de Salud Publica y Asistencia Social</li>
    <li>Teléfonos: 503 2501 2999 | 503 7801 2945 </li>
    <li>Contactar</li>
    </div>     
    `;
    return $footer;
}