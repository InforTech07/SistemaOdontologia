
import { Homeapp } from "./MainUI/Homeapp.js";
import {Login} from "./MainUI/Login.js";
import {Home} from "./Pages/Home.js";
import {Patients} from "./Pages/Patients.js";
import {Qoutes} from "./Pages/Qoutes.js";
import {Proceedings}from "./Pages/Proceedings.js"
import {Doctor} from "./Pages/Doctor.js";
import {Report} from "./Pages/Report.js";
import {User} from "./Pages/User.js";
import {Help} from "./Pages/Help.js";


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