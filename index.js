import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const PORT = 5000;

// public directory 
app.use(express.static('public'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist'));


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.listen(PORT, () => {
    console.log('Estoy levantando el servidor en http://localhost:',PORT);
})
