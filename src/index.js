
import express from "express";
import "./config/mongoose";
import { PORT } from './config';
import cors from 'cors';
import morgan from 'morgan'

import productRoutes from "./routes/products.routes"
import authRoutes from "./routes/auth.routes"



const app = express();

app.use(cors());
app.use(morgan('dev'))

app.use(express.json());

app.use(productRoutes);
app.use(authRoutes);

/*app.use((err,req,res,next) => {
    const error = {
        status: err.status || 500,
        message: err.message,
    }
    res.json(error);
})*/


//Iniciamos el servidor 
app.listen(PORT);
console.log("Servidor escuchando en el puerto: ", PORT);