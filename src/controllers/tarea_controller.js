

import Tarea from "../models/tarea_model";




export const paginaIndexTareas = async(req,res)=>{

    try{
        const tareas = await Tarea.find().lean();

        const opciones = {
            lista_tareas: tareas
        };

        res.render("index", opciones);

    }catch(error){
        console.log(error.message);

        const opciones = {
            mensaje_error : error.message 
        };

        return res.render("error", opciones);
    }

}


export const crearNuevaTarea = async(req,res)=>{

    try{
        const nueva_tarea = new Tarea(req.body);

        await nueva_tarea.save();

        res.redirect("/");

    }catch(error){
        console.log(error.message);

        const opciones = {
            mensaje_error : error.message 
        };

        return res.render("error", opciones);
    }
}


// hacemos efecto toggle para la tarea realizada
export const tareaRealizada = async(req,res)=>{

    let {id} = req.params;

    const tarea = await Tarea.findById(id);

    tarea.tarea_realizada = !tarea.tarea_realizada;

    await tarea.save();

    res.redirect("/");


}


export const paginaEditarTarea = async(req,res)=>{

    const {id} = req.params;

    const tarea = await Tarea.findById(id).lean();

    const opciones = {
        tarea: tarea 
    };

    res.render("edit",opciones);

}



export const editarTareaPorId = async(req,res)=>{

    const {id} = req.params;

    // console.log(id)

    const {titulo, descripcion} = req.body;


    console.log({titulo, descripcion});

    await Tarea.updateOne({_id: id}, {titulo, descripcion});

    res.redirect("/");
    
}


export const eliminarTareaPorId = async(req,res)=>{

    const {id} = req.params;

    await Tarea.remove({_id: id});

    res.redirect("/");

}
