export function More() {
    const $contentmore=document.createElement('div');
    $contentmore.classList.add('pag');
    $contentmore.innerHTML=`
    <span> Otro pagina de la aplicacion </span>  
        `;
    return $contentmore;
}