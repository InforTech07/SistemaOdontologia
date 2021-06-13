const {Router} = require("express");
const router = Router();
const DB = require('../config/dbconnection.js');



// busqueda de empleado/usuario 
router.get("/:apellidos", async (req,res)=>{
    const apellidos = req.params.apellidos;
    sql = "SELECT e.ID, e.NOMBRES, e.APELLIDOS, e.DUI, e.DIRECCION, e.TELEFONO, e.CARGO, u.USUARIO, u.CONTRASENA FROM TBL_USUARIO u INNER JOIN TBL_EMPLEADO e ON(u.EMPLEADOID = e.ID AND e.APELLIDOS = :apellidos)WHERE u.ESTADO = 1"
    let result = await DB.Dbconnect(sql,[apellidos],false);
    Users =[];
    result.rows.map(user => {
        let userSchema ={
            "u1": user[0],
            "u2": user[1],
            "u3": user[2],
            "u4": user[3],
            "u5": user[4],
            "u6": user[5],
            "u7": user[6],
            "u8": user[7],
            "u9": user[8]
        }
        Users.push(userSchema);
    })

    res.json(Users);
});


//post usuario
router.post('/', async (req,res)=>{
    const { nombres, apellidos, dui, direccion, telefono, cargo, usuario, contrasena} = req.body;
     sql=`BEGIN SP_CREAR_USUARIO(V_NOMBRES => :nombres,V_APELLIDOS => :apellidos,V_DUI => :dui,
        V_DIRECCION => :direccion,V_TELEFONO => :telefono,V_CARGO => :cargo,V_USUARIO =>:usuario,V_CONTRASENA => :contrasena); END;`
     await DB.Dbconnect(sql,[nombres, apellidos, dui, direccion, telefono, cargo, usuario, contrasena],true);
     res.status(200).json({"msg": "Registro Creado"})
 })
 


router.put("/", async (req, res) => {
    const { uid,nombres, apellidos, dui, direccion, telefono, cargo, usuario, contrasena} = req.body;
    sql=`BEGIN SP_ACTUALIZAR_USUARIO(V_IDD => :uid,V_NOMBRES => :nombres,V_APELLIDOS => :apellidos,V_DUI => :dui,
       V_DIRECCION => :direccion,V_TELEFONO => :telefono,V_CARGO => :cargo,V_USUARIO =>:usuario,V_CONTRASENA => :contrasena); END;`
    await DB.Dbconnect(sql,[uid,nombres, apellidos, dui, direccion, telefono, cargo, usuario, contrasena],true);
    res.status(200).json({"msg": "usuario actualizado"})

})

router.delete("/:uidd", async (req, res) => {
    const { id } = req.params.uidd;
    sql = "UPDATE TBL_USUARIO SET estado=0 WHERE EMPLEADOID = :id";
    await DB.Dbconnect(sql, [id], true);

    res.json({ "msg": "Usuario Eliminado" })
})

module.exports=router;
