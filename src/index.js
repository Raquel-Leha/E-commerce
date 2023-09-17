
import express from "express";
import "./config/mongoose";

import productRoutes from "./routes/products.routes"



const app = express();

app.use(express.json());

app.use(productRoutes);



//Iniciamos el servidor 
app.listen(3000);
console.log("Servidor escuchando en el puerto: ", 3000);