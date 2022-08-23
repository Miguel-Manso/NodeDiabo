import { Client } from "../Models/ClientModel.js";

export class ClientController{

    static async listarTodos( req, res){
        try{
            const clientes = await Client.SelectAll();
            return res.status(200).json(clientes)
           
        } catch(err){
            console.log('Error controller ClientController.js: ' + err)
            return res.status(500).json(error)
        }
    }

    static async novoCliente(req, res){
        try{
            const{nome, idade, cpf} = req.body;
            const novo_Cliente = await new Client(nome, idade, cpf).Insert()
            return res.status(200).json(novo_Cliente);
          
            }catch(err){
                console.log("erro do controller" + err)
                return res.status(500).json(err)
        }
    }

    static async alterarCliente(req, res){
        try{
            const {nome, idade, cpf} = req.body;
            const { id } = req.params;
            const alt_cliente = await new Client(nome, idade, cpf, id).Update();
            return res.status(200).json(alt_cliente);

        }catch(err){
            console.log("erro do controller" + err)
            return res.status(500).json(err)

        }
    }
}