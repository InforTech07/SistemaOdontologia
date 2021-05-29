const oracledb = require('oracledb');

oracledb.initOracleClient({libDir:'C:\\oracle\\instantclient_19_11'});

async function db(){
    let connection;
    try{

        connection = await oracledb.getConnection({user: process.env.DBUSER ,password: process.env.DBPASSWORD,connectString:process.env.DBSTRINGCONNECT});
        
        return connection;
    }catch (err){
        console.error(err);
    } finally{
        if (connection){
            try{
                await connection.close();
            }catch (err){
                console.error(err);
            }
        }
    }
}

exports.connection = db;