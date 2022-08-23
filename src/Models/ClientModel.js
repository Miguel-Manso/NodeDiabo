
import { CreatePoolSqlServer} from "../../pool.js"
const Conexao = await CreatePoolSqlServer();

export class Client{
    constructor(nome, idade, cpf, id){
        this._nome = nome,
        this._idade = idade,
        this._cpf = cpf,
        this._id = id
    }

    static async SelectAll(){
        try{
            const {recordset} = await Conexao.query('select * from Cliente');
            return recordset
        }
        catch(err){
            console.log("error script ClientModel.js " + err)
            return false

        }
    }

    async Insert(){
        try{
            const { rowsAffected } = await Conexao.query(`insert into Cliente values('${ this._nome}', ${this._idade}, '${this._cpf}')`)
            return rowsAffected
            
        }catch (err){
            console.log("erro Model" + err)
            return false
        }

     
        
    }
    async Update(){
        try{
            const {rowsAffected} = await Conexao.query(`update Cliente set nome = '${ this._nome}', idade = ${this._idade}, cpf = '${this._cpf}' where id = ${this._id}`)
            return rowsAffected
        }catch(err)
        {
            console.log("error model update" + err)
            return false
        }
    }
}