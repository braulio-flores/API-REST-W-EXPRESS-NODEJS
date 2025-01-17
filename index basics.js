// ESTAMOS USANDO EXPRESS LO INSTALAMOS USANDO npm install --save express
// ESTE ARCHIVO LO CREAMOS COMO PUNTO DE PARTIDA
// EL CUAL AL MOMENTO DE CREAR EL PROYECTO CON NPM INIT NOS PREGUNTO CUAL SERIA

// ´PROCEDEREMOS A MONTAR EL SERVIDOR PERO DE UNA FORMA MAS SENCILLA USANDO EXPRESS 
let express = require('express'); 
let app = express();

// MIDLEWARE
// SON FUNCIONALIDADES QUE SE EJCUTAN ENTRE LA PETICION Y LA RESPUESTA
// EL MIDELWARE ANTES DE IR A LAS RUTAS SIGUIENTES PRIMERO VERIFICA DE UNA CARPETA QUE NOSOTROS DEFINAMOS 
// SI HAY UN ARCHIVO ESTATICO PARA MANDAR AL CLIENTE AHI
// ASI QUE PRIMERO CREAREMOS UNA CARPETA EN DONDE METAMOS TODO A LO QUE EL CLINTE PODRA ACCEDER, PUBLIC PUEDE SER LA MEJOR OPCION PARA LLAMARLE
app.use(express.static('public'))//USE SE UTILIZA PARA EJECUTAR FUNCIONES MIDLEWARE
// ENTONCES DECIMOS QUE PRIMERO PASARA POR EL MIDLEWARE
// BASICAMENTE SI ENCUNETRA LO QUE ESTA PIDIENDO EN MIDLEWARE LO MANDA, SINO, SIGUE CON LAS RUTAS DE ABAJO


app.get('/',(req, res)=>{
    res.send(`<html><body><h1>Hola Mundo</h1></body></html>`);
});
app.get('/pagina1',(req, res)=>{
    res.send(`<html><body><h1>Ppagina 1</h1></body></html>`);
});
app.get('/pagina1/:numeroC/:numero2',(req, res)=>{ //ESTA URL CAMBIA EL VALOR DE LA URL EN EL SEGUNDO PARAMETRO ETC
    res.send(`<html><body><h1>Esta es la url con el num ${req.params.numero2}</h1></body></html>`);
});

app.listen(8888,()=>{
    // FUNCION QUE SE EJECUTA CUANDO EL SERVIDOR ESTA LISTO
    console.log("SE LEVANTO EL SERVIDOR");
});

// PARA CORRER EL SERVIDOR SE CORRERA IGUAL
// NODEMON index.js Y ABRIMOS EN ESTE CASO EL PUERTO 8888 EN EL NAVEGADOR