const express = require('express');
const morgan = require('morgan');
const path = require('path');
const env = require('dotenv').config();


//inicializaciones
const app = express();

//configuraciones
app.set('port',3000);

//2. Middlewares
app.use(morgan('dev')); //ver peticiones a nuestro sevidor.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//3.Routes  rutas del servidor
app.use('/api/user',require('./routers/usuario'));
app.use('/api/patient',require('./routers/paciente'));
app.use("/api/citamedica",require("./routers/citamedica"));
app.use("/api/reportes",require("./routers/reportes"));
app.use("/api/expediente",require("./routers/expediente"));
app.use("/api/medicos",require("./routers/medicos"));
app.use("/api/ayuda",require("./routers/ayuda"));

//4.static file
app.use(express.static(path.join(__dirname,'../frontend')));

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('iniciando servidor en el puerto',app.get('port'));
})