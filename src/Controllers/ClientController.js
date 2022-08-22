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

    static novoCliente(req, res){
        const { nome , idade } = req.body;
        const cliente = new Client(nome, idade).Insert();
        return res.status(200).json({
            msg : 'Cadastrado com sucesso!'
        });
    }
}