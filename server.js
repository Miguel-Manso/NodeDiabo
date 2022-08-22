import express from "express";
import cors from "cors";
import { routes } from "./routes.js";
import { teste_conexao } from "./test_bd.js";
const port = process.env.PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended : true,
}),
);

app.use(routes);

    teste_conexao().then((res) => {
        if (res == true)
        {         
        app.listen(port, () => {
            console.log(`Server runnig on ${ port }`);
            })
        }
    })
