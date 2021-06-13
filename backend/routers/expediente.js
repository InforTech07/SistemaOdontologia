const {Router} = require("express");
const router = Router();
const DB = require('../config/dbconnection');

//ruta inicial de user 
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

// get diagnosticos
router.get("/h/:eid", async (req,res)=>{
    const eid = req.params.eid;
    sql = "SELECT FECHA, DIAGNOSTICO, RESULTADO, TRATAMIENTO FROM TBL_HISTORIALMEDICO WHERE IDPACIENTE = :eid";
    let result = await DB.Dbconnect(sql,[eid],false);
    Historial =[];
    result.rows.map(h => {
        let hSchema ={
            "h1": h[0],
            "h2": h[1],
            "h3": h[2],
            "h4": h[3],
        }
        Historial.push(hSchema);
    })

    res.json(Historial);
}); 


//post diagnositico
router.post('/d', async (req,res)=>{
    const { ediagnostico,eresultado,etratamiento,eid} = req.body;
     sql="INSERT INTO TBL_HISTORIALMEDICO(DIAGNOSTICO,RESULTADO,TRATAMIENTO,IDPACIENTE) VALUES(:ediagnostico,:eresultado,:etratamiento,:eid)";
     await DB.Dbconnect(sql,[ediagnostico,eresultado,etratamiento,eid],true);
     res.status(200).json({"msg": "Registro Creado"})
 });

 //post odontograma
 router.post('/o', async (req,res)=>{
    const { eestado,enumero,eid} = req.body;
     sql="INSERT INTO TBL_ODONTOGRAMA(ESTADODIENTE,IDDIENTE,IDPACIENTE) VALUES(:eestado,:enumero,:eid)";
     await DB.Dbconnect(sql,[eestado,enumero,eid],true);
     res.status(200).json({"msg": "Registro Creado"})
 });
 

module.exports=router;