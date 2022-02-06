

import mongoose from "mongoose";


export const configMongoDB = async()=>{


    const URL_MONGO = "mongodb://localhost/task_done_ok";

    const opciones = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    await mongoose.connect(URL_MONGO, opciones );

    console.log("Database is connected ");

}


