import sql from 'mssql';
import { sqlConfig } from './src/utils/database.js'

export async function teste_conexao(){
    
        sql.on('error', err => {
            console.log('lib teste_bd.js: ' + err);
            return false;
        })
    
        const pool = await sql.connect(sqlConfig)
        try{
            if(pool._connected == true)
            {
                console.log('Conexão estabelecida!');
                pool.close();
                return true
            }
            else{
                console.log('connection teste_bd.js: ' + pool);
                pool.close();
                return false
            }
    }
    catch(err){
        pool.close();
        console.log('error teste_bd.js: ' + err );
        return false;
        }

    }
