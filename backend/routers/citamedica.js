const {Router} = require("express");
const router = Router();

//ruta inicial de cita medica 
router.get("/",(req,res)=>res.json({text:"soy la ruta de ciata medica"}));

module.exports=router;