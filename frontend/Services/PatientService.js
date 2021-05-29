class PatientService{
    constructor(){
        this.URI = 'http://localhost:3000/api/patient';
    }

    async getPatients(){
        const dataPatients = await fetch(this.URI);
        const data = await dataPatients.json();
        console.log(data);
        return data;
    }

    async postPatient(patient){
        const res = await fetch(this.URI,{
            method: 'POST',
            body: patient
        })
        const data = await res.json();
        console.log(data);
    }

    async deletePatient(){
       const res = await fetch(`${this.URI}/${patientId}`,{
            headers:{
                'Content-Type':'application/json'
            },
            method:'DELETE'
        })

        const data =  await res.json();
        console.log(data);
    }

}

export default PatientService;