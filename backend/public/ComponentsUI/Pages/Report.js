export function Report() {
    const $report = document.createElement('div');
    $report.classList.add('Container');
    $report.innerHTML = null;
    $report.innerHTML =`
        <div class="grid-item-search">
            <img src="./Assets/img/report1.svg"/>
            <h3>REPORTES</h3> 
        </div> 
            <div class="grid-item-option">    
            <button  class="btn btn-primary btn-block btn-large">EMPLEADOS</button>
            <button  class="btn btn-primary btn-block btn-large">CITAS</button>
            <button  class="btn btn-primary btn-block btn-large">EXPEDIENTE</button>
            <img src="./Assets/img/report.svg"/>
            <img src="./Assets/img/report.svg"/>
            <img src="./Assets/img/report.svg"/>
         </div> 
        `;    
    return $report;
}