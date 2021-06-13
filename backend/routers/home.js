const {Router} = require("express");
const router = Router();
const DB = require('../config/dbconnection');

router.get("/:id", async (req,res)=>{
    const idempleado = req.params.id;
    console.log(idempleado);
    sql="SELECT NOMBRES, APELLIDOS, CARGO FROM TBL_EMPLEADO WHERE ID=:idempleado";
    let result = await DB.Dbconnect(sql,[idempleado],false);
    Users =[];
    result.rows.map(user => {
        let userSchema ={
            "Nombre": user[0],
            "Apellido": user[1],
            "Cargo": user[2]
        }
        Users.push(userSchema);
    })
    res.json(Users);
});

module.exports=router;