const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\oracle\\instantclient_19_11'});

async function Dbconnect(sql,binds,autoCommit){
   // try{
        let cnn = await oracledb.getConnection({user: process.env.DBUSER,password:process.env.DBPASSWORD,connectString:process.env.DBSTRINGCONNECT});
        let dbresult = await cnn.execute(sql,binds,{autoCommit});
        cnn.release();
        return dbresult;

  //  }catch (err){
   //     console.error(err);
   // } finally{
    //    if (connection){
     //       try{
       //         await connection.close();
        //    }catch (err){
         //       console.error(err);
          //  }
     //   }
   // }
    
}

exports.Dbconnect = Dbconnect;