import { Product } from "../Models/ProductModel.js";

async function StoreProduct(req, res){
    const { nome, price, qtd } = req.body;
    let prod = new Product(nome, price, qtd);
    return res.status(200).send(prod.getName());
}

export { StoreProduct }