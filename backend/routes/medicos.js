const {Router} = require("express");
const router = Router();

//ruta inicial de paciente 
router.get("/",(req,res)=>res.json({text:"soy la ruta medicos"}));

module.exports=router;