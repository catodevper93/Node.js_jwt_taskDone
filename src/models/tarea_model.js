

import { Schema, model } from "mongoose";


const tareaSchema = Schema(

    {
        titulo: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        descripcion: {
            type: String,
            trim: true,
        },

        tarea_realizada: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }

);


export default model("Tarea", tareaSchema);

