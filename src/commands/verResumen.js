import { metodosArchivo } from "../utils/filehandler.js";

export const resumen = ()=>{
    const gastos = metodosArchivo.leerGastos();
    let total = 0;
    gastos.forEach(m => {
        total += parseFloat(m.monto);
    });

    console.log(`El resumen total es de ${total}$`);
}