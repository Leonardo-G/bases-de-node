const { options, boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv  = require("./config/yargs");

// console.log(process.argv);
console.log(argv)
console.log(argv.base)

// const [ , , arg3 = "base=5" ] = process.argv;
// const [ , base ] = arg3.split("=");
// console.log(base)

// const base = 7;

crearArchivo( argv.base, argv.l, argv.hasta )
    .then( nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch( err => console.log(err))

