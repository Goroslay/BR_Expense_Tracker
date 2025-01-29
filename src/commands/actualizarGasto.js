import { metodosArchivo } from "../utils/filehandler.js";

export const actualizar = (id,nuevoMonto)=>{
    const gastos=metodosArchivo.leerGastos();
    const gastoAActualizar = gastos.find((g)=>parseInt(g.id)===parseInt(id));
    if(!gastoAActualizar){
        console.log("Error: No se encuentra el id ingresado");
        return
    };
    gastoAActualizar.monto=parseFloat(nuevoMonto);
    metodosArchivo.escribirGastos(gastos);
    console.log("Monto actualizado con exito");
}