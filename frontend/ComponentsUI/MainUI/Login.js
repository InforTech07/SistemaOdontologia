export function Login() {
    const $ContentLogin=document.createElement('div');
    $ContentLogin.classList.add('grid-container');
    $ContentLogin.innerHTML=`
    <div class="grid-item"> 
    <h1>BIENVENIDO</h1>
    <form id="formlogin">
        <input type="text" id="formuser"  placeholder="Ingrese usuario"></input>
        <input type="password" id="formpassword" placeholder="Ingrese contraseña"></input><br>  
        <div>
            <button type="submit">
                Ingresar
            </button>
        </div>
    </form>
    <p id="data">datos</p>
</div>
<div class="grid-item">    
     <img src="https://www.salud.gob.sv/wp-content/uploads/2020/10/banner_web_wpminsal_2020-v2-1.png"/>
</div>
<script>
var formid = document.getElementById('formlogin');
    
formid.addEventListener('submit', async (e)=>{
    var user = document.getElementById('formuser').value;
    var pass = document.getElementById('formpassword').value;
    var d = document.getElementById('data');
    console.log(user)
    console.log(pass)
    d.innerHTML= user
    e.preventDefault()
})
</script>
  `;
    return $ContentLogin; 
}