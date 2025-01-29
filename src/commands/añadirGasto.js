import { metodosArchivo } from "../utils/filehandler.js";

export const añadir = (descripcion, monto) =>{

    const gastos = metodosArchivo.leerGastos();
    const nuevogasto ={
        id: gastos.length ? gastos[gastos.length-1].id +1 : 1 ,
        fecha: new Date().toISOString(),
        descripcion: descripcion,
        monto: parseFloat(monto)
    }

    gastos.push(nuevogasto);

    metodosArchivo.escribirGastos(gastos);

    console.log(`Gasto con id: ${nuevogasto.id} y monto: ${nuevogasto.monto} añadido correctamente`);

}