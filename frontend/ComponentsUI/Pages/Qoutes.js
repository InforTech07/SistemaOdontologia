export function Qoutes() {
    const $qoutes = document.createElement('div');
    $qoutes.classList.add('Container');
    $qoutes.innerHTML = null;
    $qoutes.innerHTML =`
        <div class="grid-item-search">
            <img src="./Assets/img/cita.svg"/>
            <h3>Cita Medica</h3>
            <form id="bucarpaciente">
            <input type="search" id="cs" placeholder="ingrese apellidos" required="required"/>
            <button id="cbtnsearch"type="submit" class="btn btn-primary btn-block btn-large">Buscar</button>
            </form>
        </div> 
        <div>
            <h3>Nombres: <span id="c1"></span></h3>
            <h3>Apellidos: <span id="c2"></span></h3>
            <h3>DUI: <span id="c3"></span></h3>
        </div> 
        <div class="grid-item-data"> 
            <h5>Datos cita</h5>
        <form>
            <span>Fecha:</span>
            <input type="date" id="cf" placeholder="Fecha" required="required"/>
            <span>Hora:</span>
            <input type="time" id="ch" placeholder="Hora" required="required"/>
            <span>Tipo cita:</span>
            <input type="text" id="ct" placeholder="Tipo cita" required="required"/>
            <span>Nota:</span>
            <input type="text" id="co" placeholder="Observaciones" required="required"/>
            <button id="cbtng" type="submit" class="btn btn-primary btn-block btn-large">Guardar</button>
        </form>
        </div>
        <div class="grid-item-resultados">
            <h5>HISTORIAL DE CITAS DEL PACIENTE:</h5>
            <table id="chistory"></table>
        </dvi> 
        `;

function CitasPage(){
         // Get btn search
         const uSearch = document.getElementById('cbtnsearch');
         uSearch.addEventListener('click', async function(e){
             e.preventDefault();
             const apellidos = document.getElementById('cs').value;
           //  document.querySelector('.spinner').style.display="block";
             let resultdb = await fetch(`http://localhost:3000/api/citamedica/${apellidos}`);
             const data = await resultdb.json();
             mostrarUsuario(data);
             console.log(data);
         })
         
         function mostrarUsuario(data){
             let d = document;
             const name = d.getElementById('c1');
             const lastname = d.getElementById('c2');
             const duiu = d.getElementById('c3');
             localStorage.setItem('idcitamedica',data[0].p1);
             name.innerHTML = data[0].p2;
             lastname.innerHTML= data[0].p3;
             duiu.innerHTML= data[0].p4;
           //  document.querySelector('.spinner').style.display="none";
           gethistorialcita(data[0].p1);
         }

         document.getElementById('cbtng')
            .addEventListener('click', async function(e){
                e.preventDefault();
                const d = document;
                    const cfecha = d.getElementById('cf').value;
                    const chora = d.getElementById('ch').value;
                    const ctipo = d.getElementById('ct').value;
                    const cobs = d.getElementById('co').value;
                    const cid = localStorage.getItem('idcitamedica');
                    try{
                    let options = {
                        method: "POST",
                        headers: {
                          "Content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            fecha:cfecha,
                            hora:chora,
                            tipo:ctipo,
                            obs:cobs,
                            cid:cid
                          })
                    }
                         res = await fetch("http://localhost:3000/api/citamedica", options);
                         json = await res.json();
                    }catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        alert(message);
                      }

                      gethistorialcita(cid);
            })



            //consulta de historial medico
            async function gethistorialcita(id){
                let resultdb = await fetch(`http://localhost:3000/api/citamedica/c/${id}`);
                const resulth = await resultdb.json();
                const bodyRowd = document.getElementById('chistory');
                bodyRowd.innerHTML = null;
                const $headdat = document.createElement('thead');
                $headdat.innerHTML=`
                    <tr>
                        <th>Fecha</th>
                        <th>HORA</th>
                        <th>TIPO</th>
                        <th>OBSERAVACIONES</th>
                    </tr>
                    `;
                if(resulth != null){
                    const $bodyrow = document.createElement('tbody');
                    $bodyrow.innerHTML= null;
                    for (let index = 0; index < resulth.length; index++) {
                         $bodyrow.innerHTML +=`
                            <tr>
                                <td>${resulth[index].c1}</td>
                                <td>${resulth[index].c2}</td>
                                <td>${resulth[index].c3}</td>
                                <td>${resulth[index].c4}</td>
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
        }
    setTimeout(()=>CitasPage(),100);

    return $qoutes;
}