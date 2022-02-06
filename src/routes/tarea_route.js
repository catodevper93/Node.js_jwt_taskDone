
import {Router} from "express";

import {paginaIndexTareas, crearNuevaTarea, tareaRealizada,
    paginaEditarTarea, editarTareaPorId, eliminarTareaPorId} from "../controllers/tarea_controller";


const router = Router();


// renderizamos todas las tareas en la página index
router.get("/", paginaIndexTareas);

router.post("/new-task", crearNuevaTarea);

// efecto toggle
router.get("/task-done/:id", tareaRealizada);

// renderizamos pagina para editar tarea
router.get("/edit-task/:id", paginaEditarTarea);

router.post("/edited-task/:id", editarTareaPorId);


router.get("/delete-task/:id", eliminarTareaPorId);


export default router;