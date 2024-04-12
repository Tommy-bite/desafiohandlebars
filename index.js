import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', function (req ,res) {
    res.send('Hola');
})

app.listen(PORT, () => {
    console.log('Estoy levantando el servidor en localhost:',PORT);
})
