import express from "express";
import cors from 'cors';
import sql from 'mssql';
import {sqlConfig} from "./database.js";
import { routes } from './routes.js';

const PORT = process.env.PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

// Apartir daqui todo o fluxo é redirecionado as rotas
app.use(routes);

app.use(express.urlencoded({
    extended : true,
}),
);

// * Testando conexão antes de subir o servidor

async function ConnectTest(){
    try{
        sql.on('error', err => {
            console.log(`Lib error: ${err}`);
            return false;
        });

        let pool = await sql.connect(sqlConfig);

        if(JSON.stringify(pool._connected) == 'true')
        {
            console.log('Databse connected')
            return true
        }
        else
        {
            console.log(`Database connect error: ${pool}`);
            return false
        }
    }   
    catch(err){
        console.log(`Database connect error: ${err}`);
        return false;
    }

}

ConnectTest().then((data) =>{
    if(data)
    {
        app.listen(PORT, ()=>{
            console.log('Server running')
        });
    }
})