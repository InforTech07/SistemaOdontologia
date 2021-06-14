const {Router} = require("express");
const router = Router();
const DB = require('../config/dbconnection');

//ruta inicial de resultado 
router.get("/e", async (req,res)=>{
    sql = "SELECT e.NOMBRES, e.APELLIDOS, e.DUI, e.DIRECCION, e.TELEFONO, e.CARGO, u.USUARIO FROM TBL_USUARIO u INNER JOIN TBL_EMPLEADO e ON(u.EMPLEADOID = e.ID)WHERE u.ESTADO = 1"
    let result = await DB.Dbconnect(sql,[],false);
    Users =[];
    result.rows.map(user => {
        let userSchema ={
            "d1": user[0],
            "d2": user[1],
            "d3": user[2],
            "d4": user[3],
            "d5": user[4],
            "d6": user[5],
            "d7": user[6],
        }
        Users.push(userSchema);
    })

    res.json(Users);
});

router.get("/h", async (req,res)=>{
    sql = "SELECT p.NOMBRES, p.APELLIDOS, p.DUI, TO_CHAR(h.FECHA, 'DD/MM/YYYY'), h.DIAGNOSTICO, h.RESULTADO, h.TRATAMIENTO FROM TBL_PACIENTE p INNER JOIN TBL_HISTORIALMEDICO h ON(p.ID = h.IDPACIENTE) WHERE p.ESTADO = 1"
    let result = await DB.Dbconnect(sql,[],false);
    Users =[];
    result.rows.map(user => {
        let userSchema ={
            "d1": user[0],
            "d2": user[1],
            "d3": user[2],
            "d4": user[3],
            "d5": user[4],
            "d6": user[5],
            "d7": user[6],
        }
        Users.push(userSchema);
    })

    res.json(Users);
});


router.get("/c", async (req,res)=>{
    sql = "SELECT p.NOMBRES, p.APELLIDOS, p.DUI, c.FECHACITAM, c.CITAHORA, c.TIPOCITA, c.NOTA FROM TBL_PACIENTE p INNER JOIN TBL_CITAMEDICA c ON(p.ID = c.IDPACIENTE) WHERE p.ESTADO = 1";
    let result = await DB.Dbconnect(sql,[],false);
    Users =[];
    result.rows.map(user => {
        let userSchema ={
            "d1": user[0],
            "d2": user[1],
            "d3": user[2],
            "d4": user[3],
            "d5": user[4],
            "d6": user[5],
            "d7": user[6],
        }
        Users.push(userSchema);
    })

    res.json(Users);
});



module.exports=router;