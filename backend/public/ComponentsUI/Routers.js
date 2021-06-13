import { Homeapp } from "./MainUI/Homeapp.js";
import {Login} from "./MainUI/Login.js";
import {Home} from "./Pages/Home.js";
import {Patients} from "./Pages/Patients.js";
import {Qoutes} from "./Pages/Qoutes.js";
import {Proceedings}from "./Pages/Proceedings.js"
import {Report} from "./Pages/Report.js";
import {User} from "./Pages/User.js";
import {Help} from "./Pages/Help.js";
import{MenuApp} from "./MainUI/MenuApp.js";

export async function Router() {
    const $content=document.getElementById('contentpage');
    let {hash} = location;
    console.log(hash);
    $content.innerHTML=null;
    switch (hash) {
        case '/' : 
        case '#/':
                        $content.appendChild(Homeapp());
            break;
        case '#/login':  
                        $content.appendChild(Login());
                        const b =document.getElementById('btnlogin');
                        b.addEventListener('click',async function(e){
                            e.preventDefault();
                            console.log('funcionando');
                            var user = document.getElementById('u').value;
                            var pass = document.getElementById('p').value;
                            var result = await fetch(`http://localhost:3000/api/auth/${user}/${pass}`)
                            const data = await result.json();
                            if(pass === data[0].contrasena && data[0].estado == 1){
                                localStorage.setItem('datasession',JSON.stringify(data));
                                location.href ='#/home';

                            }else{
                                alert('No se econtro el usuario, o la contraseña no concide');
                            }
                        });      
            break;
        case '#/home':  
                        $content.appendChild(MenuApp());
                        $content.appendChild(Home());
                        var btlogin = document.getElementById('btningreso');
                        var btsalir = document.getElementById('btnsalida');
                        const name = document.getElementById('nombre');
                        const profesion = document.getElementById('puesto'); 
                        async function datassesion(){
                            if(localStorage.getItem('datasession')){
                                var d = JSON.parse(localStorage.getItem('datasession'));
                                var id=d[0].empleadoid;
                                btlogin.hidden=true;
                                btsalir.hidden=false;
                                let resultapi =await fetch(`http://localhost:3000/api/inicio/${id}`)
                                const dataempleado = await resultapi.json();
                                console.log(dataempleado);
                                name.innerHTML=dataempleado[0].Nombre +" "+ dataempleado[0].Apellido;
                                profesion.innerHTML = dataempleado[0].Cargo;
                                document.querySelector('.spinner').style.display="none";
                            }else{
                                console.log('no hay datos');
                            }
                        }
                        datassesion();               
            break;
        case '#/paciente':
                        $content.appendChild(MenuApp()); 
                        $content.appendChild(Patients());   
                        /*                     
                        const btnsearch = document.getElementById('btnsearch');
                        btnsearch.addEventListener('click', async function(e){
                            e.preventDefault();
                            const apellido = document.getElementById('papellido').value;
                            document.querySelector('.spinner').style.display="block";
                            let resultdb = await fetch(`http://localhost:3000/api/paciente/${apellido}`);
                            const data = await resultdb.json();
                            mostrarpaciente(data);
                            console.log(data);
                        })
                        
                        function mostrarpaciente(data){
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
                            document.querySelector('.spinner').style.display="none";
                        }
                        const btndelete = document.getElementById('pbtndelete');
                        btndelete.addEventListener('click', async function(e){
                            e.preventDefault();
                            const idpaciente = localStorage.getItem('idpaciente');
                            console.log('eliminando');
                            let resultdb = await fetch(`http://localhost:3000/api/paciente/${idpaciente}`,{
                                method: 'DELETE'
                            });
                            console.log(resultdb);
                            var msg=({'json':'mesagee'})
                            alert(JSON.stringify(msg));
                        })   */
            break;
        case '#/citas':
                        $content.appendChild(MenuApp()); 
                        $content.appendChild(Qoutes());
            break;
        case '#/expediente':
                        $content.appendChild(MenuApp()); 
                        $content.appendChild(Proceedings());
            break;
        case '#/reporte':
                        $content.appendChild(MenuApp()); 
                        $content.appendChild(Report());
            break;
        case '#/usuario':
                        $content.appendChild(MenuApp()); 
                        $content.appendChild(User());                        
            break;
        case '#/ayuda':
                        $content.appendChild(MenuApp()); 
                        $content.appendChild(Help());
            break;     
        default:         
                        $content.appendChild(Homeapp());
            break;
    }
}


/**
 * case '#/patient': 
            const data = await patientService.getPatients();
            $content.appendChild(Patients(data));
            break; */   

/**
 * 
 * 
 * 
 *  //funcion pora actualizar.
                        const btnupdate = document.getElementById('pbtnupdate');

                        btnupdate.addEventListener('click', async function(e){
                            e.preventDefault();
                            console.log('acutalizando');
                            let d = document;
                            const id = localStorage.getItem('idpaciente');
                            const name = d.getElementById('pname').value;
                            const lastname = d.getElementById('plastname').value;
                            const dui = d.getElementById('pdui').value;
                            const sex = d.getElementById('psex').value;
                            const phone = d.getElementById('pphone').value;
                            const dir = d.getElementById('pdir').value;
                            const rname = d.getElementById('rname').value;
                            const rparent = d.getElementById('rparent').value;
                            const rphone = d.getElementById('rphone').value;

                            const formData = new FormData();
                                formData.append('idpaciente',id);
                                formData.append('pnombres',name);
                                formData.append('papellidos',lastname);
                                formData.append('pdui',dui);
                                formData.append('psexo',sex);
                                formData.append('ptelefono',phone);
                                formData.append('pdireccion',dir);
                                formData.append('rnombreapellido',rname);
                                formData.append('rparentesco',rparent);
                                formData.append('rtelefono',rphone);

                                await fetch('http://localhost:3000/api/paciente',{
                                    method: 'PUT',
                                    body: formData
                                });
 var d = document;
                        var pcreate = d.getElementById('pbtncreate');
                        pcreate.addEventListener('click', async ()=>{
                            const name = d.getElementById('pname').value;
                            const lastname = d.getElementById('plastname').value;
                            const dui = d.getElementById('pdui').value;
                            const sex = d.getElementById('psex').value;
                            const phone = d.getElementById('pphone').value;
                            const dir = d.getElementById('pdir').value;
                            const rname = d.getElementById('rname').value;
                            const rparent = d.getElementById('rparent').value;
                            const rphone = d.getElementById('rphone').value;
                            
                            let Data ={
                                "pnombres": name,
                                "papellidos":lastname,
                                "pdui":dui,
                                "psexo":sex,
                                "ptelefono":phone,
                                "pdireccion":dir,
                                "rnombreapellido":rname,
                                "rparentesco":rparent,
                                "rtelefono":rphone
                            }

                            /*
                            console.log(Data)
                            await patientserv.postPatient(Data);
                            */
                            /*
                            const formData = new FormData();
                                formData.append('pnombres',name);
                                formData.append('papellidos',lastname);
                                formData.append('pdui',dui);
                                formData.append('psexo',sex);
                                formData.append('ptelefono',phone);
                                formData.append('pdireccion',dir);
                                formData.append('rnombreapellido',rname);
                                formData.append('rparentesco',rparent);
                                formData.append('rtelefono',rphone);
                            console.log(formData.getAll('pnombres'));
                            console.log(formData.getAll('papellidos'));
                            console.log(formData.getAll('pdui'));
                            console.log(formData.getAll('ptelefono'));
                            console.log(formData.getAll('ptelefono'));
                            console.log(formData.getAll('pdireccion'));
                            console.log(formData.getAll('rnombreapellido'));
                            console.log(formData.getAll('rparentesco'));
                            console.log(formData.getAll('rtelefono'));
                           
                            await fetch('http://localhost:3000/api/paciente',{
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                method: 'POST',
                                body: [{"hola":"holass"}]
                            });
                           

                        })
 * 
 */