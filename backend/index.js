const express = require('express');
const morgan = require('morgan');
const path = require('path');
const env = require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');


//inicializaciones
const app = express();
require('./config/passport');

//configuraciones
app.set('port',3000);

//2. Middlewares
app.use(morgan('dev')); //ver peticiones a nuestro sevidor.
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


//3.Routes  rutas del servidor
app.use('/api/auth',require('./routers/auth'));
app.use('/api/inicio',require('./routers/home'));
app.use('/api/usuario',require('./routers/usuario'));
app.use('/api/paciente',require('./routers/paciente'));
app.use("/api/citamedica",require("./routers/citamedica"));
app.use("/api/reportes",require("./routers/reportes"));
app.use("/api/expediente",require("./routers/expediente"));
app.use("/api/ayuda",require("./routers/ayuda"));

//4.static file
app.use(express.static(path.join(__dirname,'./public')));

//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log('iniciando servidor en el puerto',app.get('port'));
})