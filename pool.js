import sql from 'mssql';
import { sqlConfig } from './src/utils/database.js';

export async function CreatePoolSqlServer(){
    try{
        const pool = new sql.ConnectionPool(sqlConfig)
        await pool.connect();
        return pool
        
    
        }

catch(err){
    console.log('Erro to create pool connection: ${err}')
    return false
}
}