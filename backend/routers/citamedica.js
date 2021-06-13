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
module.exports=router;