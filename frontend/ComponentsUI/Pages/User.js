export function User() {
    const $user = document.createElement('div');
    $user.classList.add('Container');
    $user.innerHTML = null;
    $user.innerHTML =`
    <div class="grid-item-search">
        <img src="./Assets/img/doctor.svg"/>
        <h3>USUARIOS</h3>
        <form id="bucarusuario">
            <input type="search" id="s" placeholder="ingrese apellido usuario" required="required"/>
            <button type="submit" id="usearch"class="btn btn-primary btn-block btn-large">Buscar</button>
        </form>
    </div>   
    <div class="grid-item-data"> 
        <h5>Datos Personales</h5>
    <form>
        <span>Usuario:</span>
        <input type="text" id="uusuario" placeholder="Usuario" required="required"/>
        <span>Contraseña:</span>
        <input type="password" id="ucontrasena" placeholder="Contraseña" required="required"/>
    </form>
    <h5>Datos del responsable del paciente</h5>
    <form>
        <span>Nombres</span>
        <input type="text" id="unombre" placeholder="Nombres" required="required"/>
        <span>Apellidos:</span>
        <input type="text" id="uapellido" placeholder="Apellidos" required="required"/>
        <span>Numero Dui:</span>
        <input type="text" id="udui" placeholder="Dui" required="required"/>
        <span>Direccion:</span>
        <input type="text" id="udireccion" placeholder="Direccion" required="required"/>
        <span>Telefono:</span>
        <input type="text" id="utelefono" placeholder="Telefono" required="required"/>
        <span>Cargo:</span>
        <input type="text" id="ucargo" placeholder="Cargo" required="required"/>
    </form>
    </div>
    <div class="grid-item-option">    
        <button  id="ubtncrear" class="btn btn-primary btn-block btn-large">Crear</button>
        <button  id="ubtnactualizar" class="btn btn-primary btn-block btn-large">Actualizar</button>
        <button  id="ubtnborrar" class="btn btn-primary btn-block btn-large">Eliminar</button>
    </div>  
        `;
    function userPage(){
            const d = document;
            d.getElementById('ubtncrear')
                .addEventListener('click', async function(){                
                    const name = d.getElementById('unombre').value;
                    const lastname = d.getElementById('uapellido').value;
                    const duiu = d.getElementById('udui').value;
                    const dir = d.getElementById('udireccion').value;
                    const phone = d.getElementById('utelefono').value;
                    const prof = d.getElementById('ucargo').value;
                    const user = d.getElementById('uusuario').value;
                    const pass = d.getElementById('ucontrasena').value;
                    try{
                    let options = {
                        method: "POST",
                        headers: {
                          "Content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            nombres:name, 
                            apellidos:lastname,
                            dui:duiu,
                            direccion:dir,
                            telefono:phone,
                            cargo:prof,
                            usuario:user,
                            contrasena:pass
                          })
                    }
                         res = await fetch("http://localhost:3000/api/usuario", options);
                         json = await res.json();
                    }catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        alert(message);
                      }
                })
          
                // Get btn search
                const uSearch = document.getElementById('usearch');
                uSearch.addEventListener('click', async function(e){
                    e.preventDefault();
                    const apellidos = document.getElementById('s').value;
                  //  document.querySelector('.spinner').style.display="block";
                    let resultdb = await fetch(`http://localhost:3000/api/usuario/${apellidos}`);
                    const data = await resultdb.json();
                    mostrarUsuario(data);
                    console.log(data);
                })
                
                function mostrarUsuario(data){
                    let d = document;
                    const name = d.getElementById('unombre');
                    const lastname = d.getElementById('uapellido');
                    const duiu = d.getElementById('udui');
                    const dir = d.getElementById('udireccion');
                    const phone = d.getElementById('utelefono');
                    const prof = d.getElementById('ucargo');
                    const user = d.getElementById('uusuario');
                    const pass = d.getElementById('ucontrasena');
                    localStorage.setItem('idusuario',data[0].u1);
                    name.value = data[0].u2;
                    lastname.value= data[0].u3;
                    duiu.value= data[0].u4;
                    dir.value= data[0].u5;
                    phone.value= data[0].u6;
                    prof.value= data[0].u7;
                    user.value= data[0].u8;
                    pass.value= data[0].u9;
                  //  document.querySelector('.spinner').style.display="none";
                }

                //actualizar usuario
                d.getElementById('ubtnactualizar')
                .addEventListener('click', async function(){
                    const uidd=localStorage.getItem('idusuario');                
                    const name = d.getElementById('unombre').value;
                    const lastname = d.getElementById('uapellido').value;
                    const duiu = d.getElementById('udui').value;
                    const dir = d.getElementById('udireccion').value;
                    const phone = d.getElementById('utelefono').value;
                    const prof = d.getElementById('ucargo').value;
                    const user = d.getElementById('uusuario').value;
                    const pass = d.getElementById('ucontrasena').value;
                    
                    try{
                      let options = {
                        method: "PUT",
                        headers: {
                          "Content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            uid:uidd,
                            nombres:name, 
                            apellidos:lastname,
                            dui:duiu,
                            direccion:dir,
                            telefono:phone,
                            cargo:prof,
                            usuario:user,
                            contrasena:pass
                        })
                      },
                         res = await fetch("http://localhost:3000/api/usuario", options);
                         json = await res.json();
                    }catch (err) {
                        let message = err.statusText || "Ocurrió un error";
                        alert(message);
                      }

                    })

                      //eliminar usuario

                      d.getElementById('ubtnborrar')
                      .addEventListener('click', async function(){
                          const uidd=localStorage.getItem('idusuario');                
                          try {
                            let options = {
                              method: "DELETE",
                              headers: {
                                "Content-type": "application/json; charset=utf-8"
                              }
                            },
                              res = await fetch(`http://localhost:3000/api/usuario/${uidd}`, options),
                              json = await res.json();
                            if (!res.ok) throw { status: res.status, statusText: res.statusText };
                          
                            location.reload();
                          } catch (err) {
                            let message = err.statusText || "Ocurrió un error";
                            alert(`Error ${err.status}: ${message}`);
                          }

                      })           
    }
        
    setTimeout(()=>userPage(),100);
    return $user;
}

