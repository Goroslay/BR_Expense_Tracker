import { metodosArchivo } from "../utils/filehandler.js";

export const eliminar = (id)=>{
    
    const gastos = metodosArchivo.leerGastos();
    const gastoAEliminar = gastos.find((g)=> parseInt(g.id) === parseInt(id));
    if(!gastoAEliminar){
        console.log("Error: No se encuentra el id ingresado");
        return;
    }

    const gastosEliminados = gastos.filter((g) => parseInt(g.id)!==parseInt(id));
    metodosArchivo.escribirGastos(gastosEliminados);
    console.log("Monto eliminado con exito");
}