import {comandos} from "../src/commands/commands.js";
import { metodosArchivo } from "../src/utils/filehandler.js";

// Mock del fileHandler para evitar interacción con el sistema de archivos real
jest.mock("../src/utils/fileHandler.js");

describe("Comandos de Expense-Tracker", () => {
  let mockGastos;

  beforeEach(() => {
    // Resetear datos de prueba antes de cada prueba
    mockGastos = [
      { id: 1, descripcion: "Comida", monto: 50, fecha: "2024-11-29T03:41:16.593Z" },
      { id: 2, descripcion: "Transporte", monto: 20, fecha: "2024-12-30T03:41:16.593Z" },
    ];
    metodosArchivo.leerGastos.mockReturnValue(mockGastos);
    metodosArchivo.escribirGastos.mockImplementation((data) => (mockGastos = data));
  });

  test("Debería agregar un nuevo gasto", () => {
    comandos.añadir("Entretenimiento", 30);
    expect(mockGastos).toHaveLength(3);
    expect(mockGastos[2]).toMatchObject({ descripcion: "Entretenimiento", monto: 30 });
  });

  test("Debería actualizar el monto de un gasto existente", () => {
    comandos.actualizar(1, 100);
    expect(mockGastos[0].monto).toBe(100);
  });

  test("Debería eliminar un gasto por ID", () => {
    comandos.eliminar(1);
    expect(mockGastos).toHaveLength(1);
    expect(mockGastos[0].id).toBe(2);
  });

  test("Debería listar todos los gastos si no hay filtros", () => {
    const consoleSpy = jest.spyOn(console, "table").mockImplementation(() => {});
    comandos.listarGastos();
    expect(consoleSpy).toHaveBeenCalledWith(mockGastos);
    consoleSpy.mockRestore();
  });

  test("Debería listar gastos por mes", () => {
    const consoleSpy = jest.spyOn(console, "table").mockImplementation(() => {});
    comandos.listarGastos(11); // Noviembre
    expect(consoleSpy).toHaveBeenCalledWith([mockGastos[0]]);
    consoleSpy.mockRestore();
  });

  test("Debería listar gastos por año", () => {
    const consoleSpy = jest.spyOn(console, "table").mockImplementation(() => {});
    comandos.listarGastos(false, 2024);
    expect(consoleSpy).toHaveBeenCalledWith(mockGastos);
    consoleSpy.mockRestore();
  });

  test("Debería listar gastos por mes y año", () => {
    const consoleSpy = jest.spyOn(console, "table").mockImplementation(() => {});
    comandos.listarGastos(12, 2024); // Noviembre 2024
    expect(consoleSpy).toHaveBeenCalledWith([mockGastos[1]]);
    consoleSpy.mockRestore();
  });
});
