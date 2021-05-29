const {Router} = require("express");
const router = Router();

//ruta inicial de resultado 
router.get("/",(req,res)=>res.json({text:"soy la ruta de repoetes"}));

module.exports=router;