const {Router} = require("express");
const router = Router();
const DB = require('../config/dbconnection');
//ruta inicial de user 
router.get("/:usuario/:contrasena", async (req,res)=>{
//    const{usuario,contrasena}=req.body;
    const usuario = req.params.usuario;
    const contrasena = req.params.contrasena;
    sql="SELECT * FROM TBL_USUARIO WHERE (USUARIO = :usuario AND CONTRASENA=:contrasena)"
    let resultdb = await DB.Dbconnect(sql,[usuario,contrasena],false);
   
    Users =[];
   
    resultdb.rows.map(user => {
        let userSchema ={
            "id": user[0],
            "usuario": user[1],
            "contrasena": user[2],
            "empleadoid": user[3],
            "estado": user[4]
        }
        Users.push(userSchema);
    })
    res.json(Users);
});

module.exports=router;