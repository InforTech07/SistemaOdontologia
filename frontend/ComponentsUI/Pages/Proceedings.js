export function Proceedings() {
    const $proceedings = document.createElement('div');
    $proceedings.classList.add('Container');
    $proceedings.innerHTML = null;
    $proceedings.innerHTML =`
        <div class="grid-item-search">
            <img src="./Assets/img/expediente.svg"/>
            <h3>EXPEDIENTES</h3>
        <form id="bucarpaciente">
            <input type="search" id="es" placeholder="ingrese apellidos" required="required"/>
            <button id="ebtnsearch" type="submit" class="btn btn-primary btn-block btn-large">Buscar</button>
        </form>
        </div>
        </div> 
        <div>
            <h4>Nombres: <span id="e1"></span></h4>
            <h4>Apellidos: <span id="e2"></span></h4>
            <h4>DUI: <span id="e3"></span></h4>
        </div>
        <div class="grid-item-resultados">
            <h5>DIAGNOSTICO Y RESULTADOS:</h5>
            <table id ="datah"></table>
        </dvi> 
        <div class="grid-item-resultados">
            <h5>ODONTOGRAMA:</h5>
            <table id="datao"></table>
        </div>
        <div class="grid-item-data"> 
            <h5>INGRESO DE DATOS DIAGNOSTICOS RESULTADOS</h5>
        <form>
            <span>Diagnostico:</span>
            <input type="text" id="ed" placeholder="Diagnostico" required="required"/>
            <span>Resultado:</span>
            <input type="text" id="er" placeholder="Resultados" required="required"/>
            <span>Tratamiento:</span>
            <input type="text" id="et" placeholder="Tratamiento" required="required"/>
            <button id="ebtndiagnostico" type="submit" class="btn btn-primary btn-block btn-large">Guardar</button>
        </form>
        </div>
        <div class="grid-item-data"> 
            <h5>INGRESO DE DATOS ODONTOGRAMA</h5>
        <form >
            <span>Numero Diente:</span>
            <input type="number" id="en" placeholder="numero diente" required="required"/>
            <span>Estado Diente:</span>
            <input type="text" id="ee" placeholder="Estado diente" required="required"/>
            <button  id="ebtnd" type="submit" class="btn btn-primary btn-block btn-large">Guardar</button>
        </form>
        </div>
        `;
        
        function expedientePage(){
            // Get btn search
            const d = document; 
            const uSearch = document.getElementById('ebtnsearch');
            uSearch.addEventListener('click', async function(e){
                e.preventDefault();
                const apellidos = document.getElementById('es').value;
              //  document.querySelector('.spinner').style.display="block";
                let resultdb = await fetch(`http://localhost:3000/api/expediente/${apellidos}`);
                const data = await resultdb.json();
                mostrarUsuario(data);
                console.log(data);
            })
            
            function mostrarUsuario(data){
                const name = d.getElementById('e1');
                const lastname = d.getElementById('e2');
                const duiu = d.getElementById('e3');
                localStorage.setItem('idexpediente',data[0].p1);
                name.innerHTML = data[0].p2;
                lastname.innerHTML= data[0].p3;
                duiu.innerHTML= data[0].p4;
                gethistorialmedico(data[0].p1);
                getodontograma(data[0].p1);
              //  document.querySelector('.spinner').style.display="none";
            }

            //consulta de historial medico
            async function gethistorialmedico(eid){
                let resultdb = await fetch(`http://localhost:3000/api/expediente/h/${eid}`);
                const resulth = await resultdb.json();
                const bodyRowd = d.getElementById('datah');
                bodyRowd.innerHTML = null;
                const $headdat = d.createElement('thead');
                $headdat.innerHTML=`
                    <tr>
                        <th>Fecha</th>
                        <th>DIAGNOSTICO</th>
                        <th>RESULTADO</th>
                        <th>TRATAMIENTO</th>
                    </tr>
                    `;
                if(resulth != null){
                    const $bodyrow = d.createElement('tbody');
                    $bodyrow.innerHTML= null;
                    for (let index = 0; index < resulth.length; index++) {
                         $bodyrow.innerHTML +=`
                            <tr>
                                <td>${resulth[index].h1}</td>
                                <td>${resulth[index].h2}</td>
                                <td>${resulth[index].h3}</td>
                                <td>${resulth[index].h4}</td>
                            <tr>
                            `;
                        }
                    bodyRowd.appendChild($headdat);
                    bodyRowd.appendChild($bodyrow);
                }else{
                    alert('No tiene historial medico');
                    bodyRowd.innerHTML='No Tiene historial medico';
                } 
            } 

             //consulta de odontograma
             async function getodontograma(eid){
                let resultdb = await fetch(`http://localhost:3000/api/expediente/od/${eid}`);
                const resulto = await resultdb.json();
                const bodyRow = d.getElementById('datao');
                bodyRow.innerHTML = null;
                const $headdata = d.createElement('thead');
                $headdata.innerHTML=`
                    <tr>
                        <th>FECHA</th>
                        <th>DIENTE</th>
                        <th>ESTADO DIENTE</th>
                    </tr>
                    `;
                if(resulto != null){
                    const $rowData = d.createElement('tbody');
                    $rowData.setAttribute('id','orow');
                    for (let index = 0; index < resulto.length; index++) {
                         $rowData.innerHTML +=`
                                <tr>
                                    <td>${resulto[index].o1}</td>
                                    <td>${resulto[index].o2}</td>
                                    <td>${resulto[index].o3}</td>
                                </tr>
                            `;
                    }
                    bodyRow.appendChild($headdata); 
                    bodyRow.appendChild($rowData);
                    
                }else{
                    alert('No tiene historial medico');
                    bodyRow.innerHTML='No Tiene expediente odontograma';
                } 
            } 

            //post a diagnsotico
            d.getElementById('ebtndiagnostico')
                .addEventListener('click', async function(e){
                    e.preventDefault();
                    const eid = localStorage.getItem('idexpediente');               
                    const eed = d.getElementById('ed').value;
                    const eer = d.getElementById('er').value;
                    const eet = d.getElementById('et').value;
                    try{
                    let options = {
                        method: "POST",
                        headers: {
                          "Content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            ediagnostico:eed,
                            eresultado:eer,
                            etratamiento:eet,
                            eid:eid
                          })
                    }
                         res = await fetch("http://localhost:3000/api/expediente/d", options);
                         json = await res.json();
                    }catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        alert(message);
                      }

                      gethistorialmedico(eid);
                })

                //post  odontograma
            d.getElementById('ebtnd').addEventListener('click', async function(e){
                        e.preventDefault();
                        const eid = localStorage.getItem('idexpediente');               
                        const eed = d.getElementById('en').value;
                        const eer = d.getElementById('ee').value;
                        try{
                            let options = {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json; charset=utf-8"
                            },
                            body: JSON.stringify({
                                eestado:eer,
                                enumero:eed,
                                eid:eid
                            })
                        }
                            res = await fetch("http://localhost:3000/api/expediente/o", options);
                            json = await res.json();
                            
                        }catch (err) {
                            let message = err.statusText || "Ocurrió un error";
                            alert(message);
                         }
                         getodontograma(eid);
                })
                
                
           }
    setTimeout(()=>expedientePage(),100);
    return $proceedings;
}


/*

const $r=d.createElement('tr');
$r.innerHTML= null;
$r.innerHTML = `
    <td>--</td>
    <td>${eed}</td>
    <td>${eid}</td>
    `;
d.getElementById('datao').appendChild($r);*/