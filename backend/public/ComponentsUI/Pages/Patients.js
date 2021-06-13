export function Patients() {
    const $patient = document.createElement('div');
    $patient.classList.add('Container');
    $patient.innerHTML = null;
    $patient.innerHTML =`
    <div class="grid-item-search">
        <img src="./Assets/img/patient.svg"/>
        <h3>Paciente</h3>
        <form id="bucarpaciente">
            <div class="spinner" style="display: none;"></div>
    	    <input type="search" id="ps" placeholder="ingrese apellidos del paciente" required="required"/>
            <button id="pbtnsearch" type="submit" class="btn btn-primary btn-block btn-large">Buscar</button>
        </form>
    </div>   
    <div class="grid-item-data"> 
    <h5>Datos Personales</h5>
    <form method="POST" action="http://localhost:3000/api/paciente">
        <span>Nombres:</span>
        <input type="text" id="pname" name="pnombres" placeholder="Nombres del paciente" required="required"/>
        <span>Apellidos:</span>
        <input type="text" id="plastname" name="papellidos" placeholder="Apellidos del paciente" required="required"/>
        <span>Numero DUI:</span>
        <input type="text" id="pdui" name="pdui" placeholder="Numero DUI" required="required"/>
        <span>Telefono</span>
        <input type="text" id="pphone" name="ptelefono" placeholder="Telefono" required="required"/>
        <span>Sexo:</span>
        <input type="text" id="psex" name="psexo" placeholder="Sexo" required="required"/>
        <span>Direcciòn:</span>
        <input type="text" id="pdir" name="pdireccion" placeholder="Direccion" required="required"/>
    </form>
    </div>
    <div class="grid-item-data"> 
    <h5>Datos de emergencia</h5>
    <form>
        <span>Nombre:</span>
        <input type="text" id="rname" name="rnombreapellido" placeholder="Nombre del responsable" required="required"/>
        <span>Parentesco:</span>
        <input type="text" id="rparent" name="rparentesco" placeholder="Parentesco" required="required"/>
        <span>Telefono:</span>
        <input type="text" id="rphone" name="rtelefono" placeholder="Telefono" required="required"/> 
    </form>
    </div>
    <div class="grid-item-option">
        <button  id="pbtncrear" type="submit" class="btn btn-primary btn-block btn-large">GUARDAR</button>    
        <button id="pbtnupdate"type="submit" id="pbtnupdate" class="btn btn-primary btn-block btn-large">Actualizar</button>
        <button  id="pbtndelete" class="btn btn-primary btn-block btn-large">Eliminar</button>
    </div> 
        `;
        function patientPage(){
            const d = document;
            d.getElementById('pbtncrear')
                .addEventListener('click', async function(){                
                    const name = d.getElementById('pname').value;
                    const lastname = d.getElementById('plastname').value;
                    const dui = d.getElementById('pdui').value;
                    const sex = d.getElementById('psex').value;
                    const phone = d.getElementById('pphone').value;
                    const dir = d.getElementById('pdir').value;
                    const rname = d.getElementById('rname').value;
                    const rparent = d.getElementById('rparent').value;
                    const rphone = d.getElementById('rphone').value;
                    try{
                    let options = {
                        method: "POST",
                        headers: {
                          "Content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            pnombres:name,
                            papellidos:lastname,
                            pdui:dui,
                            psexo:sex,
                            ptelefono:phone,
                            pdireccion:dir,
                            rnombreapellido:rname,
                            rparentesco:rparent,
                            rtelefono:rphone
                          })
                    }
                         res = await fetch("http://localhost:3000/api/paciente", options);
                         json = await res.json();
                    }catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        alert(message);
                      }
                })
          
                // Get btn search
                const uSearch = document.getElementById('pbtnsearch');
                uSearch.addEventListener('click', async function(e){
                    e.preventDefault();
                    const apellidos = document.getElementById('ps').value;
                  //  document.querySelector('.spinner').style.display="block";
                    let resultdb = await fetch(`http://localhost:3000/api/paciente/${apellidos}`);
                    const data = await resultdb.json();
                    mostrarUsuario(data);
                    console.log(data);
                })
                
                function mostrarUsuario(data){
                    let d = document;
                    const name = d.getElementById('pname');
                    const lastname = d.getElementById('plastname');
                    const dui = d.getElementById('pdui');
                    const sex = d.getElementById('psex');
                    const phone = d.getElementById('pphone');
                    const dir = d.getElementById('pdir');
                    const rname = d.getElementById('rname');
                    const rparent = d.getElementById('rparent');
                    const rphone = d.getElementById('rphone');
                    localStorage.setItem('idpaciente',data[0].p1);
                    name.value = data[0].p2;
                    lastname.value= data[0].p3;
                    dui.value= data[0].p4;
                    sex.value= data[0].p5;
                    phone.value= data[0].p6;
                    dir.value= data[0].p7;
                    rname.value= data[0].p8;
                    rparent.value= data[0].p9;
                    rphone.value= data[0].p10;
                  //  document.querySelector('.spinner').style.display="none";
                }

                //actualizar usuario
                d.getElementById('pbtnupdate')
                .addEventListener('click', async function(){
                    const uidd=localStorage.getItem('idpaciente');                
                    const name = d.getElementById('pname').value;
                    const lastname = d.getElementById('plastname').value;
                    const dui = d.getElementById('pdui').value;
                    const sex = d.getElementById('psex').value;
                    const phone = d.getElementById('pphone').value;
                    const dir = d.getElementById('pdir').value;
                    const rname = d.getElementById('rname').value;
                    const rparent = d.getElementById('rparent').value;
                    const rphone = d.getElementById('rphone').value;
                    try{
                      let options = {
                        method: "PUT",
                        headers: {
                          "Content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            id:uidd,
                            pnombres:name,
                            papellidos:lastname,
                            pdui:dui,
                            psexo:sex,
                            ptelefono:phone,
                            pdireccion:dir,
                            rnombreapellido:rname,
                            rparentesco:rparent,
                            rtelefono:rphone
                        })
                      },
                         res = await fetch("http://localhost:3000/api/paciente", options);
                         json = await res.json();
                         alert("Paciente Actualizado");
                    }catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        alert(message);
                      }

                    })
                      //eliminar usuario
                      d.getElementById('ubtnborrar')
                      .addEventListener('click', async function(){
                        const pidd=localStorage.getItem('idpaciente');                
                          try {
                            let options = {
                              method: "DELETE",
                              headers: {
                                "Content-type": "application/json; charset=utf-8"
                              }
                            },
                              res = await fetch(`http://localhost:3000/api/paciente/${pidd}`, options),
                              json = await res.json();
                            if (!res.ok) throw { status: res.status, statusText: res.statusText };
                          
                            location.reload();
                          } catch (err) {
                            let message = err.statusText || "Ocurrió un error";
                            alert(`Error ${err.status}: ${message}`);
                          }

                      })           
    }
        
    setTimeout(()=>patientPage(),100);
          
    return $patient;
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