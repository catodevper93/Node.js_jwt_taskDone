
import express from "express";

import morgan from "morgan";

import {create} from "express-handlebars";

import path from "path";

import tarea_rutas from "./src/routes/tarea_route";

import { configMongoDB } from "./src/HELPERS/config_mongodb";


const app = express();


const PUERTO = process.env.PORT || 4000;

app.set("puerto", PUERTO);



// CONFIGURACIÓN MOTOR PLANTILLA
app.set("views", path.join(__dirname, "src/views"));

const opciones = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
});

app.engine(".hbs", opciones.engine);

app.set("view engine", ".hbs");



// MIDDLEWARES 
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));


// rutas
app.use(tarea_rutas);

// ruta hacia la carpeta pública
app.use(express.static(path.join(__dirname, "src/public")));


// en caso de que las rutas NOO coincidan disparamos el error 404 de la página.
app.use((req,res)=>{
    res.status(404).render("pagina404");
});


// escuchamos el servidor en el puerto especificado
app.listen(app.get("puerto"), ()=>{

    console.log("Server run on port", app.get("puerto"));

    configMongoDB();

});