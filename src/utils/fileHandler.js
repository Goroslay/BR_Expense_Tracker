import fs from "fs";

const ruta = "./src/data/gastos.json";

const leerGastos = ()=>{
    
    if(!fs.existsSync(ruta)){
        fs.writeFileSync(ruta,JSON.stringify([]));
    };

    const gastos = fs.readFileSync(ruta,"utf-8");
    return(JSON.parse(gastos));

}

const escribirGastos = (gasto) =>{

    fs.writeFileSync(ruta,JSON.stringify(gasto,null,2));

}

export const metodosArchivo = {
    leerGastos,
    escribirGastos
}