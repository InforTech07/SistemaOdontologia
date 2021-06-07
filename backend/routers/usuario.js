const {Router} = require("express");
const router = Router();
const DB = require('../config/dbconnection');
// ruta inicial de user 
router.get("/", async (req,res)=>{
    sql = "SELECT * FROM TBL_USUARIO WHERE ESTADO=1"
    let result = await DB.Dbconnect(sql,[],false);
    Users =[];
    result.rows.map(user => {
        let userSchema ={
            "id": user[0],
            "usuario": user[1],
            "contrasena": user[2]
        }
        Users.push(userSchema);
    })

    res.json(Users);
});

router.post('/', async (req,res)=>{
    const { usuario, contrasena } = req.body;
    sql = "INSERT INTO TBL_USUARIO(USUARIO,CONTRASENA) values (:usuario,:contrasena)";
    await DB.Dbconnect(sql,[usuario,contrasena],true);
    res.status(200).json({
        "usuario": usuario,
        "contraseña": contrasena
    })
})

router.put("/", async (req, res) => {
    const { id,usuario,contrasena } = req.body;

    sql = "UPDATE TBL_USUARIO SET usuario=:usuario, contrasena=:contrasena where id=:id";

    await DB.Dbconnect(sql, [usuario, contrasena,id], true);

    res.status(200).json({
        "id": id,
        "usuario": usuario,
        "contrasena": contrasena
    })

})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    sql = "UPDATE TBL_USUARIO SET estado=0 WHERE ID=:id";

    await DB.Dbconnect(sql, [id], true);

    res.json({ "msg": "Usuario Eliminado" })
})



module.exports=router;
