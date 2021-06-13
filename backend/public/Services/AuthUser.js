

var b = document.getElementById('boton');

b.addEventListener('click',()=>{
    console.log('funcionando');
})


/*
var formid = document.getElementById('formlogin');
    
formid.addEventListener('click', async (e)=>{
    console.log('funcionando');
   // e.preventDefault();
    /*
    var user = document.getElementById('formuser').value;
    var pass = document.getElementById('formpassword').value;
    console.log(user)
    console.log(pass)
    e.preventDefault()
    var result = await fetch(`http://localhost:3000/api/auth/${user}/${pass}`)
    const data = await result.json();
    console.log(data);
})*/