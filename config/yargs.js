const argv = require('yargs')
                .option("b",{
                    alias: "base",
                    type: "number",
                    demandOption: true
                })
                .check( (argv, options) => {
                    if(isNaN(argv.b)){
                        throw "La base tiene que ser un numero";
                    }
                    return true;
                } )
                .option("l", {
                    file: "listar",
                    type:"boolean",
                    demandOption: true,
                    default: false
                })
                .option("h",{
                    file: "hasta",
                    type: "number",
                    demandOption: true,
                    default: 10
                })
                .check( (argv) => {
                    if(isNaN(argv.h)){
                        throw "Tiene que ser un numero válido";
                    }
                    return true;
                } )
                .argv

module.exports = argv