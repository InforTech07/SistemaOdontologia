class PatientService{
    constructor(){
        this.URI = 'http://localhost:3000/api/paciente';
    }

    async getPatients(){
        const dataPatients = await fetch(this.URI);
        const data = await dataPatients.json();
        console.log(data);
        return data;
    }

    async postPatient(formData){
        console.log('service');
                            console.log(formData.getAll('pnombres'));
                            console.log(formData.getAll('papellidos'));
                            console.log(formData.getAll('pdui'));
                            console.log(formData.getAll('ptelefono'));
                            console.log(formData.getAll('ptelefono'));
                            console.log(formData.getAll('pdireccion'));
                            console.log(formData.getAll('rnombreapellido'));
                            console.log(formData.getAll('rparentesco'));
                            console.log(formData.getAll('rtelefono'));

        
        const res = await fetch(this.URI,{
            method: 'POST',
            body: formData
        })
        //const data = await res.json();
       // console.log(data);*/
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