import { añadir } from "./añadirGasto.js";
import { actualizar } from "./actualizarGasto.js";
import { eliminar } from "./borrarGasto.js";
import { listarGastos } from "./verGastos.js";
import { resumen } from "./verResumen.js";

export const comandos ={
    añadir,
    actualizar,
    eliminar,
    listarGastos,
    resumen
};