
import { Homeapp } from "./Homeapp.js";
import {Login} from "./Login.js";
import {Home} from "./Home.js";
import {Patients} from "./Patients.js";
import {Qoutes} from "./Qoutes.js";
import {Proceedings}from "./Proceedings.js"
import {Doctor} from "./Doctor.js";
import {Report} from "./Report.js";
import {User} from "./User.js";
import {Help} from "./Help.js";


import PatientService from "../Services/PatientService.js"
const patientService = new PatientService();



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
            break;
        case '#/home':  
                        $content.appendChild(Home());
            break;
        case '#/paciente':
                        $content.appendChild(Patients());
            break;
        case '#/citas':
                        $content.appendChild(Qoutes());
            break;
        case '#/expediente':
                        $content.appendChild(Proceedings());
            break;
        case '#/medico':
                        $content.appendChild(Doctor());
            break;
        case '#/reporte':
                        $content.appendChild(Report());
            break;
        case '#/usuario':
                        $content.appendChild(User());
            break;
        case '#/ayuda':
                        $content.appendChild(Help());
            break;     
        default:         $content.appendChild(Homeapp());
            break;
    }
}


/**
 * case '#/patient': 
            const data = await patientService.getPatients();
            $content.appendChild(Patients(data));
            break; */   