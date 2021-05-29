const {Router} = require("express");
const router = Router();

//ruta inicial de user 
router.get("/",(req,res)=>res.json({text:"soy la ruta de ayuda"}));

module.exports=router;