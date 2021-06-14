const {Router} = require("express");
const router = Router();
const DB = require('../config/dbconnection');

//ruta inicial de cita medica 
router.get("/:apellidos", async (req,res)=>{
    const apellido = req.params.apellidos;
    sql = "SELECT ID, NOMBRES, APELLIDOS, DUI FROM TBL_PACIENTE WHERE (APELLIDOS = :apellido AND ESTADO = 1)";
    let result = await DB.Dbconnect(sql,[apellido],false);
    Users =[];
    result.rows.map(user => {
        let userSchema ={
            "p1": user[0],
            "p2": user[1],
            "p3": user[2],
            "p4": user[3],
        }
        Users.push(userSchema);
    })

    res.json(Users);
});

/// get citas
router.get("/c/:id", async (req,res)=>{
    const id = req.params.id;
    sql = "SELECT FECHACITAM, CITAHORA, TIPOCITA, NOTA FROM TBL_CITAMEDICA WHERE (IDPACIENTE = :id AND ESTADO = 1)";
    let result = await DB.Dbconnect(sql,[id],false);
    Users =[];
    result.rows.map(user => {
        let userSchema ={
            "c1": user[0],
            "c2": user[1],
            "c3": user[2],
            "c4": user[3],
        }
        Users.push(userSchema);
    })

    res.json(Users);
});






//post cita medica

router.post('/', async (req,res)=>{
    const {fecha, hora, tipo, obs, cid}= req.body;
    sql="INSERT INTO TBL_CITAMEDICA(FECHACITAM,CITAHORA,TIPOCITA,NOTA,IDPACIENTE) VALUES(:fecha,:hora,:tipo,:obs,:cid)";
    await DB.Dbconnect(sql,[fecha,hora,tipo,obs,cid],true);
    res.status(200).json({"msg": "Registro Creado"})
 });



module.exports=router;