import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';
//const nombre = "Ian";
//console.log(`Mi nombre es ${nombre}`);
const server = new Server();

//Configurar Body-Parser - Antes de la Ruta
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//Configurar CORS - Cualquier persona puede llamar los servicios
server.app.use(cors({origin: true, credentials: true}));
//Esta es la Ruta de Servicio
server.app.use('/',router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});
