const {Router}=require('express');
const router = Router();
const DB = require('../config/dbconnection');

router.get('/', async (req,res)=>{
    sql = "SELECT * FROM PATIENT"
    let result = await DB.Dbconnect(sql,[],false);
    Patients =[];
    result.rows.map(patient => {
        let patientSchema ={
            "id": patient[0],
            "name": patient[1],
            "lastname": patient[2],
            "dui": patient[3],
            "dateofbirth": patient[4],
            "phone": patient[5],
            "sex" : patient[6],
            "bloodtype": patient[7]
        }
        Patients.push(patientSchema);
    })

    res.json(Patients);
})

router.post('/', async (req,res)=>{
    const{id,name,lastname,dui,dateofbirth,phone,sex,bloodtype} = req.body;
    sql = "INSERT INTO patient(id,name,lastname,dui,dateofbirth,phone,sex,bloodtype) values (:id,:name,:lastname,:dui,:dateofbirth,:phone,:sex,:bloodtype)"
    await DB.Dbconnect(sql,[id,name,lastname,dui,dateofbirth,phone,sex,bloodtype],true);
    res.status(200).json({
        "id": id,
        "name": name,
        "lastname":lastname,
        "dui":dui,
        "dateofbirth":dateofbirth,
        "phone":phone,
        "sex": sex,
        "bloodtype":bloodtype
    })
})





module.exports=router;