import { metodosArchivo } from "../utils/filehandler.js";

export const listarGastos = (filtroMes=null, filtroAno=null)=>{
    const gastos=metodosArchivo.leerGastos();
    if(!filtroMes && !filtroAno){
        console.table(gastos);
        return;
    }
    const gastosFiltrados = gastos.filter((g) => {
        const fecha = new Date(g.fecha); // Convertir la cadena ISO en un objeto Date
        const mes = fecha.getUTCMonth() + 1; // Obtener el mes (0-indexado, sumamos 1)
        const ano = fecha.getUTCFullYear(); // Obtener el año

        // Filtrar según los valores proporcionados
        const cumpleMes = filtroMes ? mes === parseInt(filtroMes, 10) : true;
        const cumpleAno = filtroAno ? ano === parseInt(filtroAno, 10) : true;

        return cumpleMes && cumpleAno;
    });
    
    console.table(gastosFiltrados);
}