const {Router} = require("express");
const router = Router();
const DB = require('../config/dbconnection.js');

//Get
router.get("/:apellidos", async (req,res)=>{
    const apellido = req.params.apellidos;
    sql = "SELECT p.ID, p.NOMBRES, p.APELLIDOS, p.DUI, p.SEXO, p.TELEFONO, p.DIRECCION, r.NOMBREAPELLIDO, r.PARENTESCO, r.TELEFONO TEL FROM TBL_PACIENTE p  INNER JOIN TBL_RESPONSABLEPACIENTE r ON(p.ID = r.IDPACIENTE AND p.APELLIDOS = :apellido)WHERE p.ESTADO = 1";
    let result = await DB.Dbconnect(sql,[apellido],false);
    Patients =[];
    result.rows.map(patient => {
        let patientSchema ={
            "p1": patient[0],
            "p2": patient[1],
            "p3": patient[2],
            "p4": patient[3],
            "p5": patient[4],
            "p6": patient[5],
            "p7": patient[6],
            "p8": patient[7],
            "p9": patient[8],
            "p10":patient[9]
        }
        Patients.push(patientSchema);
    })

    res.json(Patients);
});


//post
router.post('/', async (req,res)=>{
   const { pnombres,papellidos,pdui,psexo,ptelefono,pdireccion,rnombreapellido,rparentesco,rtelefono} = req.body;
    sql=`BEGIN SP_CREAR_PACIENTE(V_NOMBRES => :pnombres,V_APELLIDOS => :papellidos,V_DUI => :pdui,V_SEXO => :psexo,
         V_TELEFONO => :ptelefono,V_DIRECCION => :pdireccion,V_NOMBREAPELLIDO => :rnombreapellido,V_PARENTESCO =>:rparentesco,V_TELEFONOR => :rtelefono); END;`
    await DB.Dbconnect(sql,[pnombres,papellidos,pdui,psexo,ptelefono,pdireccion,rnombreapellido,rparentesco,rtelefono],true);
    res.status(200).json({"msg": "Registro Creado"});
});

//UPDATE
router.put("/:id", async (req, res) => {
   const {pnombres,papellidos,pdui,psexo,ptelefono,pdireccion} = req.body;
   const  id = req.params.id;
   console.log(id);
   console.log(pnombres);
   sql ="UPDATE TBL_PACIENTE SET NOMBRES = :pnombres,APELLIDOS = :papellidos, DUI = :pdui,SEXO = :psexo,TELEFONO = :ptelefono,DIRECCION = :pdireccion WHERE ID = :id";
  // sql =`BEGIN SP_ACTUALIZAR_PACIENTE(V_IDD => :id,V_NOMBRES => :pnombres,V_APELLIDOS => :papellidos,V_DUI => :pdui,V_SEXO => :psexo,V_TELEFONO => :ptelefono,V_DIRECCION => :pdireccion,V_NOMBREAPELLIDO => :rnombreapellido,V_PARENTESCO =>:rparentesco,V_TELEFONOR => :rtelefono); END;`
   await DB.Dbconnect(sql[pnombres,papellidos,pdui,psexo,ptelefono,pdireccion,id], true);
   res.status(200).json({"msg": "Paciente Actualizado"})

});

//delete
router.delete("/:pidd", async (req, res) => {
    const  idpaciente  = req.params.pidd;
    sql = "UPDATE TBL_PACIENTE  SET ESTADO = 1 WHERE ID = :idpaciente";
    await DB.Dbconnect(sql, [idpaciente], true);
    res.json({ "msg": "Paciente Eliminado" })
});

module.exports=router;