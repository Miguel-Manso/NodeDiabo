import express from "express";
import { StoreProduct } from './src/Controllers/ProductController.js'
const routes = express.Router();

//const ProductController = require('./src/Controllers/ProductController');

routes.get("/", (req, res) => {
    return res.status(200).send("Server running");
})

routes.post("/produto/novo", StoreProduct);

export { routes };
