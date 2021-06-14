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
            <button  id="re" class="btn btn-primary btn-block btn-large">EMPLEADOS</button>
            <button  id="rci"class="btn btn-primary btn-block btn-large">CITAS</button>
            <button  id="rx" class="btn btn-primary btn-block btn-large">EXPEDIENTE</button>
            <img src="./Assets/img/report.svg"/>
            <img src="./Assets/img/report.svg"/>
            <img src="./Assets/img/report.svg"/>
         </div> 
         <div class="grid-item-resultados">
            <div><h4 id="title"></h4></div>
            <table id="datar"></table>   
         </div>
        `;
        
        function reportPage(){

            const d = document; 
            const uSearch = document.getElementById('re');
            uSearch.addEventListener('click', async function(e){
                e.preventDefault();
              //  document.querySelector('.spinner').style.display="block";
                let resultdb = await fetch("http://localhost:3000/api/reportes/e");
                const data = await resultdb.json();
                mostrarDatos(data,'EMPLEADOS');
                console.log(data);
            })



            d.getElementById('rx').addEventListener('click', async function(e){
                e.preventDefault();
                let result = await fetch("http://localhost:3000/api/reportes/h");
                const data = await result.json();
                mostrarDatos(data,'HISTORIAL MEDICO');
            })

            d.getElementById('rci').addEventListener('click', async function(e){
                e.preventDefault();
                let result = await fetch("http://localhost:3000/api/reportes/c");
                const data = await result.json();
                mostrarDatos(data,'CITAS MEDICAS');
            })


            function mostrarDatos(data,title){
                const bodyRowd = d.getElementById('datar');
                bodyRowd.innerHTML = null;
                const $headdata = d.createElement('thead');
                $headdata.innerHTML=`
                        <h4>${title}</h4>
                    <tr>
                        <th>Dato</th>
                        <th>Dato</th>
                        <th>Dato</th>
                        <th>Dato</th>
                        <th>Dato</th>
                        <th>Dato</th>
                        <th>Dato</th>
                    </tr>
                    `;
                if(data != null){
                    const $bodydata = d.createElement('tbody');
                    $bodydata.innerHTML= null;
                    for (let index = 0; index < data.length; index++) {
                         $bodydata.innerHTML +=`
                            <tr>
                                <td>${data[index].d1}</td>
                                <td>${data[index].d2}</td>
                                <td>${data[index].d3}</td>
                                <td>${data[index].d4}</td>
                                <td>${data[index].d5}</td>
                                <td>${data[index].d6}</td>
                                <td>${data[index].d7}</td>
                            <tr>
                            `;
                        }
                    document.getElementById('title').innerHTML=title;
                    bodyRowd.appendChild($headdata);
                    bodyRowd.appendChild($bodydata);
                }else{
                    alert('No tiene historial medico');
                    bodyRowd.innerHTML='No Tiene historial medico';
                } 
            }

        }

        setTimeout(()=>reportPage(),100);


    return $report;
}