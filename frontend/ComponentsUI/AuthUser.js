
var formid = document.getElementById('formlogin');
    
formid.addEventListener('submit', async (e)=>{
    console.log('funconando');
    e.preventDefault();
    /*var user = document.getElementById('formuser').value;
    var pass = document.getElementById('formpassword').value;
    console.log(user)
    console.log(pass)
    e.preventDefault()
    var result = await fetch(`http://localhost:3000/api/auth/${user}/${pass}`);
    const data = await result.json();
    console.log(data);*/
})






/*
class AuthUser{
    constructor(){
        this.URI = 'http://localhost:3000/api/auth';
    }

    async getAuthUser(user,pass){
        const dataUser = await fetch(`${this.URI}/${user}/${pass}`);
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

export default AuthUser;*/