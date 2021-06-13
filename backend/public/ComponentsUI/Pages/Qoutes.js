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
        <form id="datospaciente">
            <span>Fecha:</span>
            <input type="date" id="s" placeholder="Fecha" required="required"/>
            <span>Hora:</span>
            <input type="time" id="s" placeholder="Hora" required="required"/>
            <span>Tipo cita:</span>
            <input type="text" id="s" placeholder="Tipo cita" required="required"/>
            <span>Nota:</span>
            <input type="text" id="p" placeholder="Observaciones" required="required"/>
            <button type="submit" class="btn btn-primary btn-block btn-large">Guardar</button>
        </form>
        </div>
        <div class="grid-item-resultados">
            <h5>Citas en cola:</h5>
            <table>
                <thead>
                    <tr>
                        <th>Paciente</th>
                        <th>Dui</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Tipo</th>
                        <th>Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>January</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$100</td>
                    </tr>  
                </tbody>
            </table>
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
         }

        }
    setTimeout(()=>CitasPage(),100);

    return $qoutes;
}