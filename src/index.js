import { Command } from "commander";
import { comandos } from "./commands/commands.js";

const program = new Command();

program
.name("Expense-Tracker")
.description("Aplicacion de seguimiento de gastos desde el terminal")
.version("1.0");

program
.command("agregar")
.description("Agregar un nuevo gasto")
.argument("<descripcion>", "Descripcion del gasto")
.argument("<monto>", "Monto gastado")
.action((descripcion, monto) => {
    comandos.añadir(descripcion, monto);
  });

program
.command("actualizar")
.description("Actualizar el monto de un gasto")
.argument("<id>", "ID del gasto")
.argument("<monto>", "Nuevo monto a reemplazar")
.action((id, monto) => {
    comandos.actualizar(id, monto);
});

program
.command("eliminar")
.description("Eliminar un gasto registrado")
.argument("<id>", "ID del gasto a eliminar")
.action((id) => {
comandos.eliminar(id);
});

program
.command("gastos")
.description("Lista los gastos en general o de un periodo en específico")
.option('-m, --mes <mes>', 'Resumen por mes (1-12)')
.option('-a, --ano <año>', 'Resumen por año (e.g., 2024)')
.action((options) => {
    const { mes, ano } = options;

    if (!mes && !ano) {
      // Si no se proporcionan opciones, lista todos los gastos
      comandos.listarGastos();
    }else if(!mes) {
      // Si se proporcionan opciones, pasa los valores al comando
      comandos.listarGastos(false, ano);
    }else if(!ano) {
        // Si se proporcionan opciones, pasa los valores al comando
        comandos.listarGastos(mes, false);
    }else{
        comandos.listarGastos(mes, ano);
    }
});

program.parse();