import express from 'express';
import { engine } from 'express-handlebars';

import { services } from './data/services.data.js';
import path from 'path';

const app = express();
const PORT = 5000;

const __dirname = import.meta.dirname;

// public directory 
app.use(express.static( path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname,'node_modules/jquery/dist')));


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'/views'));

app.get('/', (req, res) => {
    res.render('home' , {title: "Home Page 2.0"});
});

app.get('/services', (req, res) => {
    res.render('services', {services});
});

app.get('/services/:name' , (req, res) => {

    const nameURL = req.params.name;
    const service = services.find(item => item.url === `/services/${nameURL}`)

    if(!service){
        return res.render('404', {title : "No se encuentra el servicio"});
    }

    return res.render('service', {service});
})

app.get('*', (req, res) =>  {
    res.render('404', {title : "La pagina no existe"});
})

app.listen(PORT, () => {
    console.log('Estoy levantando el servidor en http://localhost:',PORT);
})
