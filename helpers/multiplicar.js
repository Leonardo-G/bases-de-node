const fs = require("fs");

const crearArchivo = async ( base = 5, listar, hasta) => {
    try {
        let salida = "";
        for (let i = 1; i <= hasta; i++) {
            salida += ` ${ base } X ${ i }  = ${ 5 * i } \n` ;
        }
    
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        if(!listar) return console.error("se necesita el listar en TRUE");

        console.log(salida)
    
        return `tabl de ${ base } creada`;
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo: crearArchivo
}