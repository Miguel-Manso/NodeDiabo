
import { CreatePoolSqlServer} from "../../pool.js"
const Conexao = await CreatePoolSqlServer();

export class Client{
    constructor(nome, idade, cpf){
        this._nome = nome,
        this._idade = idade,
        this._cpf = cpf
    }

    static async SelectAll(){
        try{
            const {recordset} = await Conexao.query('select * from Cliente');
            return recordset
        }
        catch(err){

        }
    }

    Insert(){
        ClientesTable.push({
            nome : this._nome,
            idade : this._idade
        })
    }
}